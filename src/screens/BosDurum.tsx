// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumProps {
  onAddNote: () => void;
  onOpenSettings: () => void;
  onOpenStats: () => void;
  onOpenProfile: () => void;
}

export function BosDurum(props: BosDurumProps) {
  const { onAddNote, onOpenSettings, onOpenStats, onOpenProfile } = props;
  return (
    <>
      <nav className="fixed top-0 w-full flex items-center justify-between px-6 h-16 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="flex items-center gap-4">
      <span className="text-lg font-bold tracking-tighter text-slate-50">Mini Not Panosu</span>
      </div>
      <ul className="hidden md:flex items-center h-full gap-8 font-inter text-sm font-medium tracking-tight">
      <li className="h-full flex items-center text-blue-500 border-b-2 border-blue-600 pb-1 pt-1 cursor-pointer hover:bg-slate-900/50 active:scale-95 duration-200" onClick={(e) => e.preventDefault()}>
                      Dashboard
                  </li>
      <li className="h-full flex items-center text-slate-400 hover:text-slate-200 transition-colors pb-1 pt-1 cursor-pointer hover:bg-slate-900/50 active:scale-95 duration-200 border-b-2 border-transparent" onClick={onOpenStats}>
                      İstatistikler
                  </li>
      <li className="h-full flex items-center text-slate-400 hover:text-slate-200 transition-colors pb-1 pt-1 cursor-pointer hover:bg-slate-900/50 active:scale-95 duration-200 border-b-2 border-transparent" onClick={onOpenSettings}>
                      Ayarlar
                  </li>
      </ul>
      <div className="flex items-center gap-6">
      <button className="hidden md:flex items-center justify-center h-[44px] px-lg bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg hover:brightness-110 active:scale-98 transition-all" onClick={onAddNote}>
                      Not Ekle
                  </button>
      <div className="flex items-center gap-3">
      <button aria-label="Bildirimler" className="w-[44px] h-[44px] flex items-center justify-center text-slate-400 opacity-50 cursor-not-allowed rounded-full" disabled title="Bildirimler (yakında)">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="Profil" className="w-[44px] h-[44px] flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors hover:bg-slate-900/50 rounded-full active:scale-95 duration-200" onClick={onOpenProfile}>
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </div>
      </nav>
      <div className="flex flex-1 pt-16 w-full h-screen overflow-hidden">
      <aside className="hidden lg:flex flex-col h-full sticky left-0 top-0 h-screen w-64 border-r border-slate-800 bg-slate-900 shadow-xl font-inter text-sm antialiased z-40">
      <div className="p-6 mb-2">
      <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface-variant">person</span>
      </div>
      <div>
      <div className="text-on-surface font-label-md text-label-md">Profesyonel Panel</div>
      <p className="text-on-surface-variant font-body-sm text-body-sm">Not Yönetimi</p>
      </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 h-[44px] bg-surface-container-high hover:bg-surface-container-highest text-on-surface border border-outline-variant rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150 ease-in-out" onClick={onAddNote}>
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Yeni Koleksiyon
                      </button>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-3">
      <a className="bg-blue-600/10 text-blue-500 border-r-4 border-blue-600 font-semibold px-4 py-3 flex items-center gap-3 rounded-l-lg transition-transform duration-150 ease-in-out cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
                          Notlarım
                      </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all rounded-lg hover:bg-slate-800 active:scale-95 duration-150 ease-in-out border-r-4 border-transparent cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenStats(); }}>
      <span className="material-symbols-outlined text-[20px]">archive</span>
                          Arşiv
                      </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all rounded-lg hover:bg-slate-800 active:scale-95 duration-150 ease-in-out border-r-4 border-transparent cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenStats(); }}>
      <span className="material-symbols-outlined text-[20px]">checklist</span>
                          Görevler
                      </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all rounded-lg hover:bg-slate-800 active:scale-95 duration-150 ease-in-out border-r-4 border-transparent cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenSettings(); }}>
      <span className="material-symbols-outlined text-[20px]">delete</span>
                          Çöp Kutusu
                      </a>
      </nav>
      <div className="p-3 border-t border-slate-800 mt-auto">
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all rounded-lg hover:bg-slate-800 active:scale-95 duration-150 ease-in-out cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenSettings(); }}>
      <span className="material-symbols-outlined text-[20px]">help</span>
                          Destek
                      </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all rounded-lg hover:bg-slate-800 active:scale-95 duration-150 ease-in-out cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenProfile(); }}>
      <span className="material-symbols-outlined text-[20px]">logout</span>
                          Çıkış
                      </a>
      </div>
      </aside>
      <main className="flex-1 flex flex-col relative h-full bg-surface overflow-y-auto">
      <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-2xl mx-auto w-full">
      <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-2xl"></div>
      <div className="relative z-10 w-32 h-32 rounded-[2rem] bg-surface-container flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] border border-outline-variant/30 transform rotate-[-3deg]">
      <span className="material-symbols-outlined text-6xl text-outline opacity-80" style={{fontVariationSettings: "'wght' 200"}}>
                                  draft
                              </span>
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center border-2 border-surface shadow-lg">
      <span className="material-symbols-outlined text-primary text-xl">
                                      add_task
                                  </span>
      </div>
      </div>
      </div>
      <h1 className="font-h1 text-h1 text-on-surface mb-unit text-center">
                          Henüz notunuz yok
                      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-md mb-xl">
                          Önemli bilgileri, fikirleri veya görevleri kaydetmek için temiz bir sayfa sizi bekliyor. Hemen yeni bir not oluşturarak başlayın.
                      </p>
      <button className="h-[52px] px-8 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-full flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] group border border-primary-container ring-offset-2 ring-offset-background focus:ring-2 focus:ring-primary" onClick={onAddNote}>
      <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform duration-300">add</span>
                          İlk Notunu Ekle
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
