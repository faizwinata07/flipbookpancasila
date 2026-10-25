import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export const ComparisonSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100

  return (
    <div className="w-full bg-[#f4ebe1] p-5 md:p-6 rounded-2xl border-2 border-[#b8860b] shadow-md text-[#2c1d12]">
      {/* Title */}
      <div className="flex items-center justify-between mb-4 border-b border-[#b8860b]/30 pb-2">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="w-5 h-5 text-[#b8860b]" />
          <h4 className="font-heading font-bold text-base md:text-lg text-[#3d2211]">
            Slider Komparasi Perubahan Historis Sila Pertama
          </h4>
        </div>
        <span className="text-xs font-ui font-semibold text-[#8c6d46] bg-[#ebe1ce] px-2.5 py-1 rounded-full border border-[#b8860b]/40">
          Geser Tuas untuk Melihat Perbandingan
        </span>
      </div>

      {/* Visual Slider Container */}
      <div className="relative w-full overflow-hidden rounded-xl border-2 border-[#8c6d46] h-64 md:h-52 select-none shadow-inner">
        {/* RIGHT LAYER: SESUDAH (18 Agustus 1945) - Always visible underneath */}
        <div className="absolute inset-0 bg-[#e8f3ea] p-4 flex flex-col justify-between text-[#133e21]">
          <div>
            <div className="flex items-center justify-end gap-1.5 text-xs font-ui font-bold text-[#1b5e20] mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#2e7d32]" />
              SESUDAH: PEMBUKAAN UUD 1945 (18 Agustus 1945)
            </div>
            <div className="font-heading text-lg md:text-xl font-bold text-[#1b5e20] text-right mt-1 leading-snug">
              &ldquo;Ketuhanan Yang Maha Esa&rdquo;
            </div>
            <p className="font-body text-xs text-[#2e5939] text-right mt-2 leading-relaxed">
              Prinsip Ketuhanan universal yang menjamin kebebasan beragama bagi seluruh pemeluk agama resmi dan kepercayaan di seluruh pelosok Indonesia tanpa diskriminasi.
            </p>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-ui bg-[#d0e8d5] text-[#134920] px-2 py-0.5 rounded font-semibold border border-[#96cca1]">
              Keputusan Emas Penyelamat Persatuan Bangsa
            </span>
          </div>
        </div>

        {/* LEFT LAYER: SEBELUM (Piagam Jakarta, 22 Juni 1945) - Clipped by sliderPos */}
        <div 
          className="absolute inset-0 bg-[#fbf0ea] p-4 flex flex-col justify-between text-[#5c1c11] border-r-2 border-[#c59b27] transition-none"
          style={{ clipPath: `polygon(0% 0%, ${sliderPos}% 0%, ${sliderPos}% 100%, 0% 100%)` }}
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs font-ui font-bold text-[#b71c1c] mb-2">
              <AlertTriangle className="w-4 h-4 text-[#c62828]" />
              SEBELUM: PIAGAM JAKARTA (22 Juni 1945)
            </div>
            <div className="font-heading text-lg md:text-xl font-bold text-[#8c2d19] leading-snug">
              &ldquo;Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya&rdquo;
            </div>
            <p className="font-body text-xs text-[#6e291d] mt-2 leading-relaxed max-w-[85%]">
              Klausul tujuh kata teologis yang memicu keberatan keras dari delegasi kawasan Indonesia Timur karena khawatir memunculkan kasta warga negara kelas dua.
            </p>
          </div>
          <div>
            <span className="text-[11px] font-ui bg-[#f8d7da] text-[#721c24] px-2 py-0.5 rounded font-semibold border border-[#f5c6cb]">
              Rumusan Awal Hasil Panitia Sembilan
            </span>
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-[#b8860b] cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-[#b8860b] text-white flex items-center justify-center shadow-lg border-2 border-white text-xs font-bold font-ui">
            ↔
          </div>
        </div>
      </div>

      {/* Range input for precise control */}
      <div className="mt-3 flex items-center gap-3">
        <span className="text-xs font-ui font-semibold text-[#8c2d19] shrink-0">
          22 Juni (Piagam)
        </span>
        <input 
          type="range"
          min="5"
          max="95"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="w-full accent-[#b8860b] cursor-pointer"
          aria-label="Pengatur Perbandingan Sila Pertama"
        />
        <span className="text-xs font-ui font-semibold text-[#1b5e20] shrink-0">
          18 Agustus (UUD 45)
        </span>
      </div>

      {/* Historical reflection footnote */}
      <div className="mt-4 p-3 bg-[#e8dec8] rounded-xl border border-[#cbb38d] flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-[#9c6615] shrink-0 mt-0.5" />
        <p className="font-body text-xs text-[#4a3424] leading-relaxed">
          <strong>Makna Pedagogis:</strong> Keberhasilan diplomasi fajar 18 Agustus 1945 oleh Bung Hatta bersama para tokoh Islam membuktikan bahwa kompromi terhebat bangsa ini lahir dari kebijaksanaan hati, di mana ego golongan ditanggalkan demi keselamatan dan keabadian seluruh anak negeri.
        </p>
      </div>
    </div>
  );
};
