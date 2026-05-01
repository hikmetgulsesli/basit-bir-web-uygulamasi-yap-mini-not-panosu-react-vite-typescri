// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profil Paneli
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { UserProfile } from "../types/domain";

interface ProfilPaneliProps {
  onClose: () => void;
  onOpenSettings: () => void;
  onOpenAccount?: () => void;
  activeNotesCount: number;
  collectionsCount: number;
  userProfile?: UserProfile;
}

export function ProfilPaneli(props: ProfilPaneliProps) {
  const { onClose, onOpenSettings, onOpenAccount, activeNotesCount, collectionsCount, userProfile } = props;
  const displayName = userProfile?.displayName ?? 'Ahmet Yılmaz';
  const email = userProfile?.email ?? 'ahmet.yilmaz@sirket.com';
  return (
    <>
      {/* Mock Background Content to show overlay effect */}
      <div className="flex-1 flex flex-col relative opacity-50 pointer-events-none">
      {/* TopNavBar (Simulated) */}
      <nav className="fixed top-0 w-full flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-40">
      <div className="text-lg font-bold tracking-tighter text-slate-50">Mini Not Panosu</div>
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-slate-400">notifications</span>
      <span className="material-symbols-outlined text-blue-500">account_circle</span>
      </div>
      </nav>
      <div className="mt-24 p-8 flex gap-6 flex-wrap">
      <div className="w-64 h-48 bg-surface-container rounded-lg border border-outline-variant p-4"></div>
      <div className="w-64 h-64 bg-surface-container rounded-lg border border-outline-variant p-4"></div>
      <div className="w-64 h-32 bg-surface-container rounded-lg border border-outline-variant p-4"></div>
      </div>
      </div>
      {/* Backdrop Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"></div>
      {/* Profile Drawer Panel */}
      <aside className="fixed right-0 top-0 h-screen w-80 bg-surface-container border-l border-outline-variant shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.5)] z-50 flex flex-col transform translate-x-0 transition-transform duration-300 ease-in-out">
      {/* Header */}
      <div className="flex items-center justify-between p-lg border-b border-outline-variant">
      <h2 className="font-h3 text-h3 text-on-surface">Profil</h2>
      <button aria-label="Kapat" className="w-touch-target h-touch-target flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container" onClick={onClose}>
      <span className="material-symbols-outlined text-on-surface-variant">close</span>
      </button>
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-xl">
      {/* User Identity */}
      <div className="flex flex-col items-center gap-md text-center mt-md">
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant bg-surface-container-highest relative">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A professional headshot of a person looking directly at the camera. The lighting is soft and flattering, typical of a high-quality studio portrait. The background is a subtle, out-of-focus gradient. The person has a friendly, approachable expression, fitting for a corporate SaaS application avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYjSylyv_dugd8EpW6SMW_jOZS6MrmN9hZas8SyvfajLBwdpgCzDNsl9SLrwnoAWmx7mKTl9gQJ06NC-z9T5_LjNM4viRMsMHtwVRRCxxZe5WihZII2u5w4nEUNy1syBjuD7xTlh1gxOBOi38NcD9dROnKz5XU8qIOkatsA1PRtnO9SdvvbZgobfD-Jnr8WUn_sRx7w49XphY1Dd_Tc5wb32s-m9mNHqZbm1saF3TLGjeYGfgNYkO-fnAgLS-eBDzH7Y80QZisS9gr" />
      <button className="absolute bottom-0 right-0 w-8 h-8 bg-surface-container border border-outline-variant rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors" title="Fotoğrafı Değiştir">
      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">edit</span>
      </button>
      </div>
      <div>
      <h3 className="font-h2 text-h2 text-on-surface mb-xs">{displayName}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{email}</p>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 border border-primary-container/20 rounded-full mt-2">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <span className="font-label-sm text-label-sm text-primary-fixed">Pro Üye</span>
      </div>
      </div>
      {/* Stats/Summary Bento Grid */}
      <div className="grid grid-cols-2 gap-md">
      <div className="bg-surface rounded-lg border border-outline-variant p-md flex flex-col items-center text-center">
      <span className="font-h2 text-h2 text-primary-fixed mb-xs">{activeNotesCount}</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Aktif Not</span>
      </div>
      <div className="bg-surface rounded-lg border border-outline-variant p-md flex flex-col items-center text-center">
      <span className="font-h2 text-h2 text-secondary mb-xs">{collectionsCount}</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Koleksiyon</span>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Navigation Links */}
      <nav className="flex flex-col gap-sm">
      <a className="flex items-center gap-md px-md py-3 rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors group cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenAccount?.(); }}>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed transition-colors">person</span>
      <span className="font-label-md text-label-md">Hesap Ayarları</span>
      </a>
      <a className="flex items-center gap-md px-md py-3 rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors group cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); onOpenSettings(); }}>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed transition-colors">palette</span>
      <span className="font-label-md text-label-md">Görünüm</span>
      <span className="ml-auto font-label-sm text-label-sm text-on-surface-variant bg-surface px-2 py-1 rounded border border-outline-variant">Koyu</span>
      </a>
      <a className="flex items-center gap-md px-md py-3 rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors group cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed transition-colors">security</span>
      <span className="font-label-md text-label-md">Güvenlik</span>
      </a>
      <a className="flex items-center gap-md px-md py-3 rounded-lg text-on-surface hover:bg-surface-container-highest transition-colors group cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed transition-colors">credit_card</span>
      <span className="font-label-md text-label-md">Abonelik</span>
      </a>
      </nav>
      </div>
      {/* Footer Actions */}
      <div className="p-lg border-t border-outline-variant bg-surface-container mt-auto">
      <button className="w-full flex items-center justify-center gap-md h-touch-target rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-highest hover:text-error hover:border-error/50 transition-all focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container" onClick={onClose}>
      <span className="material-symbols-outlined">logout</span>
      <span className="font-label-md text-label-md">Çıkış Yap</span>
      </button>
      </div>
      </aside>
    </>
  );
}
