import React from 'react';
import { X, Award, Bookmark, Quote, Info } from 'lucide-react';
import { TokohBio } from '../data/flipbookData';

interface TokohModalProps {
  tokoh: TokohBio | null;
  onClose: () => void;
}

export const TokohModal: React.FC<TokohModalProps> = ({ tokoh, onClose }) => {
  if (!tokoh) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl parchment-texture rounded-xl border-4 border-[#8c6d46] shadow-2xl p-6 md:p-8 text-[#2c221a] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top vintage stamp header */}
        <div className="flex items-start justify-between border-b-2 border-[#8c6d46]/40 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#5c3d2e] text-[#fbf6ec] flex items-center justify-center font-heading text-xl shadow-md border border-[#d4af37]">
              {tokoh.nama.charAt(0)}
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8c6d46] font-ui font-semibold">
                Dossier Tokoh Pimpinan BPUPKI 1945
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-[#3a2016] leading-tight">
                {tokoh.nama}
              </h3>
              <p className="text-sm font-ui text-[#6b4e3d] font-medium">
                {tokoh.gelar}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#8c6d46]/20 text-[#5c3d2e] transition-colors"
            aria-label="Tutup Berkas"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Foundational Quote */}
        <div className="bg-[#efe3ce] p-4 rounded-lg border-l-4 border-[#c59b27] mb-5 shadow-xs">
          <div className="flex items-start gap-2.5">
            <Quote className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
            <p className="font-body italic text-[#422c1d] text-sm md:text-base leading-relaxed">
              &ldquo;{tokoh.kutipanFokus}&rdquo;
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          <div>
            <h4 className="flex items-center gap-2 font-heading text-sm text-[#8c6d46] uppercase tracking-wider mb-1 font-bold">
              <Award className="w-4 h-4 text-[#8c6d46]" />
              Peran Utama & Ketokohan
            </h4>
            <p className="text-sm font-ui font-medium text-[#2c221a]">
              {tokoh.peran}
            </p>
            <p className="text-xs text-[#7c5b46] font-ui mt-0.5">
              Basis Pergerakan: {tokoh.asalKarakter}
            </p>
          </div>

          <div className="border-t border-[#8c6d46]/20 pt-3">
            <h4 className="flex items-center gap-2 font-heading text-sm text-[#8c6d46] uppercase tracking-wider mb-1 font-bold">
              <Bookmark className="w-4 h-4 text-[#8c6d46]" />
              Ringkasan Rekam Jejak
            </h4>
            <p className="font-body text-sm leading-relaxed text-[#3a2c20]">
              {tokoh.biodataSingkat}
            </p>
          </div>

          <div className="border-t border-[#8c6d46]/20 pt-3 bg-[#f3e8d2] p-3 rounded-lg border border-[#d6be96]">
            <h4 className="flex items-center gap-2 font-ui text-xs font-bold text-[#7c4424] uppercase tracking-wider mb-1">
              <Info className="w-4 h-4 text-[#7c4424]" />
              Fakta Sejarah Menarik
            </h4>
            <p className="font-body text-xs md:text-sm text-[#4a3424] leading-relaxed">
              {tokoh.faktaMenarik}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#8c6d46]/30 flex items-center justify-between">
          <span className="text-xs text-[#8c6d46] font-ui italic">
            Arsip Dokumen Sejarah Pembentukan BPUPKI
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#5c3d2e] hover:bg-[#462d22] text-[#fbf6ec] rounded-lg font-ui text-xs font-semibold tracking-wide transition-colors shadow-sm"
          >
            Tutup Berkas
          </button>
        </div>
      </div>
    </div>
  );
};
