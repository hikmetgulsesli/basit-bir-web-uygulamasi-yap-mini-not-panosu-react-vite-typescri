// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: İstatistikler
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useMemo } from "react";
import type { Note } from "../types/domain";

interface IstatistiklerProps {
  notes: Note[];
  onBack: () => void;
  onAddNote: () => void;
}

export function Istatistikler(props: IstatistiklerProps) {
  const { notes, onBack, onAddNote } = props;

  const stats = useMemo(() => {
    const total = notes.length;
    const completed = notes.filter((n) => n.todos.length > 0 && n.todos.every((t) => t.completed)).length;
    const pending = notes.filter((n) => n.todos.length === 0 || n.todos.some((t) => !t.completed)).length;
    const thisWeek = notes.filter((n) => {
      const d = new Date(n.createdAt);
      const now = new Date();
      const diff = now.getTime() - d.getTime();
      return diff < 7 * 24 * 60 * 60 * 1000;
    }).length;
    const efficiency = total > 0 ? Math.round((completed / total) * 100) : 0;
    const categories: Record<string, number> = {};
    notes.forEach((n) => {
      categories[n.category || 'Genel'] = (categories[n.category || 'Genel'] || 0) + 1;
    });
    const maxCat = total > 0 ? Math.max(...Object.values(categories)) : 0;
    const categoryPercentages = Object.entries(categories).map(([name, count]) => ({
      name,
      count,
      percent: Math.round((count / total) * 100),
    }));
    return { total, completed, pending, thisWeek, efficiency, categoryPercentages, maxCat };
  }, [notes]);
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-slate-950/80 backdrop-blur-md docked full-width top-0 z-50 border-b border-slate-800 flat no shadows fixed top-0 w-full flex items-center justify-between px-6 h-16 font-inter text-sm font-medium tracking-tight">
      <div className="flex items-center gap-xl">
      <span className="text-lg font-bold tracking-tighter text-slate-50">Mini Not Panosu</span>
      <div className="hidden md:flex items-center gap-lg">
      <a className="text-slate-400 hover:text-slate-200 transition-colors hover:bg-slate-900/50 px-sm py-xs rounded active:scale-95 duration-200 cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>Dashboard</a>
      <a className="text-blue-500 border-b-2 border-blue-600 pb-1 active:scale-95 duration-200" href="#" onClick={(e) => e.preventDefault()}>İstatistikler</a>
      <a className="text-slate-400 hover:text-slate-200 transition-colors hover:bg-slate-900/50 px-sm py-xs rounded active:scale-95 duration-200 cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>Ayarlar</a>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative hidden sm:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
      <input className="bg-[#1E293B] border-[#334155] text-on-surface placeholder-[#94A3B8] h-touch-target pl-10 pr-4 rounded-DEFAULT focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors w-64 outline-none font-body-sm text-body-sm" placeholder="Ara..." type="text" />
      </div>
      <button className="bg-[#2563EB] text-[#FFFFFF] h-touch-target px-md rounded-DEFAULT font-label-md text-label-md hover:bg-blue-700 active:scale-98 transition-all flex items-center gap-sm" onClick={onAddNote}>
      <span className="material-symbols-outlined" data-icon="add">add</span>
                      Not Ekle
                  </button>
      <div className="flex items-center gap-sm text-blue-600 dark:text-blue-500">
      <button className="h-touch-target w-touch-target rounded-full flex items-center justify-center hover:bg-slate-900/50 active:scale-95 duration-200 transition-colors" aria-label="Bildirimler" disabled title="Bildirimler (yakında)">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="h-touch-target w-touch-target rounded-full flex items-center justify-center hover:bg-slate-900/50 active:scale-95 duration-200 transition-colors" aria-label="Profil" disabled title="Profil (yakında)">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      </nav>
      <div className="flex flex-1 pt-[64px]">
      {/* SideNavBar */}
      <aside className="bg-slate-900 h-screen w-64 border-r border-slate-800 shadow-xl hidden lg:flex flex-col sticky left-0 top-[64px] font-inter text-sm antialiased z-40">
      <div className="p-lg border-b border-slate-800">
      <div className="flex items-center gap-md mb-lg">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
      <span className="material-symbols-outlined text-outline text-2xl">person</span>
      </div>
      <div>
      <div className="text-xl font-black text-slate-50 leading-tight">Profesyonel Panel</div>
      <p className="text-slate-400 font-label-sm text-label-sm">Not Yönetimi</p>
      </div>
      </div>
      <button className="w-full bg-[#1E293B] border border-[#334155] text-[#F8FAFC] h-touch-target rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-highest active:scale-98 transition-all flex items-center justify-center gap-sm" onClick={onBack}>
      <span className="material-symbols-outlined text-sm">arrow_back</span>
                          Dashboard'a Dön
                      </button>
      </div>
      <nav className="flex-1 py-md flex flex-col gap-xs">
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out group cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
      <span className="material-symbols-outlined text-blue-600 group-hover:text-primary" data-icon="description">description</span>
      <span>Notlarım</span>
      </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out group cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-blue-600 group-hover:text-primary" data-icon="archive">archive</span>
      <span>Arşiv</span>
      </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out group cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-blue-600 group-hover:text-primary" data-icon="checklist">checklist</span>
      <span>Görevler</span>
      </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out group cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-blue-600 group-hover:text-primary" data-icon="delete">delete</span>
      <span>Çöp Kutusu</span>
      </a>
      </nav>
      <div className="p-md border-t border-slate-800 flex flex-col gap-xs">
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out group cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-blue-600 group-hover:text-primary" data-icon="help">help</span>
      <span>Destek</span>
      </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out group cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-error group-hover:text-error-container" data-icon="logout">logout</span>
      <span>Çıkış</span>
      </a>
      </div>
      </aside>
      {/* Main Content (İstatistik Ekranı) */}
      <main className="flex-1 p-margin overflow-y-auto w-full max-w-[1200px] mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-xs">İstatistikler</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Çalışma verimliliğiniz ve not alışkanlıklarınızın özeti.</p>
      </div>
      <div className="flex items-center gap-sm bg-surface-container rounded-DEFAULT p-xs border border-outline-variant">
      <button className="px-md py-sm rounded-DEFAULT bg-primary-container text-on-primary-container font-label-md text-label-md" disabled>Bu Hafta</button>
      <button className="px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" disabled>Bu Ay</button>
      <button className="px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" disabled>Tümü</button>
      </div>
      </div>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
      {/* Metric 1 */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-[20px] flex flex-col justify-between hover:bg-surface-container-high transition-colors relative group">
      <div className="flex justify-between items-start mb-lg">
      <div className="p-sm bg-primary-container/20 rounded-DEFAULT text-primary">
      <span className="material-symbols-outlined" data-weight="fill">description</span>
      </div>
      <span className="font-label-sm text-label-sm text-tertiary bg-tertiary-container/20 px-sm py-xs rounded-DEFAULT">+{stats.thisWeek}</span>
      </div>
      <div>
      <p className="font-label-md text-label-md text-on-surface-variant mb-xs">Toplam Not</p>
      <h2 className="font-h1 text-h1 text-on-surface">{stats.total}</h2>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-[20px] flex flex-col justify-between hover:bg-surface-container-high transition-colors relative">
      <div className="flex justify-between items-start mb-lg">
      <div className="p-sm bg-secondary-container/50 rounded-DEFAULT text-secondary">
      <span className="material-symbols-outlined" data-weight="fill">task_alt</span>
      </div>
      <span className="font-label-sm text-label-sm text-primary bg-primary-container/20 px-sm py-xs rounded-DEFAULT">+{stats.completed}</span>
      </div>
      <div>
      <p className="font-label-md text-label-md text-on-surface-variant mb-xs">Tamamlanan Notlar</p>
      <h2 className="font-h1 text-h1 text-on-surface">{stats.completed}</h2>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-[20px] flex flex-col justify-between hover:bg-surface-container-high transition-colors relative">
      <div className="flex justify-between items-start mb-lg">
      <div className="p-sm bg-tertiary-container/20 rounded-DEFAULT text-tertiary">
      <span className="material-symbols-outlined" data-weight="fill">trending_up</span>
      </div>
      </div>
      <div>
      <p className="font-label-md text-label-md text-on-surface-variant mb-xs">Bekleyen Notlar</p>
      <h2 className="font-h1 text-h1 text-on-surface">{stats.pending}</h2>
      </div>
      </div>
      {/* Metric 4 */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-[20px] flex flex-col justify-between hover:bg-surface-container-high transition-colors relative">
      <div className="flex justify-between items-start mb-lg">
      <div className="p-sm bg-surface-container-highest rounded-DEFAULT text-on-surface">
      <span className="material-symbols-outlined" data-weight="fill">bolt</span>
      </div>
      <span className="font-label-sm text-label-sm text-error bg-error-container/20 px-sm py-xs rounded-DEFAULT">{stats.efficiency}%</span>
      </div>
      <div>
      <p className="font-label-md text-label-md text-on-surface-variant mb-xs">Verimlilik Skoru</p>
      <h2 className="font-h1 text-h1 text-on-surface">{stats.efficiency}/100</h2>
      </div>
      </div>
      </div>
      {/* Complex Layout Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Chart Area (Category Distribution) */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-[20px] lg:col-span-2 flex flex-col">
      <div className="flex justify-between items-center mb-xl">
      <h3 className="font-h3 text-h3 text-on-surface">Kategori Dağılımı</h3>
      <button className="text-primary hover:text-primary-fixed transition-colors" disabled aria-label="Daha fazla seçenek" title="Daha fazla seçenek (yakında)">
      <span className="material-symbols-outlined">more_horiz</span>
      </button>
      </div>
      {/* Bar Chart */}
      <div className="flex-1 flex flex-col justify-end gap-md min-h-[200px] pb-md border-b border-outline-variant/30">
      {stats.categoryPercentages.length === 0 ? (
        <p className="text-on-surface-variant text-center">Henüz kategori verisi yok.</p>
      ) : (
        stats.categoryPercentages.map((cat) => (
      <div key={cat.name} className="flex items-center gap-md">
      <span className="w-24 font-label-sm text-label-sm text-on-surface-variant truncate">{cat.name}</span>
      <div className="flex-1 h-6 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary-container rounded-full" style={{width: `${stats.maxCat > 0 ? (cat.count / stats.maxCat) * 100 : 0}%`}}></div>
      </div>
      <span className="w-12 text-right font-label-md text-label-md text-on-surface">{cat.percent}%</span>
      </div>
        ))
      )}
      </div>
      </div>
      {/* Recent Activity List */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-[20px] flex flex-col">
      <h3 className="font-h3 text-h3 text-on-surface mb-lg">Son Aktiviteler</h3>
      <div className="flex flex-col gap-lg flex-1">
      {notes.length === 0 ? (
        <p className="text-on-surface-variant text-center">Henüz aktivite yok.</p>
      ) : (
        notes.slice(0, 5).map((note) => (
      <div key={note.id} className="flex gap-md items-start">
      <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 mt-xs text-primary">
      <span className="material-symbols-outlined text-sm">edit_document</span>
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface mb-xs">"{note.title}" notu güncellendi.</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">{new Date(note.updatedAt).toLocaleDateString('tr-TR')}</span>
      </div>
      </div>
        ))
      )}
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
