// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Not Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface NotEkleduzenleProps {}

export function NotEkleduzenle(props: NotEkleduzenleProps) {
  return (
    <>
      {/* TopNavBar: Suppressed because this is a transactional/task-focused screen (Ekle/Düzenle) */}
      {/* SideNavBar: Suppressed because this is a transactional/task-focused screen (Ekle/Düzenle) */}
      <div className="flex-1 overflow-y-auto">
      <main className="max-w-[800px] mx-auto w-full px-md md:px-lg py-xl md:py-2xl">
      <header className="mb-xl flex items-center justify-between">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-sm">Yeni Not Ekle</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Düşüncelerinizi kaydedin ve düzenleyin.</p>
      </div>
      <button className="h-[44px] w-[44px] flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined">close</span>
      </button>
      </header>
      <form className="bg-surface-container-low rounded-xl border border-outline-variant p-lg md:p-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5)]">
      <div className="space-y-lg">
      {/* Başlık Alanı */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-xs flex justify-between" htmlFor="note-title">
                                  Başlık <span className="text-error font-label-sm text-label-sm">*Zorunlu alan</span>
      </label>
      <input className="w-full h-[44px] bg-[#1E293B] border border-[#334155] rounded-DEFAULT px-md font-body-md text-body-md text-on-surface placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-0 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#11131b] transition-all" id="note-title" name="note-title" placeholder="Not başlığını buraya girin..." required={true} type="text" />
      </div>
      {/* Kategori Alanı */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-sm">Kategori</label>
      <div className="flex flex-wrap gap-sm">
      <label className="cursor-pointer">
      <input checked={true} className="peer sr-only" name="category" type="radio" value="work" />
      <div className="h-lg px-md rounded-lg flex items-center justify-center font-label-sm text-label-sm border border-outline-variant text-on-surface-variant peer-checked:bg-primary-container/20 peer-checked:text-primary peer-checked:border-primary-container transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-background">
                                          İş
                                      </div>
      </label>
      <label className="cursor-pointer">
      <input className="peer sr-only" name="category" type="radio" value="personal" />
      <div className="h-lg px-md rounded-lg flex items-center justify-center font-label-sm text-label-sm border border-outline-variant text-on-surface-variant peer-checked:bg-secondary-container/30 peer-checked:text-secondary peer-checked:border-secondary-container transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-background">
                                          Kişisel
                                      </div>
      </label>
      <label className="cursor-pointer">
      <input className="peer sr-only" name="category" type="radio" value="ideas" />
      <div className="h-lg px-md rounded-lg flex items-center justify-center font-label-sm text-label-sm border border-outline-variant text-on-surface-variant peer-checked:bg-tertiary-container/30 peer-checked:text-tertiary peer-checked:border-tertiary-container transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-background">
                                          Fikirler
                                      </div>
      </label>
      <button className="h-lg px-sm rounded-lg flex items-center justify-center border border-dashed border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" type="button">
      <span className="material-symbols-outlined text-[16px]">add</span>
      </button>
      </div>
      </div>
      {/* İçerik Alanı */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-xs flex justify-between" htmlFor="note-content">
                                  İçerik <span className="text-error font-label-sm text-label-sm">*Zorunlu alan</span>
      </label>
      <div className="border border-[#334155] rounded-DEFAULT bg-[#1E293B] overflow-hidden focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB] focus-within:ring-offset-2 focus-within:ring-offset-[#11131b] transition-all">
      {/* Formatting Toolbar (Simplified) */}
      <div className="bg-surface-container-high border-b border-[#334155] flex p-xs gap-xs">
      <button className="h-unit w-unit flex items-center justify-center rounded hover:bg-surface-container-highest text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container" type="button">
      <span className="material-symbols-outlined text-[18px]">format_bold</span>
      </button>
      <button className="h-unit w-unit flex items-center justify-center rounded hover:bg-surface-container-highest text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container" type="button">
      <span className="material-symbols-outlined text-[18px]">format_italic</span>
      </button>
      <button className="h-unit w-unit flex items-center justify-center rounded hover:bg-surface-container-highest text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container" type="button">
      <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
      </button>
      <div className="w-[1px] bg-[#334155] my-xs mx-xs"></div>
      <button className="h-unit w-unit flex items-center justify-center rounded hover:bg-surface-container-highest text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container" type="button">
      <span className="material-symbols-outlined text-[18px]">link</span>
      </button>
      </div>
      <textarea className="w-full bg-transparent border-none p-md font-body-md text-body-md text-on-surface placeholder:text-[#94A3B8] resize-y focus:ring-0 focus:outline-none min-h-[150px]" id="note-content" name="note-content" placeholder="Notunuzu yazmaya başlayın..." required={true} rows={8}></textarea>
      </div>
      </div>
      {/* Ekstra Seçenekler */}
      <div className="flex items-center gap-sm">
      <label className="flex items-center gap-sm cursor-pointer group">
      <div className="relative flex items-center justify-center">
      <input className="peer sr-only" type="checkbox" />
      <div className="w-[18px] h-[18px] rounded-lg border border-[#334155] bg-[#1E293B] peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#11131b]"></div>
      <span className="material-symbols-outlined absolute text-[14px] text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Önemli olarak işaretle</span>
      </label>
      </div>
      </div>
      {/* Aksiyonlar */}
      <div className="mt-xl pt-lg border-t border-outline-variant flex flex-col-reverse sm:flex-row justify-end gap-md">
      <button className="min-h-[44px] px-lg rounded-DEFAULT border border-[#334155] text-[#F8FAFC] font-label-md text-label-md hover:bg-surface-container-highest active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#11131b]" type="button">
                              İptal
                          </button>
      <button className="min-h-[44px] px-lg rounded-DEFAULT bg-[#2563EB] text-[#FFFFFF] font-label-md text-label-md hover:bg-opacity-90 active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#11131b] flex items-center justify-center gap-xs" type="submit">
      <span className="material-symbols-outlined text-[18px]">save</span>
                              Kaydet
                          </button>
      </div>
      </form>
      </main>
      </div>
    </>
  );
}
