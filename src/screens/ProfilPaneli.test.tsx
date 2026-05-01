import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProfilPaneli } from './ProfilPaneli';
import type { UserProfile } from '../types/domain';

const defaultProfile: UserProfile = {
  displayName: 'Ahmet Yılmaz',
  email: 'ahmet.yilmaz@sirket.com',
  avatarUrl: 'https://example.com/avatar.png',
};

function setup(props = {}) {
  const defaultProps = {
    onClose: vi.fn(),
    onOpenSettings: vi.fn(),
    onOpenAccount: vi.fn(),
    activeNotesCount: 5,
    collectionsCount: 3,
    userProfile: defaultProfile,
  };
  return render(<ProfilPaneli {...defaultProps} {...props} />);
}

describe('ProfilPaneli', () => {
  it('renders profile title', () => {
    setup();
    expect(screen.getByText('Profil')).toBeInTheDocument();
  });

  it('renders user name and email', () => {
    setup();
    expect(screen.getByText('Ahmet Yılmaz')).toBeInTheDocument();
    expect(screen.getByText('ahmet.yilmaz@sirket.com')).toBeInTheDocument();
  });

  it('renders pro badge', () => {
    setup();
    expect(screen.getByText('Pro Üye')).toBeInTheDocument();
  });

  it('displays active notes count', () => {
    setup({ activeNotesCount: 7 });
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('Aktif Not')).toBeInTheDocument();
  });

  it('displays collections count', () => {
    setup({ collectionsCount: 4 });
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('Koleksiyon')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', () => {
    const onClose = vi.fn();
    setup({ onClose });
    const closeButton = screen.getByLabelText('Kapat');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onOpenSettings when Görünüm link clicked', () => {
    const onOpenSettings = vi.fn();
    setup({ onOpenSettings });
    fireEvent.click(screen.getByText('Görünüm'));
    expect(onOpenSettings).toHaveBeenCalled();
  });

  it('calls onOpenAccount when Hesap Ayarları link clicked', () => {
    const onOpenAccount = vi.fn();
    setup({ onOpenAccount });
    fireEvent.click(screen.getByText('Hesap Ayarları'));
    expect(onOpenAccount).toHaveBeenCalled();
  });

  it('renders dynamic user name and email from userProfile', () => {
    setup({ userProfile: { displayName: 'Mehmet Kaya', email: 'mehmet@example.com', avatarUrl: 'https://example.com/new-avatar.png' } });
    expect(screen.getByText('Mehmet Kaya')).toBeInTheDocument();
    expect(screen.getByText('mehmet@example.com')).toBeInTheDocument();
  });

  it('calls onClose when Çıkış Yap button clicked', () => {
    const onClose = vi.fn();
    setup({ onClose });
    fireEvent.click(screen.getByText('Çıkış Yap'));
    expect(onClose).toHaveBeenCalled();
  });

  it('renders user profile image with alt text', () => {
    setup();
    const img = screen.getByAltText('Kullanıcı Profili');
    expect(img).toBeInTheDocument();
  });

  it('renders profile stats grid', () => {
    setup();
    expect(screen.getByText('Aktif Not')).toBeInTheDocument();
    expect(screen.getByText('Koleksiyon')).toBeInTheDocument();
  });
});
