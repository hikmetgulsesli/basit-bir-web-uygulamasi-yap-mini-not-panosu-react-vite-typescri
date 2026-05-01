import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BosDurum } from './BosDurum';

describe('BosDurum', () => {
  const defaultProps = {
    onAddNote: vi.fn(),
    onOpenSettings: vi.fn(),
    onOpenStats: vi.fn(),
    onOpenProfile: vi.fn(),
  };

  it('renders empty state title', () => {
    render(<BosDurum {...defaultProps} />);
    expect(screen.getByText('Henüz notunuz yok')).toBeInTheDocument();
  });

  it('renders empty state description', () => {
    render(<BosDurum {...defaultProps} />);
    expect(screen.getByText(/Önemli bilgileri, fikirleri veya görevleri kaydetmek için/)).toBeInTheDocument();
  });

  it('renders add note button', () => {
    render(<BosDurum {...defaultProps} />);
    expect(screen.getByText('İlk Notunu Ekle')).toBeInTheDocument();
  });

  it('calls onAddNote when add note button clicked', () => {
    render(<BosDurum {...defaultProps} />);
    fireEvent.click(screen.getByText('İlk Notunu Ekle'));
    expect(defaultProps.onAddNote).toHaveBeenCalled();
  });

  it('renders navigation links', () => {
    render(<BosDurum {...defaultProps} />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('İstatistikler')).toBeInTheDocument();
    expect(screen.getByText('Ayarlar')).toBeInTheDocument();
  });

  it('calls onOpenStats when stats link clicked', () => {
    render(<BosDurum {...defaultProps} />);
    fireEvent.click(screen.getByText('İstatistikler'));
    expect(defaultProps.onOpenStats).toHaveBeenCalled();
  });

  it('calls onOpenSettings when settings link clicked', () => {
    render(<BosDurum {...defaultProps} />);
    fireEvent.click(screen.getByText('Ayarlar'));
    expect(defaultProps.onOpenSettings).toHaveBeenCalled();
  });

  it('calls onOpenProfile when profile button clicked', () => {
    render(<BosDurum {...defaultProps} />);
    const profileButton = screen.getByLabelText('Profil');
    fireEvent.click(profileButton);
    expect(defaultProps.onOpenProfile).toHaveBeenCalled();
  });

  it('calls onAddNote from top bar add button', () => {
    render(<BosDurum {...defaultProps} />);
    const addButtons = screen.getAllByText(/Not Ekle|Yeni Koleksiyon/);
    fireEvent.click(addButtons[0]);
    expect(defaultProps.onAddNote).toHaveBeenCalled();
  });

  it('renders app title', () => {
    render(<BosDurum {...defaultProps} />);
    expect(screen.getByText('Mini Not Panosu')).toBeInTheDocument();
  });
});
