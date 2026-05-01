// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataDurumuProps {
  onRetry: () => void;
  onBack: () => void;
  errorMessage?: string;
}

export function HataDurumu(props: HataDurumuProps) {
  const { onRetry, onBack, errorMessage } = props;
  const displayMessage = errorMessage ?? 'ERR_UNKNOWN: Beklenmeyen bir sorun oluştu';
  return (
    <>
      {/* Error State Canvas */}
      <main className="w-full max-w-[600px] flex flex-col items-center justify-center text-center space-y-xl">
      {/* Error Icon/Visual */}
      <div className="relative flex items-center justify-center w-24 h-24 mb-md">
      <div className="absolute inset-0 bg-error-container rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute inset-2 bg-error-container rounded-full opacity-40"></div>
      <span className="material-symbols-outlined text-[64px] text-error relative z-10" style={{fontVariationSettings: "'FILL' 1"}}>
                      error
                  </span>
      </div>
      {/* Typography Cluster */}
      <div className="space-y-sm max-w-[480px]">
      <h1 className="font-h1 text-h1 text-on-surface">
                      Bir Sorun Oluştu
                  </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                      Veriler yüklenirken sunucu ile iletişim kurulamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.
                  </p>
      </div>
      {/* Technical Detail (Optional context for pro users) */}
      <div className="bg-surface-container rounded-lg p-md w-full border border-outline-variant text-left">
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs uppercase tracking-wider">Hata Detayı</p>
      <code className="font-mono text-[13px] text-error block truncate">
                      {displayMessage}
                  </code>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto mt-xl">
      <button className="h-touch-target px-lg bg-primary-container text-on-primary-container font-label-md text-label-md rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-sm active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" onClick={onRetry}>
      <span className="material-symbols-outlined text-[20px]">refresh</span>
                      Tekrar Dene
                  </button>
      <button className="h-touch-target px-lg border border-outline-variant text-on-surface font-label-md text-label-md rounded-DEFAULT hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-sm active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" onClick={onBack}>
      <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                      Geri Dön
                  </button>
      </div>
      </main>
    </>
  );
}
