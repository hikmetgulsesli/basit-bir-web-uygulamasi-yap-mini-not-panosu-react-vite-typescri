import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock utils/storage to verify persistence
const mockSaveState = vi.fn();
const mockLoadState = vi.fn(() => null);

vi.mock('./utils/storage', () => ({
  loadState: () => mockLoadState(),
  saveState: (state: unknown) => mockSaveState(state),
  clearState: () => {},
  exportNotes: (notes: unknown[]) => JSON.stringify(notes),
}));

// Mock navigator.clipboard
Object.defineProperty(window, 'navigator', {
  value: {
    clipboard: {
      writeText: vi.fn().mockResolvedValue(undefined),
    },
  },
  writable: true,
  configurable: true,
});

describe('App UI', () => {
  beforeEach(() => {
    mockSaveState.mockClear();
    mockLoadState.mockClear();
    mockLoadState.mockReturnValue(null);
    vi.clearAllMocks();
  });

  it('renders empty state when no notes', () => {
    render(<App />);
    expect(screen.getByText('Henüz notunuz yok')).toBeInTheDocument();
    expect(screen.getByText('İlk Notunu Ekle')).toBeInTheDocument();
  });

  it('can add a note from empty state', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    expect(screen.getByText('Yeni Not Ekle')).toBeInTheDocument();

    const titleInput = screen.getByPlaceholderText('Not başlığını buraya girin...');
    const contentInput = screen.getByPlaceholderText('Notunuzu yazmaya başlayın...');
    fireEvent.change(titleInput, { target: { value: 'Alışveriş Listesi' } });
    fireEvent.change(contentInput, { target: { value: 'Kahve, süt, ekmek' } });

    fireEvent.click(screen.getByText('Kaydet'));
    expect(screen.getByText('Alışveriş Listesi')).toBeInTheDocument();
  });

  it('can add a note with todos', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Görev Listesi' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'Yapılacaklar' } });

    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Görev 1' } });
    fireEvent.click(screen.getByText('Ekle'));

    fireEvent.change(todoInput, { target: { value: 'Görev 2' } });
    fireEvent.click(screen.getByText('Ekle'));

    fireEvent.click(screen.getByText('Kaydet'));
    expect(screen.getByText('Görev Listesi')).toBeInTheDocument();
    expect(screen.getByText('Görev 1')).toBeInTheDocument();
    expect(screen.getByText('Görev 2')).toBeInTheDocument();
  });

  it('can mark a todo as completed from dashboard', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Test Notu' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'İçerik' } });

    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Tamamlanacak görev' } });
    fireEvent.click(screen.getByText('Ekle'));

    fireEvent.click(screen.getByText('Kaydet'));

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
    fireEvent.click(checkboxes[0]);

    // Todo should show completed styling
    expect(screen.getByText('Tamamlanacak görev')).toBeInTheDocument();
  });

  it('can delete a note', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Silinecek' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'X' } });
    fireEvent.click(screen.getByText('Kaydet'));

    expect(screen.getByText('Silinecek')).toBeInTheDocument();

    const deleteButtons = screen.getAllByLabelText('Notu Sil');
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText('Silinecek')).not.toBeInTheDocument();
  });

  it('can search notes', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Proje A' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'İçerik A' } });
    fireEvent.click(screen.getByText('Kaydet'));

    fireEvent.click(screen.getByText('Not Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Proje B' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'İçerik B' } });
    fireEvent.click(screen.getByText('Kaydet'));

    // Search
    const searchInput = screen.getByPlaceholderText('Notlarda ara...');
    fireEvent.change(searchInput, { target: { value: 'A' } });

    expect(screen.getByText('Proje A')).toBeInTheDocument();
    expect(screen.queryByText('Proje B')).not.toBeInTheDocument();
  });

  it('can filter notes by completed', () => {
    render(<App />);
    // Add note with todo
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Tamamlanan' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'İçerik' } });
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Görev' } });
    fireEvent.click(screen.getByText('Ekle'));
    fireEvent.click(screen.getByText('Kaydet'));

    // Mark todo as completed
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    // Filter to completed
    fireEvent.click(screen.getByText('Tamamlananlar'));
    expect(screen.getByText('Tamamlanan')).toBeInTheDocument();

    // Add another incomplete note
    fireEvent.click(screen.getByText('Not Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Bekleyen' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'İçerik' } });
    fireEvent.click(screen.getByText('Kaydet'));

    // Switch to pending filter
    fireEvent.click(screen.getByText('Bekleyenler'));
    expect(screen.getByText('Bekleyen')).toBeInTheDocument();
    expect(screen.queryByText('Tamamlanan')).not.toBeInTheDocument();
  });

  it('can view note detail', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Detay Notu' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'Detay içeriği' } });
    fireEvent.click(screen.getByText('Kaydet'));

    fireEvent.click(screen.getByText('Detay Notu'));
    expect(screen.getByText('Tüm Notlara Dön')).toBeInTheDocument();
    expect(screen.getByText('Detay içeriği')).toBeInTheDocument();
    expect(screen.getByText('Düzenle')).toBeInTheDocument();
    expect(screen.getByText('Sil')).toBeInTheDocument();
  });

  it('can edit a note', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Eski Başlık' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'Eski içerik' } });
    fireEvent.click(screen.getByText('Kaydet'));

    fireEvent.click(screen.getByText('Eski Başlık'));
    fireEvent.click(screen.getByText('Düzenle'));

    expect(screen.getByText('Notu Düzenle')).toBeInTheDocument();
    fireEvent.change(screen.getByDisplayValue('Eski Başlık'), { target: { value: 'Yeni Başlık' } });
    fireEvent.click(screen.getByText('Kaydet'));

    expect(screen.getByText('Yeni Başlık')).toBeInTheDocument();
  });

  it('can toggle todo from detail view', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Detay Görev' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'İçerik' } });
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Detay görevi' } });
    fireEvent.click(screen.getByText('Ekle'));
    fireEvent.click(screen.getByText('Kaydet'));

    fireEvent.click(screen.getByText('Detay Görev'));
    const todoIcon = screen.getByText('radio_button_unchecked');
    fireEvent.click(todoIcon);
    expect(screen.getByText('check_circle')).toBeInTheDocument();
  });

  it('persists notes to storage', async () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), { target: { value: 'Kalıcı Not' } });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), { target: { value: 'Kalıcı içerik' } });
    fireEvent.click(screen.getByText('Kaydet'));

    await waitFor(() => {
      expect(mockSaveState).toHaveBeenCalled();
    });

    const lastCall = mockSaveState.mock.calls[mockSaveState.mock.calls.length - 1][0];
    expect(lastCall.notes).toHaveLength(1);
    expect(lastCall.notes[0].title).toBe('Kalıcı Not');
  });
});
