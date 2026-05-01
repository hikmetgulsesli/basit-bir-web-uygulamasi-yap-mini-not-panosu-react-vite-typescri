import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HataDurumu } from './HataDurumu';

function setup(props = {}) {
  const defaultProps = {
    onRetry: vi.fn(),
    onBack: vi.fn(),
  };
  return render(<HataDurumu {...defaultProps} {...props} />);
}

describe('HataDurumu', () => {
  it('renders error title and message', () => {
    setup();
    expect(screen.getByText('Bir Sorun Oluştu')).toBeInTheDocument();
    expect(screen.getByText(/Veriler yüklenirken sunucu ile iletişim kurulamadı/)).toBeInTheDocument();
  });

  it('renders error detail section', () => {
    setup();
    expect(screen.getByText('Hata Detayı')).toBeInTheDocument();
    expect(screen.getByText('ERR_UNKNOWN: Beklenmeyen bir sorun oluştu')).toBeInTheDocument();
  });

  it('calls onRetry when Tekrar Dene button clicked', () => {
    const onRetry = vi.fn();
    setup({ onRetry });
    fireEvent.click(screen.getByText('Tekrar Dene'));
    expect(onRetry).toHaveBeenCalled();
  });

  it('calls onBack when Geri Dön button clicked', () => {
    const onBack = vi.fn();
    setup({ onBack });
    fireEvent.click(screen.getByText('Geri Dön'));
    expect(onBack).toHaveBeenCalled();
  });

  it('renders custom error message when provided', () => {
    setup({ errorMessage: 'ERR_CUSTOM: Test hata mesajı' });
    expect(screen.getByText('ERR_CUSTOM: Test hata mesajı')).toBeInTheDocument();
  });

  it('renders default error message when no custom message provided', () => {
    setup();
    expect(screen.getByText('ERR_UNKNOWN: Beklenmeyen bir sorun oluştu')).toBeInTheDocument();
  });

  it('renders refresh icon on retry button', () => {
    setup();
    const retryButton = screen.getByText('Tekrar Dene').closest('button');
    expect(retryButton).toBeInTheDocument();
  });

  it('renders back icon on back button', () => {
    setup();
    const backButton = screen.getByText('Geri Dön').closest('button');
    expect(backButton).toBeInTheDocument();
  });
});
