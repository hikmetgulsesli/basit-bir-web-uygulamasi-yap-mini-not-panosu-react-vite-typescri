import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Istatistikler } from './Istatistikler';
import type { Note } from '../types/domain';

const mockNotes: Note[] = [
  {
    id: 'note-1',
    title: 'Proje Planı',
    content: 'Proje detayları',
    category: 'work',
    todos: [
      { id: 'todo-1', text: 'Taslak oluştur', completed: true },
      { id: 'todo-2', text: 'Onay al', completed: false },
    ],
    createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    important: true,
  },
  {
    id: 'note-2',
    title: 'Alışveriş Listesi',
    content: 'Kahve, süt',
    category: 'personal',
    todos: [],
    createdAt: new Date(Date.now() - 10 * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 86400000).toISOString(),
    important: false,
  },
  {
    id: 'note-3',
    title: 'Kitap Fikirleri',
    content: 'Roman konsepti',
    category: 'ideas',
    todos: [
      { id: 'todo-3', text: 'Karakter taslakları', completed: true },
      { id: 'todo-4', text: 'Bölüm outline', completed: true },
    ],
    createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    important: false,
  },
];

function setup(props = {}) {
  const defaultProps = {
    notes: mockNotes,
    onBack: vi.fn(),
    onAddNote: vi.fn(),
  };
  return render(<Istatistikler {...defaultProps} {...props} />);
}

describe('Istatistikler', () => {
  it('renders page title and description', () => {
    setup();
    expect(screen.getByRole('heading', { level: 1, name: 'İstatistikler' })).toBeInTheDocument();
    expect(screen.getByText(/Çalışma verimliliğiniz ve not alışkanlıklarınızın özeti/)).toBeInTheDocument();
  });

  it('displays total note count', () => {
    setup();
    expect(screen.getByText('Toplam Not')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('displays completed notes count', () => {
    setup();
    expect(screen.getByText('Tamamlanan Notlar')).toBeInTheDocument();
    // note-3 has all todos completed = 1 completed note
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('displays pending notes count', () => {
    setup();
    expect(screen.getByText('Bekleyen Notlar')).toBeInTheDocument();
    // note-1 has incomplete todos, note-2 has no todos = 2 pending
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('displays efficiency score', () => {
    setup();
    expect(screen.getByText('Verimlilik Skoru')).toBeInTheDocument();
    expect(screen.getByText('33/100')).toBeInTheDocument();
  });

  it('shows empty state when no notes', () => {
    setup({ notes: [] });
    expect(screen.getByText('Henüz kategori verisi yok.')).toBeInTheDocument();
    expect(screen.getByText('Henüz aktivite yok.')).toBeInTheDocument();
  });

  it('renders category distribution bars', () => {
    setup();
    expect(screen.getByText('Kategori Dağılımı')).toBeInTheDocument();
    expect(screen.getByText('work')).toBeInTheDocument();
    expect(screen.getByText('personal')).toBeInTheDocument();
    expect(screen.getByText('ideas')).toBeInTheDocument();
  });

  it('renders recent activity list', () => {
    setup();
    expect(screen.getByText('Son Aktiviteler')).toBeInTheDocument();
    // Should show up to 5 most recent notes
    expect(screen.getByText(/Proje Planı/)).toBeInTheDocument();
  });

  it('calls onBack when Dashboard nav link clicked', () => {
    const onBack = vi.fn();
    setup({ onBack });
    fireEvent.click(screen.getByText('Dashboard'));
    expect(onBack).toHaveBeenCalled();
  });

  it('calls onAddNote when Not Ekle button clicked', () => {
    const onAddNote = vi.fn();
    setup({ onAddNote });
    fireEvent.click(screen.getByText('Not Ekle'));
    expect(onAddNote).toHaveBeenCalled();
  });

  it('calls onBack when Dashboarda Dön button clicked', () => {
    const onBack = vi.fn();
    setup({ onBack });
    fireEvent.click(screen.getByText("Dashboard'a Dön"));
    expect(onBack).toHaveBeenCalled();
  });
});
