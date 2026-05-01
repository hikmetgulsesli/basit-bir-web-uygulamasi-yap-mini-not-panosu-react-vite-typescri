// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Ekran (Dashboard)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import type { Note, FilterTab } from "../types/domain";

interface AnaEkranDashboardProps {
  notes: Note[];
  searchQuery: string;
  filterTab: FilterTab;
  onSearchChange: (query: string) => void;
  onFilterChange: (tab: FilterTab) => void;
  onAddNote: () => void;
  onEditNote: (id: string) => void;
  onDeleteNote: (id: string) => void;
  onToggleTodo: (noteId: string, todoId: string) => void;
  onViewDetail: (id: string) => void;
  onOpenSettings: () => void;
  onOpenStats: () => void;
  onOpenProfile: () => void;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Bugün";
  if (diffDays === 1) return "Dün";
  if (diffDays < 7) return `${diffDays} Gün Önce`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} Hafta Önce`;
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
}

export function AnaEkranDashboard(props: AnaEkranDashboardProps) {
  const {
    notes,
    searchQuery,
    filterTab,
    onSearchChange,
    onFilterChange,
    onAddNote,
    onEditNote,
    onDeleteNote,
    onToggleTodo,
    onViewDetail,
    onOpenSettings,
    onOpenStats,
    onOpenProfile,
  } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredNotes = useMemo(() => {
    let result = notes;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q)
      );
    }
    if (filterTab === "completed") {
      result = result.filter((n) => n.todos.length > 0 && n.todos.every((t) => t.completed));
    } else if (filterTab === "pending") {
      result = result.filter((n) => n.todos.length === 0 || n.todos.some((t) => !t.completed));
    }
    return result;
  }, [notes, searchQuery, filterTab]);
  return (
    <>
      {/* SideNavBar */}
      <nav className={`hidden lg:flex flex-col h-full sticky left-0 top-0 h-screen w-64 border-r border-slate-800 bg-slate-900 shadow-xl font-inter text-sm antialiased z-40${mobileMenuOpen ? ' !flex absolute' : ''}`}>
      <div className="p-6 border-b border-slate-800 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden cursor-pointer" onClick={onOpenProfile}>
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A close-up, professional portrait of a business person in a modern, dark-themed office environment. The lighting is soft and cinematic, emphasizing a professional and focused mood. The color palette leans heavily into deep slates, subtle blues, and warm skin tones, perfectly matching a high-end corporate SaaS aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8XjcJixC6xhYVYAFwtPatYEty7LMh-A--K_BqXQNdtDuPiuLs3zl6C3OQ-IrRB-1kaIksrzynywYav8J12MnS7QbQCfCPL-O8VcMpxlmtHpRFKVNIk_Pbwm6Yxz9WdK-o30y1yuL9hr2Hv4y2zex6bVXkToDo680qW_TdbqciEhvkeymDgLNrDJgcFqrylJ4Fxb3sQ6EgTCqF1-OqMNWxFTFgR2SnEKYJ2VqpUxns_PYBdmlSXQWQmznxvArW_4kitNyPVGdAosM4" />
      </div>
      <div>
      <div className="text-slate-50 font-semibold">Profesyonel Panel</div>
      <p className="text-slate-400 text-xs">Not Yönetimi</p>
      </div>
      </div>
      <div className="p-4">
      <button className="w-full bg-primary-container text-white h-touch-target rounded-lg font-label-md flex items-center justify-center gap-2 hover:brightness-90 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" onClick={onAddNote}>
      <span className="material-symbols-outlined">add</span>
                      Yeni Koleksiyon
                  </button>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
      <ul className="space-y-1 px-2">
      <li>
      <a className="bg-primary-container/10 text-primary border-r-4 border-primary font-semibold px-4 py-3 flex items-center gap-3 rounded-l-md cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined">description</span>
                              Notlarım
                          </a>
      </li>
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenStats(); }}>
      <span className="material-symbols-outlined">archive</span>
                              Arşiv
                          </a>
      </li>
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenStats(); }}>
      <span className="material-symbols-outlined">checklist</span>
                              Görevler
                          </a>
      </li>
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenSettings(); }}>
      <span className="material-symbols-outlined">delete</span>
                              Çöp Kutusu
                          </a>
      </li>
      </ul>
      </div>
      <div className="p-2 border-t border-slate-800">
      <ul className="space-y-1">
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenSettings(); }}>
      <span className="material-symbols-outlined">help</span>
                              Destek
                          </a>
      </li>
      <li>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 rounded-md cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenProfile(); }}>
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
      <button className="lg:hidden text-slate-400 hover:text-slate-200" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menüyü Aç/Kapat">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-lg font-bold tracking-tighter text-slate-50 lg:hidden">
                          Mini Not Panosu
                      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 h-16 items-center">
      <a className="text-primary border-b-2 border-primary pb-1 h-full flex items-center px-1" href="#" onClick={(e) => { e.preventDefault(); }}>Dashboard</a>
      <a className="text-slate-400 hover:text-slate-200 transition-colors h-full flex items-center px-1 hover:bg-slate-900/50" href="#" onClick={(e) => { e.preventDefault(); onOpenStats(); }}>İstatistikler</a>
      <a className="text-slate-400 hover:text-slate-200 transition-colors h-full flex items-center px-1 hover:bg-slate-900/50" href="#" onClick={(e) => { e.preventDefault(); onOpenSettings(); }}>Ayarlar</a>
      </nav>
      </div>
      {/* Search & Actions */}
      <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
      <input className="h-10 bg-surface-container-high border border-outline-variant rounded-md pl-10 pr-4 text-sm text-on-surface placeholder:text-slate-500 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors w-64" placeholder="Notlarda ara..." type="text" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
      </div>
      <div className="flex items-center gap-2">
      <button className="text-slate-400 opacity-50 cursor-not-allowed p-2 rounded-full" aria-label="Bildirimler" disabled title="Bildirimler (yakında)">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 p-2 rounded-full transition-colors hidden md:block" aria-label="Profil" onClick={onOpenProfile}>
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      <button className="bg-primary-container text-white h-10 px-4 rounded-md font-label-md flex items-center gap-2 hover:brightness-90 transition-all active:scale-95 duration-200" onClick={onAddNote}>
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
      <button className={`px-4 py-2 rounded-md font-label-md shadow-sm border transition-colors ${filterTab === 'all' ? 'bg-surface-container-highest text-on-surface border-outline-variant' : 'text-on-surface-variant hover:bg-surface-container-highest/50 border-transparent'}`} onClick={() => onFilterChange('all')}>Tümü</button>
      <button className={`px-4 py-2 rounded-md font-label-md transition-colors ${filterTab === 'completed' ? 'bg-surface-container-highest text-on-surface border-outline-variant shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-highest/50 border-transparent'}`} onClick={() => onFilterChange('completed')}>Tamamlananlar</button>
      <button className={`px-4 py-2 rounded-md font-label-md transition-colors ${filterTab === 'pending' ? 'bg-surface-container-highest text-on-surface border-outline-variant shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-highest/50 border-transparent'}`} onClick={() => onFilterChange('pending')}>Bekleyenler</button>
      </div>
      </div>
      {/* Masonry Grid for Note Cards */}
      <div className="masonry-grid">
      {/* Note Cards */}
      {filteredNotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="material-symbols-outlined text-6xl text-outline opacity-60 mb-4">
            {searchQuery.trim() ? 'search_off' : filterTab === 'completed' ? 'task_alt' : filterTab === 'pending' ? 'pending_actions' : 'search_off'}
          </span>
          <p className="font-body-md text-on-surface-variant mb-2">
            {searchQuery.trim()
              ? 'Aramanızla eşleşen not bulunamadı.'
              : filterTab === 'completed'
              ? 'Henüz tamamlanan not yok.'
              : filterTab === 'pending'
              ? 'Henüz bekleyen not yok.'
              : 'Not bulunamadı.'}
          </p>
          {searchQuery.trim() && (
            <button
              className="mt-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md flex items-center gap-2"
              onClick={() => onSearchChange('')}
            >
              <span className="material-symbols-outlined text-sm">clear</span>
              Aramayı Temizle
            </button>
          )}
          {filterTab !== 'all' && (
            <button
              className="mt-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md flex items-center gap-2"
              onClick={() => onFilterChange('all')}
            >
              <span className="material-symbols-outlined text-sm">filter_alt_off</span>
              Filtreyi Temizle
            </button>
          )}
        </div>
      ) : (
        filteredNotes.map((note) => (
          <div key={note.id} className="masonry-item bg-surface-container-high border border-outline-variant rounded-xl p-5 relative group hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5)]">
      <button className="absolute top-4 right-4 text-slate-400 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => onDeleteNote(note.id)} aria-label="Notu Sil">
      <span className="material-symbols-outlined text-lg">delete</span>
      </button>
      <div className="flex gap-2 mb-3">
      <span className="h-6 px-2 rounded bg-primary-container/15 text-primary font-label-sm flex items-center">{note.category || 'Genel'}</span>
      {note.important && <span className="h-6 px-2 rounded bg-error-container/20 text-error font-label-sm flex items-center">Önemli</span>}
      </div>
      <h3 className="font-h3 text-on-surface mb-3 pr-8 cursor-pointer" onClick={() => onViewDetail(note.id)}>{note.title}</h3>
      {note.todos.length > 0 ? (
      <div className="space-y-3 mb-6">
      {note.todos.map((todo) => (
      <label key={todo.id} className="flex items-start gap-3 cursor-pointer group/item">
      <input className="custom-checkbox mt-0.5" type="checkbox" checked={todo.completed} onChange={() => onToggleTodo(note.id, todo.id)} />
      <span className={`font-body-sm transition-colors ${todo.completed ? 'text-slate-500 line-through' : 'text-on-surface-variant group-hover/item:text-on-surface'}`}>{todo.text}</span>
      </label>
      ))}
      </div>
      ) : (
      <p className="font-body-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-4">{note.content}</p>
      )}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/50">
      <span className="font-label-sm text-slate-500 flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">calendar_today</span>
                                      {formatDate(note.updatedAt)}
                                  </span>
      <button className="text-primary font-label-md hover:underline" onClick={() => onEditNote(note.id)}>Düzenle</button>
      </div>
      </div>
        ))
      )}
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
