import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { Ayarlar } from './Ayarlar';
import type { AppPreferences } from '../types/domain';

const defaultPrefs: AppPreferences = {
  theme: 'dark',
  compactView: false,
};

function setup(props = {}) {
  const defaultProps = {
    preferences: defaultPrefs,
    onPreferencesChange: vi.fn(),
    onClearData: vi.fn(),
    onBack: vi.fn(),
  };
  return render(<Ayarlar {...defaultProps} {...props} />);
}

describe('Ayarlar', () => {
  it('renders settings title and description', () => {
    setup();
    expect(screen.getByRole('heading', { level: 1, name: 'Ayarlar' })).toBeInTheDocument();
    expect(screen.getByText(/Uygulama tercihlerinizi ve hesap verilerinizi yönetin/)).toBeInTheDocument();
  });

  it('renders appearance settings section', () => {
    setup();
    expect(screen.getByText('Görünüm Ayarları', { selector: 'h2' })).toBeInTheDocument();
    expect(screen.getByText('Tema Tercihi')).toBeInTheDocument();
  });

  it('renders notification preferences section', () => {
    setup();
    expect(screen.getByText('Bildirim Tercihleri', { selector: 'h2' })).toBeInTheDocument();
    expect(screen.getByText('Not Hatırlatıcıları')).toBeInTheDocument();
    expect(screen.getByText('Günlük Özet')).toBeInTheDocument();
    expect(screen.getByText('Sistem Güncellemeleri')).toBeInTheDocument();
  });

  it('renders data management section', () => {
    setup();
    expect(screen.getByText('Veri Yönetimi', { selector: 'h2' })).toBeInTheDocument();
    expect(screen.getByText('Yerel Verileri Temizle')).toBeInTheDocument();
  });

  it('calls onPreferencesChange when theme radio changed', () => {
    const onPreferencesChange = vi.fn();
    setup({ onPreferencesChange });
    const lightRadio = screen.getByDisplayValue('light');
    fireEvent.click(lightRadio);
    expect(onPreferencesChange).toHaveBeenCalledWith({ theme: 'light' });
  });

  it('calls onPreferencesChange when compact view toggled', () => {
    const onPreferencesChange = vi.fn();
    setup({ onPreferencesChange });
    const toggle = screen.getByLabelText('Kompakt Liste Görünümü');
    fireEvent.click(toggle);
    expect(onPreferencesChange).toHaveBeenCalledWith({ compactView: true });
  });

  it('shows clear data confirmation dialog when Verileri Temizle clicked', () => {
    setup();
    fireEvent.click(screen.getByText('Verileri Temizle'));
    expect(screen.getByText('Tüm Verileri Sil')).toBeInTheDocument();
    expect(screen.getByText(/kalıcı olarak silinecek/)).toBeInTheDocument();
  });

  it('calls onClearData when Sil confirmed in dialog', () => {
    const onClearData = vi.fn();
    setup({ onClearData });
    fireEvent.click(screen.getByText('Verileri Temizle'));
    fireEvent.click(screen.getByText('Sil'));
    expect(onClearData).toHaveBeenCalled();
  });

  it('closes confirmation dialog when İptal clicked', () => {
    setup();
    fireEvent.click(screen.getByText('Verileri Temizle'));
    const dialog = screen.getByRole('dialog');
    fireEvent.click(within(dialog).getByRole('button', { name: 'İptal' }));
    expect(screen.queryByText('Tüm Verileri Sil')).not.toBeInTheDocument();
  });

  it('calls onBack when Dashboarda Dön clicked', () => {
    const onBack = vi.fn();
    setup({ onBack });
    fireEvent.click(screen.getByText("Dashboard'a Dön"));
    expect(onBack).toHaveBeenCalled();
  });

  it('calls onBack when İptal button clicked', () => {
    const onBack = vi.fn();
    setup({ onBack });
    fireEvent.click(screen.getByRole('button', { name: 'İptal' }));
    expect(onBack).toHaveBeenCalled();
  });

  it('calls onBack when Değişiklikleri Kaydet clicked', () => {
    const onBack = vi.fn();
    setup({ onBack });
    fireEvent.click(screen.getByText('Değişiklikleri Kaydet'));
    expect(onBack).toHaveBeenCalled();
  });

  it('has dark theme radio checked by default', () => {
    setup();
    const darkRadio = screen.getByDisplayValue('dark') as HTMLInputElement;
    expect(darkRadio.checked).toBe(true);
  });

  it('has compact view unchecked by default', () => {
    setup();
    const toggle = screen.getByLabelText('Kompakt Liste Görünümü') as HTMLInputElement;
    expect(toggle.checked).toBe(false);
  });
});
