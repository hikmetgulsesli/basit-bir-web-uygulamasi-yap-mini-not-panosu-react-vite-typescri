import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('App UI', () => {
  beforeEach(() => {
    localStorageMock.clear();
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
});
