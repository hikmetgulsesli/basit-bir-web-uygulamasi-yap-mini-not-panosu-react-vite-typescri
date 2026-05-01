import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NotEkleduzenle } from './NotEkleduzenle';
import type { Note } from '../types/domain';

function createProps() {
  return {
    onSave: vi.fn(),
    onUpdate: vi.fn(),
    onCancel: vi.fn(),
  };
}

describe('NotEkleduzenle - Add Mode', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders add form title', () => {
    render(<NotEkleduzenle {...createProps()} />);
    expect(screen.getByText('Yeni Not Ekle')).toBeInTheDocument();
  });

  it('renders form inputs', () => {
    render(<NotEkleduzenle {...createProps()} />);
    expect(screen.getByPlaceholderText('Not başlığını buraya girin...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...')).toBeInTheDocument();
  });

  it('renders category options', () => {
    render(<NotEkleduzenle {...createProps()} />);
    expect(screen.getByText('İş')).toBeInTheDocument();
    expect(screen.getByText('Kişisel')).toBeInTheDocument();
    expect(screen.getByText('Fikirler')).toBeInTheDocument();
  });

  it('calls onCancel when cancel clicked', () => {
    const props = createProps();
    render(<NotEkleduzenle {...props} />);
    fireEvent.click(screen.getByText('İptal'));
    expect(props.onCancel).toHaveBeenCalled();
  });

  it('calls onSave with note data when form submitted', () => {
    const props = createProps();
    render(<NotEkleduzenle {...props} />);
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), {
      target: { value: 'Yeni Not' },
    });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), {
      target: { value: 'Not içeriği' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(props.onSave).toHaveBeenCalledWith(
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
    const props = createProps();
    render(<NotEkleduzenle {...props} />);
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), {
      target: { value: 'İçerik' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(props.onSave).not.toHaveBeenCalled();
    expect(props.onUpdate).not.toHaveBeenCalled();
  });

  it('does not save when content is empty', () => {
    const props = createProps();
    render(<NotEkleduzenle {...props} />);
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), {
      target: { value: 'Başlık' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(props.onSave).not.toHaveBeenCalled();
    expect(props.onUpdate).not.toHaveBeenCalled();
  });

  it('can add a todo item', () => {
    render(<NotEkleduzenle {...createProps()} />);
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Yeni görev' } });
    fireEvent.click(screen.getByText('Ekle'));
    expect(screen.getByText('Yeni görev')).toBeInTheDocument();
  });

  it('can add todo with Enter key', () => {
    render(<NotEkleduzenle {...createProps()} />);
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Enter görev' } });
    fireEvent.keyDown(todoInput, { key: 'Enter' });
    expect(screen.getByText('Enter görev')).toBeInTheDocument();
  });

  it('can toggle todo completion in form', () => {
    render(<NotEkleduzenle {...createProps()} />);
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Görev 1' } });
    fireEvent.click(screen.getByText('Ekle'));
    const todoCheckbox = screen.getByRole('checkbox', { name: '' });
    fireEvent.click(todoCheckbox);
    expect(todoCheckbox).toBeChecked();
  });

  it('can remove a todo item', () => {
    render(<NotEkleduzenle {...createProps()} />);
    const todoInput = screen.getByPlaceholderText('Yeni görev ekle...');
    fireEvent.change(todoInput, { target: { value: 'Silinecek' } });
    fireEvent.click(screen.getByText('Ekle'));
    const removeButtons = screen.getAllByLabelText('Görevi Sil');
    fireEvent.click(removeButtons[0]);
    expect(screen.queryByText('Silinecek')).not.toBeInTheDocument();
  });

  it('can mark note as important', () => {
    const props = createProps();
    render(<NotEkleduzenle {...props} />);
    const importantCheckbox = screen.getByRole('checkbox', { name: 'Önemli olarak işaretle' });
    fireEvent.click(importantCheckbox);
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), {
      target: { value: 'Önemli Not' },
    });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), {
      target: { value: 'İçerik' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(props.onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Önemli Not',
        important: true,
      })
    );
  });

  it('can select different category', () => {
    const props = createProps();
    render(<NotEkleduzenle {...props} />);
    fireEvent.click(screen.getByText('Kişisel'));
    fireEvent.change(screen.getByPlaceholderText('Not başlığını buraya girin...'), {
      target: { value: 'Kişisel Not' },
    });
    fireEvent.change(screen.getByPlaceholderText('Notunuzu yazmaya başlayın...'), {
      target: { value: 'İçerik' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(props.onSave).toHaveBeenCalledWith(
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

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders edit form title', () => {
    render(<NotEkleduzenle note={mockNote} {...createProps()} />);
    expect(screen.getByText('Notu Düzenle')).toBeInTheDocument();
  });

  it('pre-fills form with note data', () => {
    render(<NotEkleduzenle note={mockNote} {...createProps()} />);
    const titleInput = screen.getByDisplayValue('Mevcut Not') as HTMLInputElement;
    expect(titleInput.value).toBe('Mevcut Not');
    expect(screen.getByDisplayValue('Mevcut içerik')).toBeInTheDocument();
  });

  it('calls onUpdate when form submitted in edit mode', () => {
    const props = createProps();
    render(<NotEkleduzenle note={mockNote} {...props} />);
    fireEvent.change(screen.getByDisplayValue('Mevcut Not'), {
      target: { value: 'Güncellenmiş Not' },
    });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(props.onUpdate).toHaveBeenCalledWith(
      'note-1',
      expect.objectContaining({
        title: 'Güncellenmiş Not',
        content: 'Mevcut içerik',
        category: 'personal',
      })
    );
  });

  it('pre-fills todos in edit mode', () => {
    render(<NotEkleduzenle note={mockNote} {...createProps()} />);
    expect(screen.getByText('Mevcut görev')).toBeInTheDocument();
    const todoCheckbox = screen.getByRole('checkbox', { name: '' });
    expect(todoCheckbox).toBeChecked();
  });
});
