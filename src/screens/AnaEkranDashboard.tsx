// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Ekran (Dashboard)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaEkranDashboardProps {}

export function AnaEkranDashboard(props: AnaEkranDashboardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden lg:flex flex-col h-full sticky left-0 top-0 h-screen w-64 border-r border-slate-800 bg-slate-900 shadow-xl font-inter text-sm antialiased z-40">
      <div className="p-6 border-b border-slate-800 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A close-up, professional portrait of a business person in a modern, dark-themed office environment. The lighting is soft and cinematic, emphasizing a professional and focused mood. The color palette leans heavily into deep slates, subtle blues, and warm skin tones, perfectly matching a high-end corporate SaaS aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8XjcJixC6xhYVYAFwtPatYEty7LMh-A--K_BqXQNdtDuPiuLs3zl6C3OQ-IrRB-1kaIksrzynywYav8J12MnS7QbQCfCPL-O8VcMpxlmtHpRFKVNIk_Pbwm6Yxz9WdK-o30y1yuL9hr2Hv4y2zex6bVXkToDo680qW_TdbqciEhvkeymDgLNrDJgcFqrylJ4Fxb3sQ6EgTCqF1-OqMNWxFTFgR2SnEKYJ2VqpUxns_PYBdmlSXQWQmznxvArW_4kitNyPVGdAosM4" />
      </div>
      <div>
      <h2 className="text-slate-50 font-semibold">Profesyonel Panel</h2>
      <p className="text-slate-400 text-xs">Not Yönetimi</p>
      </div>
      </div>
      <div className="p-4">
      <button className="w-full bg-primary-container text-white h-touch-target rounded-lg font-label-md flex items-center justify-center gap-2 hover:brightness-90 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
      <span className="material-symbols-outlined">add</span>
                      Yeni Koleksiyon
                  </button>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
      <ul className="space-y-1 px-2">
      <li>
      <a className="bg-blue-600/10 text-blue-500 border-r-4 border-blue-600 font-semibold px-4 py-3 flex items-center gap-3 rounded-l-md" href="#">
      <span className="material-symbols-outlined">description</span>
                              Notlarım
                          </a>
      </li>
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md" href="#">
      <span className="material-symbols-outlined">archive</span>
                              Arşiv
                          </a>
      </li>
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md" href="#">
      <span className="material-symbols-outlined">checklist</span>
                              Görevler
                          </a>
      </li>
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md" href="#">
      <span className="material-symbols-outlined">delete</span>
                              Çöp Kutusu
                          </a>
      </li>
      </ul>
      </div>
      <div className="p-2 border-t border-slate-800">
      <ul className="space-y-1">
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md" href="#">
      <span className="material-symbols-outlined">help</span>
                              Destek
                          </a>
      </li>
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md" href="#">
      <span className="material-symbols-outlined">logout</span>
                              Çıkış
                          </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-md font-inter text-sm font-medium tracking-tight border-b border-slate-800 flat no shadows z-50 lg:pl-72">
      <div className="flex items-center gap-6">
      {/* Mobile Menu Button */}
      <button className="lg:hidden text-slate-400 hover:text-slate-200">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-lg font-bold tracking-tighter text-slate-50 lg:hidden">
                          Mini Not Panosu
                      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 h-16 items-center">
      <a className="text-blue-500 border-b-2 border-blue-600 pb-1 h-full flex items-center px-1" href="#">Dashboard</a>
      <a className="text-slate-400 hover:text-slate-200 transition-colors h-full flex items-center px-1 hover:bg-slate-900/50" href="#">İstatistikler</a>
      <a className="text-slate-400 hover:text-slate-200 transition-colors h-full flex items-center px-1 hover:bg-slate-900/50" href="#">Ayarlar</a>
      </nav>
      </div>
      {/* Search & Actions */}
      <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
      <input className="h-10 bg-surface-container-high border border-outline-variant rounded-md pl-10 pr-4 text-sm text-on-surface placeholder:text-slate-500 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors w-64" placeholder="Notlarda ara..." type="text" />
      </div>
      <div className="flex items-center gap-2">
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 p-2 rounded-full transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 p-2 rounded-full transition-colors hidden md:block">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      <button className="bg-primary-container text-white h-10 px-4 rounded-md font-label-md flex items-center gap-2 hover:brightness-90 transition-all active:scale-95 duration-200">
      <span className="material-symbols-outlined text-sm">add</span>
                              Not Ekle
                          </button>
      </div>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto pt-24 px-4 md:px-8 pb-12">
      <div className="max-w-[1200px] mx-auto">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
      <div>
      <h1 className="font-h1 text-on-surface mb-2">Dashboard</h1>
      <p className="font-body-md text-on-surface-variant">Tüm notlarınızı ve görevlerinizi buradan yönetin.</p>
      </div>
      {/* Filters */}
      <div className="flex bg-surface-container-high p-1 rounded-lg border border-outline-variant inline-flex">
      <button className="px-4 py-2 rounded-md bg-surface-container-highest text-on-surface font-label-md shadow-sm border border-outline-variant">Tümü</button>
      <button className="px-4 py-2 rounded-md text-on-surface-variant font-label-md hover:bg-surface-container-highest/50 transition-colors">Tamamlananlar</button>
      <button className="px-4 py-2 rounded-md text-on-surface-variant font-label-md hover:bg-surface-container-highest/50 transition-colors">Bekleyenler</button>
      </div>
      </div>
      {/* Masonry Grid for Note Cards */}
      <div className="masonry-grid">
      {/* Note Card 1 (Task List) */}
      <div className="masonry-item bg-surface-container-high border border-outline-variant rounded-xl p-5 relative group hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5)]">
      <button className="absolute top-4 right-4 text-slate-400 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-lg">delete</span>
      </button>
      <div className="flex gap-2 mb-3">
      <span className="h-6 px-2 rounded bg-tertiary-container/15 text-tertiary font-label-sm flex items-center">Proje</span>
      <span className="h-6 px-2 rounded bg-primary-container/15 text-primary font-label-sm flex items-center">Acil</span>
      </div>
      <h3 className="font-h3 text-on-surface mb-3 pr-8">Q3 Sunum Hazırlıkları</h3>
      <div className="space-y-3 mb-6">
      <label className="flex items-start gap-3 cursor-pointer group/item">
      <input className="custom-checkbox mt-0.5" type="checkbox" />
      <span className="font-body-sm text-on-surface-variant group-hover/item:text-on-surface transition-colors">Finansal verileri topla</span>
      </label>
      <label className="flex items-start gap-3 cursor-pointer group/item">
      <input checked={true} className="custom-checkbox mt-0.5" type="checkbox" />
      <span className="font-body-sm text-slate-500 line-through">Slayt taslağını oluştur</span>
      </label>
      <label className="flex items-start gap-3 cursor-pointer group/item">
      <input className="custom-checkbox mt-0.5" type="checkbox" />
      <span className="font-body-sm text-on-surface-variant group-hover/item:text-on-surface transition-colors">Pazarlama ekibiyle toplantı ayarla</span>
      </label>
      </div>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/50">
      <span className="font-label-sm text-slate-500 flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">calendar_today</span>
                                      Bugün, 14:00
                                  </span>
      <button className="text-primary font-label-md hover:underline">Düzenle</button>
      </div>
      </div>
      {/* Note Card 2 (Text Note) */}
      <div className="masonry-item bg-surface-container-high border border-outline-variant rounded-xl p-5 relative group hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5)]">
      <button className="absolute top-4 right-4 text-slate-400 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-lg">delete</span>
      </button>
      <div className="flex gap-2 mb-3">
      <span className="h-6 px-2 rounded bg-slate-700/30 text-slate-300 font-label-sm flex items-center">Fikir</span>
      </div>
      <h3 className="font-h3 text-on-surface mb-2 pr-8">Yeni Arayüz Tasarım Fikirleri</h3>
      <p className="font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                                  Kullanıcı testleri sonucunda navigasyonun sol tarafa alınmasının daha verimli olacağı ortaya çıktı. Dark mode varsayılan olmalı ve renk paleti kurumsal ciddiyeti yansıtacak şekilde revize edilmeli. Tipografi hiyerarşisi gözden geçirilecek.
                              </p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/50">
      <span className="font-label-sm text-slate-500 flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">calendar_today</span>
                                      Dün
                                  </span>
      <button className="text-primary font-label-md hover:underline">Düzenle</button>
      </div>
      </div>
      {/* Note Card 3 (Image/Moodboard Note) */}
      <div className="masonry-item bg-surface-container-high border border-outline-variant rounded-xl overflow-hidden relative group hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5)]">
      <button className="absolute top-4 right-4 z-10 text-white hover:text-error bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
      <span className="material-symbols-outlined text-lg block">delete</span>
      </button>
      <img alt="Moodboard" className="w-full h-40 object-cover border-b border-outline-variant" data-alt="A clean, highly organized desk space featuring a sleek laptop, a minimal wireframe sketchbook, and a cup of black coffee. The lighting is bright but diffused, creating soft shadows. The overall mood is deeply focused and productive, aligned with a high-end corporate or modern tech startup aesthetic, utilizing neutral greys and crisp whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9dpbQnCxgOjcqkALglzIn6ucNQ36l1rILOWNQGOtmKvRqZbcOA8NdnnZ6luB6Tf7Q7frbEk42VvEYwPzmyE6xXrOw1r-axjx_J57fp3gESqitVjP19a6RuUeODbEl4UDhOSLA_Wo0686Ec8rQz71L3rHKdBH6wbGPVtongYph1hlkJxGNZA7gKDSXH3lhaypABqLtnPz6ffHluJ_imLpb19pY6P5WbcQn0P2TtDnDPNkY3CliDvfAmFosqzDxhIsoxxf2ZM-K1skn" />
      <div className="p-5">
      <div className="flex gap-2 mb-3">
      <span className="h-6 px-2 rounded bg-secondary-container/30 text-secondary font-label-sm flex items-center">Referans</span>
      </div>
      <h3 className="font-h3 text-on-surface mb-2">Ofis Düzeni İlhamı</h3>
      <p className="font-body-sm text-on-surface-variant mb-4">
                                      Yeni çalışma alanı için potansiyel düzenlemeler.
                                  </p>
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/50">
      <span className="font-label-sm text-slate-500 flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">calendar_today</span>
                                          2 Gün Önce
                                      </span>
      <button className="text-primary font-label-md hover:underline">Düzenle</button>
      </div>
      </div>
      </div>
      {/* Note Card 4 (Short Note) */}
      <div className="masonry-item bg-surface-container-high border border-outline-variant rounded-xl p-5 relative group hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5)]">
      <button className="absolute top-4 right-4 text-slate-400 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-lg">delete</span>
      </button>
      <h3 className="font-h3 text-on-surface mb-2 pr-8">Alışveriş Listesi</h3>
      <div className="space-y-2 mb-6">
      <label className="flex items-start gap-3 cursor-pointer group/item">
      <input className="custom-checkbox mt-0.5" type="checkbox" />
      <span className="font-body-sm text-on-surface-variant group-hover/item:text-on-surface transition-colors">Kahve Çekirdeği</span>
      </label>
      <label className="flex items-start gap-3 cursor-pointer group/item">
      <input className="custom-checkbox mt-0.5" type="checkbox" />
      <span className="font-body-sm text-on-surface-variant group-hover/item:text-on-surface transition-colors">A4 Kağıt</span>
      </label>
      <label className="flex items-start gap-3 cursor-pointer group/item">
      <input checked={true} className="custom-checkbox mt-0.5" type="checkbox" />
      <span className="font-body-sm text-slate-500 line-through">Beyaz Tahta Kalemi</span>
      </label>
      </div>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/50">
      <span className="font-label-sm text-slate-500 flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">calendar_today</span>
                                      1 Hafta Önce
                                  </span>
      <button className="text-primary font-label-md hover:underline">Düzenle</button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
