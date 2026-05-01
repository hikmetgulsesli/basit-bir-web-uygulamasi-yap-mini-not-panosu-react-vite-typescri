import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NotDetayi } from './NotDetayi';
import type { Note } from '../types/domain';

const mockNote: Note = {
  id: 'note-1',
  title: 'Proje Planı',
  content: 'Proje detayları ve zaman çizelgesi',
  category: 'work',
  todos: [
    { id: 'todo-1', text: 'Taslak oluştur', completed: true },
    { id: 'todo-2', text: 'Onay al', completed: false },
  ],
  createdAt: '2024-01-15T10:00:00.000Z',
  updatedAt: '2024-01-16T14:00:00.000Z',
  important: true,
};

function setup(props = {}) {
  const defaultProps = {
    note: mockNote,
    onBack: vi.fn(),
    onEdit: vi.fn(),
    onDelete: vi.fn(),
    onToggleTodo: vi.fn(),
    onAddNote: vi.fn(),
  };
  return render(<NotDetayi {...defaultProps} {...props} />);
}

describe('NotDetayi', () => {
  it('renders note title', () => {
    setup();
    expect(screen.getByText('Proje Planı')).toBeInTheDocument();
  });

  it('renders note content', () => {
    setup();
    expect(screen.getByText('Proje detayları ve zaman çizelgesi')).toBeInTheDocument();
  });

  it('renders category badge', () => {
    setup();
    expect(screen.getByText('work')).toBeInTheDocument();
  });

  it('renders important badge for important notes', () => {
    setup();
    expect(screen.getByText('Önemli')).toBeInTheDocument();
  });

  it('renders creation and update dates', () => {
    setup();
    expect(screen.getByText(/15 Ocak 2024/)).toBeInTheDocument();
    expect(screen.getByText(/16 Ocak 2024/)).toBeInTheDocument();
  });

  it('renders todos with correct completion state', () => {
    setup();
    expect(screen.getByText('Taslak oluştur')).toBeInTheDocument();
    expect(screen.getByText('Onay al')).toBeInTheDocument();
  });

  it('calls onBack when back button clicked', () => {
    const onBack = vi.fn();
    setup({ onBack });
    fireEvent.click(screen.getByText('Tüm Notlara Dön'));
    expect(onBack).toHaveBeenCalled();
  });

  it('calls onEdit when edit button clicked', () => {
    const onEdit = vi.fn();
    setup({ onEdit });
    fireEvent.click(screen.getByText('Düzenle'));
    expect(onEdit).toHaveBeenCalledWith('note-1');
  });

  it('shows delete confirmation when delete clicked', () => {
    setup();
    fireEvent.click(screen.getByText('Sil'));
    expect(screen.getByText('Notu Sil')).toBeInTheDocument();
    expect(screen.getByText('Bu notu kalıcı olarak silmek istediğinize emin misiniz?')).toBeInTheDocument();
  });

  it('calls onDelete when confirmed in delete modal', () => {
    const onDelete = vi.fn();
    setup({ onDelete });
    fireEvent.click(screen.getByText('Sil'));
    fireEvent.click(screen.getAllByText('Sil')[1]);
    expect(onDelete).toHaveBeenCalledWith('note-1');
  });

  it('closes delete confirmation when cancel clicked', () => {
    setup();
    fireEvent.click(screen.getByText('Sil'));
    fireEvent.click(screen.getAllByText('İptal')[0]);
    expect(screen.queryByText('Bu notu kalıcı olarak silmek istediğinize emin misiniz?')).not.toBeInTheDocument();
  });

  it('calls onToggleTodo when todo icon clicked', () => {
    const onToggleTodo = vi.fn();
    setup({ onToggleTodo });
    const todoIcons = screen.getAllByText('check_circle');
    fireEvent.click(todoIcons[0]);
    expect(onToggleTodo).toHaveBeenCalledWith('note-1', 'todo-1');
  });

  it('calls onAddNote when new collection button clicked', () => {
    const onAddNote = vi.fn();
    setup({ onAddNote });
    fireEvent.click(screen.getByText('Yeni Koleksiyon'));
    expect(onAddNote).toHaveBeenCalled();
  });

  it('renders not found state when note is null', () => {
    setup({ note: null });
    expect(screen.getByText('Not Bulunamadı')).toBeInTheDocument();
    expect(screen.getByText('Geri Dön')).toBeInTheDocument();
  });

  it('calls onBack when not found back button clicked', () => {
    const onBack = vi.fn();
    setup({ note: null, onBack });
    fireEvent.click(screen.getByText('Geri Dön'));
    expect(onBack).toHaveBeenCalled();
  });

  it('does not render important badge for non-important notes', () => {
    const nonImportantNote = { ...mockNote, important: false };
    setup({ note: nonImportantNote });
    expect(screen.queryByText('Önemli')).not.toBeInTheDocument();
  });
});
