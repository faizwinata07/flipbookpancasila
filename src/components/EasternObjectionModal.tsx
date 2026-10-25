import React from 'react';
import { X, ShieldAlert, Compass, Globe2, BookOpen } from 'lucide-react';

interface EasternObjectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasternObjectionModal: React.FC<EasternObjectionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl parchment-texture rounded-2xl border-4 border-[#8c2d19] shadow-2xl p-6 md:p-8 text-[#2b1e16] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Vintage Top Header */}
        <div className="flex items-start justify-between border-b-2 border-[#8c2d19]/30 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#8c2d19] text-[#fdfbf7] flex items-center justify-center shadow-md border border-[#c59b27]">
              <ShieldAlert className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-ui tracking-widest text-[#8c2d19] font-bold">
                Kawat Rahasia & Catatan Diplomasi Kritis
              </span>
              <h3 className="font-heading text-lg md:text-xl font-bold text-[#3d1810]">
                Mengapa Indonesia Timur Berkeberatan atas 7 Kata?
              </h3>
              <p className="text-xs font-ui text-[#6b4737]">
                Konteks Bersejarah Sore Hari 17 Agustus 1945 Menuju Fajar 18 Agustus 1945
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#8c2d19]/10 text-[#8c2d19] transition-colors"
            aria-label="Tutup Catatan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight 7 words */}
        <div className="bg-[#fceae6] border border-[#e09f92] p-4 rounded-xl mb-4 shadow-inner">
          <span className="text-[11px] font-ui font-semibold text-[#8c2d19] uppercase tracking-wider block mb-1">
            Klausul Tujuh Kata dalam Piagam Jakarta (22 Juni 1945):
          </span>
          <p className="font-body text-base md:text-lg font-bold text-[#8c2d19] italic">
            &ldquo;...dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya.&rdquo;
          </p>
        </div>

        {/* Key Reasons Cards */}
        <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
          <div className="bg-[#f5ede0] p-3.5 rounded-lg border border-[#d9c4aa]">
            <h4 className="flex items-center gap-2 font-heading text-sm font-bold text-[#633a25] mb-1">
              <Globe2 className="w-4 h-4 text-[#8c2d19]" />
              1. Ancaman Perpecahan Wilayah & Disintegrasi Nasional
            </h4>
            <p className="font-body text-xs md:text-sm text-[#3b2a1f] leading-relaxed">
              Utusan dari wilayah Indonesia Timur (melalui opsir Kaigun Angkatan Laut Jepang) menyampaikan langsung kepada Bung Hatta bahwa rakyat di kawasan timur (Sulawesi, Maluku, Nusa Tenggara, Papua) yang berpenduduk mayoritas Kristen/Katolik dan penganut kepercayaan adat merasa didiskriminasi. Jika klausul khusus satu agama tersebut dipaksakan menjadi dasar negara bersama, mereka mempertimbangkan untuk tidak bergabung dalam Republik Indonesia.
            </p>
          </div>

          <div className="bg-[#f5ede0] p-3.5 rounded-lg border border-[#d9c4aa]">
            <h4 className="flex items-center gap-2 font-heading text-sm font-bold text-[#633a25] mb-1">
              <Compass className="w-4 h-4 text-[#8c2d19]" />
              2. Kemerdekaan adalah Rumah Bersama Lintas Keyakinan
            </h4>
            <p className="font-body text-xs md:text-sm text-[#3b2a1f] leading-relaxed">
              Kemerdekaan Indonesia direbut melalui pengorbanan darah, harta, dan jiwa seluruh anak bangsa tanpa membedakan agama maupun suku. Menempatkan syariat agama tertentu di jantung hukum tertinggi negara dinilai bertentangan dengan prinsip kesetaraan status kewarganegaraan (<em className="font-semibold">equal citizenship</em>).
            </p>
          </div>

          <div className="bg-[#f5ede0] p-3.5 rounded-lg border border-[#d9c4aa]">
            <h4 className="flex items-center gap-2 font-heading text-sm font-bold text-[#633a25] mb-1">
              <BookOpen className="w-4 h-4 text-[#8c2d19]" />
              3. Kenegarawanan Para Ulama: Mengalah untuk Menang Bersama
            </h4>
            <p className="font-body text-xs md:text-sm text-[#3b2a1f] leading-relaxed">
              Sikap para tokoh Islam seperti Ki Bagus Hadikusumo, K.H. Wahid Hasyim, dan Kasman Singodimedjo yang bersedia menghapus tujuh kata tersebut dan menggantinya dengan <strong className="text-[#8c2d19]">Ketuhanan Yang Maha Esa</strong> adalah bukti kematangan spiritual dan cinta tanah air yang tak tertandingi. Mereka memilih menyelamatkan kapal Indonesia dari karam daripada memaksakan kehendak kelompok sendiri.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-[#8c2d19]/20 flex items-center justify-between text-xs text-[#704f3d] font-ui">
          <span>Refleksi: Toleransi adalah fondasi utama tegaknya Republik.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#8c2d19] hover:bg-[#6e2213] text-white rounded-lg font-ui font-semibold text-xs transition-colors shadow-sm"
          >
            Pahami & Tutup Arsip
          </button>
        </div>
      </div>
    </div>
  );
};
