/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FlipbookViewer } from './components/FlipbookViewer';
import { StoryboardView } from './components/StoryboardView';
import { BookOpen, FileSpreadsheet, Compass, Sparkles, GraduationCap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'flipbook' | 'naskah'>('flipbook');

  return (
    <div className="min-h-screen bg-[#1c150f] text-[#f5ebd7] flex flex-col font-body selection:bg-[#c59b27] selection:text-[#1c150f]">
      {/* Top Bar following Top Bar Contract: Brand title - 4 clean nav links - 1 primary action */}
      <header className="flex items-center justify-between gap-8 px-4 md:px-8 py-3.5 border-b border-[#8c6d46]/30 bg-[#251b14]/90 backdrop-blur-md sticky top-0 z-40">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#b8860b] text-[#1c150f] flex items-center justify-center shadow-md border border-[#ffd700]">
            <Compass className="w-5 h-5" />
          </div>
          <span className="font-heading text-lg md:text-xl font-bold tracking-wide text-[#faf0dc]">
            Jurnal Penjelajah Pancasila
          </span>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-ui font-medium text-[#cbb396]">
          <button
            onClick={() => setActiveTab('flipbook')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'flipbook' 
                ? 'text-[#ffd700] font-bold border-b-2 border-[#ffd700] pb-0.5' 
                : 'hover:text-[#faf0dc]'
            }`}
          >
            Flipbook Interaktif
          </button>
          <button
            onClick={() => setActiveTab('naskah')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'naskah' 
                ? 'text-[#ffd700] font-bold border-b-2 border-[#ffd700] pb-0.5' 
                : 'hover:text-[#faf0dc]'
            }`}
          >
            Naskah & Panduan Canva
          </button>
          <span className="text-[#8c6d46] text-xs">·</span>
          <span className="text-[#a88a6d] whitespace-nowrap shrink-0">
            Pendidikan Pancasila Fase E (Kelas 10)
          </span>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveTab(activeTab === 'flipbook' ? 'naskah' : 'flipbook')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#8c2d19] hover:bg-[#a53620] text-white font-ui font-semibold text-xs tracking-wide transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
          >
            {activeTab === 'flipbook' ? (
              <>
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Lihat Naskah Lengkap</span>
              </>
            ) : (
              <>
                <BookOpen className="w-3.5 h-3.5" />
                <span>Kembali ke Flipbook</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grow">
        {activeTab === 'flipbook' ? (
          <FlipbookViewer onOpenStoryboard={() => setActiveTab('naskah')} />
        ) : (
          <StoryboardView />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#8c6d46]/20 bg-[#17100b] py-4 px-6 text-center text-xs font-ui text-[#9c7d62]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#b8860b]" />
            <span>Pendidikan Pancasila • Bab 1: Menjiwai Pancasila • Unit 1: Sejarah Perumusan BPUPKI & PPKI</span>
          </div>
          <div className="text-[11px] text-[#7a5e4b]">
            Pendekatan Culturally Responsive Teaching (CRT) • SMA/MA/SMK Kelas 10
          </div>
        </div>
      </footer>
    </div>
  );
}
