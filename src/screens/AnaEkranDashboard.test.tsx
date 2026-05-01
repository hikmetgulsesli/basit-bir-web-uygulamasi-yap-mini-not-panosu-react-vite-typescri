import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AnaEkranDashboard } from './AnaEkranDashboard';
import type { Note } from '../types/domain';

const mockNotes: Note[] = [
  {
    id: 'note-1',
    title: 'Proje Planı',
    content: 'Proje detayları ve zaman çizelgesi',
    category: 'work',
    todos: [
      { id: 'todo-1', text: 'Taslak oluştur', completed: true },
      { id: 'todo-2', text: 'Onay al', completed: false },
    ],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    important: true,
  },
  {
    id: 'note-2',
    title: 'Alışveriş Listesi',
    content: 'Kahve, süt, ekmek',
    category: 'personal',
    todos: [],
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
    important: false,
  },
  {
    id: 'note-3',
    title: 'Kitap Fikirleri',
    content: 'Roman konsepti',
    category: 'ideas',
    todos: [
      { id: 'todo-3', text: 'Karakter taslakları', completed: false },
      { id: 'todo-4', text: 'Bölüm outline', completed: false },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    important: false,
  },
];

function setup(props = {}) {
  const defaultProps = {
    notes: mockNotes,
    searchQuery: '',
    filterTab: 'all' as const,
    onSearchChange: vi.fn(),
    onFilterChange: vi.fn(),
    onAddNote: vi.fn(),
    onEditNote: vi.fn(),
    onDeleteNote: vi.fn(),
    onToggleTodo: vi.fn(),
    onViewDetail: vi.fn(),
    onOpenSettings: vi.fn(),
    onOpenStats: vi.fn(),
    onOpenProfile: vi.fn(),
  };
  return render(<AnaEkranDashboard {...defaultProps} {...props} />);
}

describe('AnaEkranDashboard', () => {
  it('renders all notes by default', () => {
    setup();
    expect(screen.getByText('Proje Planı')).toBeInTheDocument();
    expect(screen.getByText('Alışveriş Listesi')).toBeInTheDocument();
    expect(screen.getByText('Kitap Fikirleri')).toBeInTheDocument();
  });

  it('renders search input', () => {
    setup();
    expect(screen.getByPlaceholderText('Notlarda ara...')).toBeInTheDocument();
  });

  it('calls onSearchChange when typing in search', () => {
    const onSearchChange = vi.fn();
    setup({ onSearchChange });
    const input = screen.getByPlaceholderText('Notlarda ara...');
    fireEvent.change(input, { target: { value: 'Proje' } });
    expect(onSearchChange).toHaveBeenCalledWith('Proje');
  });

  it('filters notes by search query', () => {
    setup({ searchQuery: 'Proje' });
    expect(screen.getByText('Proje Planı')).toBeInTheDocument();
    expect(screen.queryByText('Alışveriş Listesi')).not.toBeInTheDocument();
  });

  it('calls onFilterChange when filter tabs clicked', () => {
    const onFilterChange = vi.fn();
    setup({ onFilterChange });
    fireEvent.click(screen.getByText('Tamamlananlar'));
    expect(onFilterChange).toHaveBeenCalledWith('completed');
  });

  it('shows empty state when no notes match filter', () => {
    setup({ notes: [] });
    expect(screen.getByText('Arama sonucu bulunamadı.')).toBeInTheDocument();
  });

  it('calls onViewDetail when note title clicked', () => {
    const onViewDetail = vi.fn();
    setup({ onViewDetail });
    fireEvent.click(screen.getByText('Proje Planı'));
    expect(onViewDetail).toHaveBeenCalledWith('note-1');
  });

  it('calls onEditNote when edit button clicked', () => {
    const onEditNote = vi.fn();
    setup({ onEditNote });
    const editButtons = screen.getAllByText('Düzenle');
    fireEvent.click(editButtons[0]);
    expect(onEditNote).toHaveBeenCalledWith('note-1');
  });

  it('calls onDeleteNote when delete button clicked', () => {
    const onDeleteNote = vi.fn();
    setup({ onDeleteNote });
    const deleteButtons = screen.getAllByLabelText('Notu Sil');
    fireEvent.click(deleteButtons[0]);
    expect(onDeleteNote).toHaveBeenCalledWith('note-1');
  });

  it('calls onToggleTodo when checkbox clicked', () => {
    const onToggleTodo = vi.fn();
    setup({ onToggleTodo });
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(onToggleTodo).toHaveBeenCalledWith('note-1', 'todo-1');
  });

  it('displays todo list for notes with todos', () => {
    setup();
    expect(screen.getByText('Taslak oluştur')).toBeInTheDocument();
    expect(screen.getByText('Onay al')).toBeInTheDocument();
  });

  it('displays note content for notes without todos', () => {
    setup();
    expect(screen.getByText('Kahve, süt, ekmek')).toBeInTheDocument();
  });

  it('displays category badge', () => {
    setup();
    expect(screen.getByText('work')).toBeInTheDocument();
    expect(screen.getByText('personal')).toBeInTheDocument();
  });

  it('displays important badge for important notes', () => {
    setup();
    expect(screen.getByText('Önemli')).toBeInTheDocument();
  });

  it('calls onAddNote when add note button clicked', () => {
    const onAddNote = vi.fn();
    setup({ onAddNote });
    fireEvent.click(screen.getByText('Not Ekle'));
    expect(onAddNote).toHaveBeenCalled();
  });

  it('calls onOpenSettings when settings clicked', () => {
    const onOpenSettings = vi.fn();
    setup({ onOpenSettings });
    fireEvent.click(screen.getByText('Ayarlar'));
    expect(onOpenSettings).toHaveBeenCalled();
  });

  it('shows completed todos with strikethrough', () => {
    setup();
    const completedTodo = screen.getByText('Taslak oluştur');
    expect(completedTodo).toHaveClass('line-through');
  });
});
