import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NotEkleduzenle } from './NotEkleduzenle';
import type { Note } from '../types/domain';

describe('NotEkleduzenle - Add Mode', () => {
  const defaultProps = {
    onSave: vi.fn(),
    onUpdate: vi.fn(),
    onCancel: vi.fn(),
  };

  it('renders add form title', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    expect(screen.getByText('Yeni Not Ekle')).toBeInTheDocument();
  });

  it('renders form inputs', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    expect(screen.getByPlaceholderText('Not başlığını buraya girin...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...')).toBeInTheDocument();
  });

  it('renders category options', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    expect(screen.getByText('İş')).toBeInTheDocument();
    expect(screen.getByText('Kişisel')).toBeInTheDocument();
    expect(screen.getByText('Fikirler')).toBeInTheDocument();
  });

  it('calls onCancel when cancel clicked', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    fireEvent.click(screen.getByText('İptal'));
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });

  it('calls onSave with note data when form submitted', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), {
      target: { value: 'Yeni Not' },
    });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), {
      target: { value: 'Not içeriği' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(defaultProps.onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Yeni Not',
        content: 'Not içeriği',
        category: 'work',
        important: false,
        todos: [],
      })
    );
  });

  it('does not save when title is empty', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), {
      target: { value: 'İçerik' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(defaultProps.onSave).not.toHaveBeenCalled();
  });

  it('does not save when content is empty', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), {
      target: { value: 'Başlık' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(defaultProps.onSave).not.toHaveBeenCalled();
  });

  it('can add a todo item', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Yeni görev' } });
    fireEvent.click(screen.getByText('Ekle'));
    expect(screen.getByText('Yeni görev')).toBeInTheDocument();
  });

  it('can add todo with Enter key', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Enter görev' } });
    fireEvent.keyDown(todoInput, { key: 'Enter' });
    expect(screen.getByText('Enter görev')).toBeInTheDocument();
  });

  it('can toggle todo completion in form', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Görev 1' } });
    fireEvent.click(screen.getByText('Ekle'));
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('can remove a todo item', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Silinecek' } });
    fireEvent.click(screen.getByText('Ekle'));
    const removeButtons = screen.getAllByLabelText('Görevi Sil');
    fireEvent.click(removeButtons[0]);
    expect(screen.queryByText('Silinecek')).not.toBeInTheDocument();
  });

  it('can mark note as important', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    const checkbox = screen.getByLabelText('Önemli olarak işaretle');
    fireEvent.click(checkbox);
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), {
      target: { value: 'Önemli Not' },
    });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), {
      target: { value: 'İçerik' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(defaultProps.onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Önemli Not',
        important: true,
      })
    );
  });

  it('can select different category', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    fireEvent.click(screen.getByText('Kişisel'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), {
      target: { value: 'Kişisel Not' },
    });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), {
      target: { value: 'İçerik' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(defaultProps.onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        category: 'personal',
      })
    );
  });
});

describe('NotEkleduzenle - Edit Mode', () => {
  const mockNote: Note = {
    id: 'note-1',
    title: 'Mevcut Not',
    content: 'Mevcut içerik',
    category: 'personal',
    todos: [{ id: 'todo-1', text: 'Mevcut görev', completed: true }],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    important: false,
  };

  const defaultProps = {
    note: mockNote,
    onSave: vi.fn(),
    onUpdate: vi.fn(),
    onCancel: vi.fn(),
  };

  it('renders edit form title', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    expect(screen.getByText('Notu Düzenle')).toBeInTheDocument();
  });

  it('pre-fills form with note data', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    const titleInput = screen.getByDisplayValue('Mevcut Not') as HTMLInputElement;
    expect(titleInput.value).toBe('Mevcut Not');
    expect(screen.getByDisplayValue('Mevcut içerik')).toBeInTheDocument();
  });

  it('calls onUpdate when form submitted in edit mode', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    fireEvent.change(screen.getByDisplayValue('Mevcut Not'), {
      target: { value: 'Güncellenmiş Not' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(defaultProps.onUpdate).toHaveBeenCalledWith(
      'note-1',
      expect.objectContaining({
        title: 'Güncellenmiş Not',
        content: 'Mevcut içerik',
        category: 'personal',
      })
    );
  });

  it('pre-fills todos in edit mode', () => {
    render(<NotEkleduzenle {...defaultProps} />);
    expect(screen.getByText('Mevcut görev')).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
