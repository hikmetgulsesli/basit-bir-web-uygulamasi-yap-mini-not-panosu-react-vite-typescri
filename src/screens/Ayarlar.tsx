// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AyarlarProps {}

export function Ayarlar(props: AyarlarProps) {
  return (
    <>
      {/* SideNavBar (Hidden on Mobile) */}
      <nav className="hidden lg:flex flex-col h-full sticky left-0 top-0 h-screen w-64 border-r border-slate-800 shadow-xl bg-slate-900 text-blue-600 font-inter text-sm antialiased transition-transform duration-150 ease-in-out shrink-0">
      <div className="p-6 border-b border-slate-800">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-3xl">notes</span>
      <div>
      <div className="text-xl font-black text-slate-50 tracking-tight">Mini Not Panosu</div>
      <div className="text-slate-400 text-xs mt-1">Not Yönetimi</div>
      </div>
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white font-label-md text-label-md rounded-lg py-2.5 px-4 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm">add</span>
                      Yeni Koleksiyon
                  </button>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800" href="#">
      <span className="material-symbols-outlined">description</span>
                      Notlarım
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800" href="#">
      <span className="material-symbols-outlined">archive</span>
                      Arşiv
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800" href="#">
      <span className="material-symbols-outlined">checklist</span>
                      Görevler
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800" href="#">
      <span className="material-symbols-outlined">delete</span>
                      Çöp Kutusu
                  </a>
      </div>
      <div className="p-4 border-t border-slate-800">
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800" href="#">
      <span className="material-symbols-outlined">help</span>
                      Destek
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800" href="#">
      <span className="material-symbols-outlined">logout</span>
                      Çıkış
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-md text-blue-600 dark:text-blue-500 font-inter text-sm font-medium tracking-tight docked full-width top-0 z-50 border-b border-slate-800 active:scale-95 duration-200">
      <div className="flex items-center gap-6">
      {/* Mobile Menu Toggle */}
      <button className="lg:hidden text-slate-50 hover:bg-slate-900/50 p-2 rounded-lg transition-colors">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-lg font-bold tracking-tighter text-slate-50 lg:hidden">Mini Not Panosu</div>
      <nav className="hidden md:flex items-center gap-1 h-full">
      <a className="text-slate-400 hover:text-slate-200 transition-colors h-full flex items-center px-3 hover:bg-slate-900/50" href="#">Dashboard</a>
      <a className="text-slate-400 hover:text-slate-200 transition-colors h-full flex items-center px-3 hover:bg-slate-900/50" href="#">İstatistikler</a>
      <a className="text-blue-500 border-b-2 border-blue-600 pb-1 h-full flex items-center px-3 hover:bg-slate-900/50" href="#">Ayarlar</a>
      </nav>
      </div>
      <div className="flex items-center gap-4">
      <div className="relative hidden sm:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
      <input className="bg-slate-900 border border-slate-800 rounded-full pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-48 lg:w-64 text-slate-200 placeholder-slate-500 transition-all" placeholder="Notlarda ara..." type="text" />
      </div>
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 p-2 rounded-full transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 p-2 rounded-full transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      <button className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors items-center gap-2">
      <span className="material-symbols-outlined text-sm">add</span>
                          Not Ekle
                      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto pt-24 px-4 sm:px-6 lg:px-8 pb-12 w-full max-w-[1200px] mx-auto">
      <div className="mb-8">
      <h1 className="font-h1 text-h1 text-on-surface">Ayarlar</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">Uygulama tercihlerinizi ve hesap verilerinizi yönetin.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Settings Navigation / Sidebar (Internal) */}
      <div className="col-span-1 hidden lg:block">
      <nav className="space-y-1">
      <a className="flex items-center gap-3 px-4 py-3 bg-surface-container-high text-primary rounded-lg font-label-md text-label-md" href="#gorunum">
      <span className="material-symbols-outlined">palette</span>
                                  Görünüm Ayarları
                              </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 rounded-lg font-label-md text-label-md transition-colors" href="#bildirimler">
      <span className="material-symbols-outlined">notifications_active</span>
                                  Bildirim Tercihleri
                              </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 rounded-lg font-label-md text-label-md transition-colors" href="#veri">
      <span className="material-symbols-outlined">data_usage</span>
                                  Veri Yönetimi
                              </a>
      </nav>
      </div>
      {/* Settings Content Area */}
      <div className="col-span-1 lg:col-span-2 space-y-8">
      {/* Görünüm Ayarları Section */}
      <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 sm:p-8" id="gorunum">
      <div className="border-b border-[#334155] pb-4 mb-6">
      <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">palette</span>
                                      Görünüm Ayarları
                                  </h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Uygulamanın görsel temasını özelleştirin.</p>
      </div>
      <div className="space-y-6">
      <div>
      <h3 className="font-h3 text-h3 text-on-surface mb-4">Tema Tercihi</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Theme Option: Dark (Active) */}
      <label className="relative cursor-pointer group">
      <input checked={true} className="peer sr-only" name="theme" type="radio" value="dark" />
      <div className="rounded-lg border-2 border-primary bg-surface-container p-4 flex flex-col items-center gap-3 peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background">
      <div className="w-full h-24 bg-[#0F172A] rounded border border-[#334155] flex flex-col p-2 gap-2">
      <div className="w-full h-3 bg-[#1E293B] rounded"></div>
      <div className="flex gap-2">
      <div className="w-1/3 h-10 bg-[#1E293B] rounded"></div>
      <div className="w-2/3 h-10 bg-[#1E293B] rounded"></div>
      </div>
      </div>
      <span className="font-label-md text-label-md text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">dark_mode</span> Koyu
                                                  </span>
      </div>
      </label>
      {/* Theme Option: Light */}
      <label className="relative cursor-pointer group">
      <input className="peer sr-only" name="theme" type="radio" value="light" />
      <div className="rounded-lg border-2 border-[#334155] hover:border-outline-variant bg-surface-container p-4 flex flex-col items-center gap-3 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background">
      <div className="w-full h-24 bg-white rounded border border-gray-200 flex flex-col p-2 gap-2">
      <div className="w-full h-3 bg-gray-100 rounded"></div>
      <div className="flex gap-2">
      <div className="w-1/3 h-10 bg-gray-100 rounded"></div>
      <div className="w-2/3 h-10 bg-gray-100 rounded"></div>
      </div>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">light_mode</span> Açık
                                                  </span>
      </div>
      </label>
      {/* Theme Option: System */}
      <label className="relative cursor-pointer group">
      <input className="peer sr-only" name="theme" type="radio" value="system" />
      <div className="rounded-lg border-2 border-[#334155] hover:border-outline-variant bg-surface-container p-4 flex flex-col items-center gap-3 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background">
      <div className="w-full h-24 rounded border border-[#334155] flex overflow-hidden">
      <div className="w-1/2 h-full bg-white flex flex-col p-2 gap-2">
      <div className="w-full h-3 bg-gray-100 rounded"></div>
      <div className="w-full h-10 bg-gray-100 rounded"></div>
      </div>
      <div className="w-1/2 h-full bg-[#0F172A] flex flex-col p-2 gap-2 border-l border-[#334155]">
      <div className="w-full h-3 bg-[#1E293B] rounded"></div>
      <div className="w-full h-10 bg-[#1E293B] rounded"></div>
      </div>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">devices</span> Sistem
                                                  </span>
      </div>
      </label>
      </div>
      </div>
      <div className="flex items-center justify-between py-2 border-t border-[#334155] mt-6 pt-6">
      <div>
      <div className="font-label-md text-label-md text-on-surface">Kompakt Liste Görünümü</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Notları listelerken daha az boşluk kullan.</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 peer-focus:ring-offset-background rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Bildirim Tercihleri Section */}
      <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 sm:p-8" id="bildirimler">
      <div className="border-b border-[#334155] pb-4 mb-6">
      <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">notifications_active</span>
                                      Bildirim Tercihleri
                                  </h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Hangi durumlarda bildirim alacağınızı seçin.</p>
      </div>
      <div className="space-y-4">
      <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant transition-colors">
      <div className="flex items-center h-6">
      <input checked={true} className="w-4 h-4 text-primary-container bg-[#1E293B] border-[#334155] rounded focus:ring-primary focus:ring-offset-background focus:ring-offset-2" id="not-hatirlatici" type="checkbox" />
      </div>
      <div className="flex-1">
      <label className="font-label-md text-label-md text-on-surface cursor-pointer" htmlFor="not-hatirlatici">Not Hatırlatıcıları</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Yaklaşan görevler ve zamanlı notlar için anlık bildirimler.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant transition-colors">
      <div className="flex items-center h-6">
      <input className="w-4 h-4 text-primary-container bg-[#1E293B] border-[#334155] rounded focus:ring-primary focus:ring-offset-background focus:ring-offset-2" id="gunluk-ozet" type="checkbox" />
      </div>
      <div className="flex-1">
      <label className="font-label-md text-label-md text-on-surface cursor-pointer" htmlFor="gunluk-ozet">Günlük Özet</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Her sabah o günkü görevlerin kısa bir özetini alın.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant transition-colors">
      <div className="flex items-center h-6">
      <input checked={true} className="w-4 h-4 text-primary-container bg-[#1E293B] border-[#334155] rounded focus:ring-primary focus:ring-offset-background focus:ring-offset-2" id="sistem-guncelleme" type="checkbox" />
      </div>
      <div className="flex-1">
      <label className="font-label-md text-label-md text-on-surface cursor-pointer" htmlFor="sistem-guncelleme">Sistem Güncellemeleri</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Yeni özellikler ve önemli duyurular hakkında bilgi alın.</p>
      </div>
      </div>
      </div>
      </section>
      {/* Veri Yönetimi Section */}
      <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 sm:p-8" id="veri">
      <div className="border-b border-[#334155] pb-4 mb-6">
      <h2 className="font-h2 text-h2 text-error flex items-center gap-2">
      <span className="material-symbols-outlined text-error">data_usage</span>
                                      Veri Yönetimi
                                  </h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Tarayıcıda saklanan yerel verilerinizi yönetin.</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-error-container/20 border border-error-container/50">
      <div>
      <div className="font-label-md text-label-md text-error-container dark:text-error">Yerel Verileri Temizle</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Bu cihazdaki tüm notları, tercihleri ve önbelleği kalıcı olarak siler. Bu işlem geri alınamaz.</div>
      </div>
      <button className="shrink-0 h-[44px] px-6 inline-flex items-center justify-center gap-2 rounded-lg bg-error hover:bg-error/90 text-on-error font-label-md text-label-md transition-colors focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]" type="button">
      <span className="material-symbols-outlined text-[18px]">delete_forever</span>
                                      Verileri Temizle
                                  </button>
      </div>
      </section>
      {/* Action Bar */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#334155]">
      <button className="h-[44px] px-6 inline-flex items-center justify-center rounded-lg border border-[#334155] text-[#F8FAFC] hover:bg-surface-container-high font-label-md text-label-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]" type="button">
                                  İptal
                              </button>
      <button className="h-[44px] px-8 inline-flex items-center justify-center rounded-lg bg-[#2563EB] hover:bg-[#2563EB]/90 text-[#FFFFFF] font-label-md text-label-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-[0px_4px_10px_rgba(37,99,235,0.2)] active:scale-[0.98]" type="button">
                                  Değişiklikleri Kaydet
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
