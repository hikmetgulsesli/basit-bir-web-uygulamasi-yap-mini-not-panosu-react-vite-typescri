// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Not Detayı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { Note } from "../types/domain";

interface NotDetayiProps {
  note: Note | null;
  onBack: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleTodo: (noteId: string, todoId: string) => void;
  onAddNote?: () => void;
}

function formatDateFull(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export function NotDetayi(props: NotDetayiProps) {
  const { note, onBack, onEdit, onDelete, onToggleTodo, onAddNote } = props;
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);

  const handleShare = () => {
    if (note) {
      const text = `${note.title}\n\n${note.content}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2000);
    }
  };

  if (!note) {
    return (
      <main className="flex-1 w-full flex justify-center pt-[80px] md:pt-0 overflow-y-auto">
        <div className="w-full max-w-[1000px] px-lg md:px-xl py-xl md:py-2xl flex flex-col gap-xl items-center">
          <span className="material-symbols-outlined text-6xl text-outline opacity-60">note_off</span>
          <h1 className="font-h1 text-h1 text-on-surface">Not Bulunamadı</h1>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg hover:brightness-110 transition-all" onClick={onBack}>Geri Dön</button>
        </div>
      </main>
    );
  }
  return (
    <>
      {/* Mobile TopNavBar (from Shared Components JSON) */}
      <nav className="md:hidden bg-slate-950/80 backdrop-blur-md fixed top-0 w-full flex items-center justify-between px-6 h-16 border-b border-slate-800 z-50">
      <div className="flex items-center gap-md text-slate-50 text-lg font-bold tracking-tighter">
      <span className="material-symbols-outlined text-blue-600">note_stack</span>
                  Mini Not Panosu
              </div>
      <div className="flex items-center gap-unit font-inter text-sm font-medium tracking-tight">
      {/* Supressed main links to prioritize detail view on mobile, keeping actions */}
      <button className="w-touch-target h-touch-target flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors hover:bg-slate-900/50 rounded-full active:scale-95 duration-200">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors hover:bg-slate-900/50 rounded-full active:scale-95 duration-200">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Desktop SideNavBar (from Shared Components JSON) */}
      <aside className="hidden lg:flex flex-col h-screen w-64 bg-slate-900 border-r border-slate-800 shadow-xl sticky left-0 top-0 z-40">
      {/* Header */}
      <div className="p-6 border-b border-slate-800 flex flex-col gap-xs">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-blue-600 text-xl">account_circle</span>
      <h2 className="text-xl font-black text-slate-50 font-inter antialiased">Profesyonel Panel</h2>
      </div>
      <span className="font-inter text-sm antialiased text-blue-600 pl-8">Not Yönetimi</span>
      </div>
      {/* CTA */}
      <div className="p-md">
      <button className="w-full h-touch-target bg-blue-600 hover:bg-blue-700 text-slate-50 rounded-full font-inter text-sm antialiased font-medium flex items-center justify-center gap-xs transition-colors shadow-md" onClick={onAddNote}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                      Yeni Koleksiyon
                  </button>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-unit font-inter text-sm antialiased">
      {/* Active: Notlarım */}
      <a className="bg-blue-600/10 text-blue-500 border-r-4 border-blue-600 font-semibold px-4 py-3 flex items-center gap-3 transition-transform duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
                      Notlarım
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">archive</span>
                      Arşiv
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">checklist</span>
                      Görevler
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">delete</span>
                      Çöp Kutusu
                  </a>
      </nav>
      {/* Footer Links */}
      <div className="p-4 border-t border-slate-800 font-inter text-sm antialiased">
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out rounded-lg" href="#">
      <span className="material-symbols-outlined">help</span>
                      Destek
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 px-4 py-3 flex items-center gap-3 transition-all hover:bg-slate-800 transition-transform duration-150 ease-in-out rounded-lg" href="#">
      <span className="material-symbols-outlined">logout</span>
                      Çıkış
                  </a>
      </div>
      </aside>
      {/* Main Detail Canvas */}
      <main className="flex-1 w-full flex justify-center pt-[80px] md:pt-0 overflow-y-auto">
      <div className="w-full max-w-[1000px] px-lg md:px-xl py-xl md:py-2xl flex flex-col gap-xl">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
      {/* Back Button */}
      <button className="group flex items-center gap-sm text-on-surface-variant hover:text-on-surface transition-colors" onClick={onBack}>
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest group-hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined text-[20px]">arrow_back</span>
      </div>
      <span className="font-label-md text-label-md">Tüm Notlara Dön</span>
      </button>
      {/* Note Actions */}
      <div className="flex items-center gap-unit bg-surface-container-low border border-outline-variant rounded-full p-xs shadow-sm">
      <button className="h-10 px-md flex items-center justify-center gap-xs rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md opacity-50 cursor-not-allowed" title="Arşivle" disabled>
      <span className="material-symbols-outlined text-[18px]">archive</span>
      <span className="hidden md:inline">Arşivle</span>
      </button>
      <button className="h-10 px-md flex items-center justify-center gap-xs rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md" title="Paylaş" onClick={handleShare}>
      <span className="material-symbols-outlined text-[18px]">share</span>
      <span className="hidden md:inline">Paylaş</span>
      </button>
      <div className="w-[1px] h-6 bg-outline-variant mx-xs"></div>
      <button className="h-10 px-md flex items-center justify-center gap-xs rounded-full text-error hover:bg-error-container/20 transition-colors font-label-md text-label-md" title="Sil" onClick={() => setShowConfirmDelete(true)}>
      <span className="material-symbols-outlined text-[18px]">delete</span>
      <span className="hidden md:inline">Sil</span>
      </button>
      <button className="h-10 px-lg flex items-center justify-center gap-xs rounded-full bg-primary-container text-on-primary-container hover:brightness-110 transition-all font-label-md text-label-md ml-xs shadow-md" onClick={() => onEdit(note.id)}>
      <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>edit</span>
                              Düzenle
                          </button>
      </div>
      </div>
      {/* Header & Meta Data */}
      <header className="flex flex-col gap-md mt-sm">
      {/* Chips / Categories */}
      <div className="flex flex-wrap items-center gap-sm">
      <span className="inline-flex items-center h-6 px-unit rounded bg-primary-container/20 border border-primary-container/30 text-primary font-label-sm text-label-sm">
                              {note.category || 'Genel'}
                          </span>
      {note.important && <span className="inline-flex items-center h-6 px-unit rounded bg-error-container/20 border border-error-container/30 text-error font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[12px] mr-1">bolt</span>
                              Önemli
                          </span>}
      </div>
      <h1 className="font-h1 text-h1 text-on-surface tracking-tight">
                          {note.title}
                      </h1>
      <div className="flex items-center gap-lg font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/50 pb-lg">
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                              Oluşturulma: {formatDateFull(note.createdAt)}
                          </div>
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">update</span>
                              Son Güncelleme: {formatDateFull(note.updatedAt)}
                          </div>
      <div className="flex items-center gap-xs ml-auto hidden md:flex">
      <span className="material-symbols-outlined text-[16px]">visibility</span>
                              Sadece Siz
                          </div>
      </div>
      </header>
      {/* Main Content Area (Glassmorphism Panel feel) */}
      <article className="bg-surface-container rounded-xl border border-outline-variant/30 p-lg md:p-2xl shadow-lg relative overflow-hidden">
      {/* Subtle gradient accent at top of panel */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-tertiary to-background"></div>
      <div className="font-body-lg text-body-lg text-on-surface-variant space-y-lg leading-relaxed">
      <p className="whitespace-pre-wrap">{note.content}</p>
      {note.todos.length > 0 && (
        <div className="mt-xl">
          <p className="font-h3 text-h3 text-on-surface mb-md">Görevler</p>
          <ul className="list-none space-y-md mt-md pl-sm border-l-2 border-primary-container/50">
            {note.todos.map((todo) => (
              <li key={todo.id} className="flex gap-md">
                <span className="material-symbols-outlined text-primary mt-1 text-[20px] cursor-pointer" onClick={() => onToggleTodo(note.id, todo.id)}>
                  {todo.completed ? 'check_circle' : 'radio_button_unchecked'}
                </span>
                <div className={`font-body-sm ${todo.completed ? 'line-through text-slate-500' : 'text-on-surface-variant'}`}>
                  {todo.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
      </article>
      {/* Bento Box: Linked Assets / Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
      {/* Attachments */}
      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-md hover:border-outline-variant/50 transition-colors">
      <h3 className="font-label-md text-label-md text-on-surface flex items-center gap-xs mb-md">
      <span className="material-symbols-outlined text-[18px]">attachment</span>
                              Ekli Dosyalar
                          </h3>
      <div className="flex items-center justify-between p-sm rounded bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group">
      <div className="flex items-center gap-sm">
      <div className="w-8 h-8 rounded bg-error-container/20 text-error flex items-center justify-center">
      <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface">Q4_Butce_Taslagi.pdf</span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">download</span>
      </div>
      </div>
      {/* Linked Notes */}
      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-md hover:border-outline-variant/50 transition-colors">
      <h3 className="font-label-md text-label-md text-on-surface flex items-center gap-xs mb-md">
      <span className="material-symbols-outlined text-[18px]">link</span>
                              Bağlantılı Notlar
                          </h3>
      <div className="flex flex-col gap-xs">
      <a className="font-body-sm text-body-sm text-primary hover:underline flex items-center gap-xs" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
                                  Rakip Analizi Raporu (Eylül)
                              </a>
      <a className="font-body-sm text-body-sm text-primary hover:underline flex items-center gap-xs" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
                                  Tasarım Sistemi Güncellemeleri
                              </a>
      </div>
      </div>
      </div>
      {/* Delete Confirmation */}
      {shareFeedback && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-surface-container-high border border-outline-variant rounded-lg px-4 py-2 shadow-lg z-50 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">check</span>
          <span className="font-body-sm text-on-surface">Not panoya kopyalandı</span>
        </div>
      )}
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-surface-container border border-outline-variant rounded-xl p-6 max-w-md w-full mx-4 shadow-lg">
            <h2 className="font-h2 text-h2 text-on-surface mb-2">Notu Sil</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Bu notu kalıcı olarak silmek istediğinize emin misiniz?</p>
            <div className="flex gap-3 justify-end">
              <button className="h-[44px] px-6 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => setShowConfirmDelete(false)}>İptal</button>
              <button className="h-[44px] px-6 rounded-lg bg-error text-on-error hover:bg-error/90 transition-colors" onClick={() => { onDelete(note.id); setShowConfirmDelete(false); }}>Sil</button>
            </div>
          </div>
        </div>
      )}
      </div>
      </main>
    </>
  );
}
