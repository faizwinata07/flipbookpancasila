import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Bookmark, 
  Compass, 
  Award, 
  Mic, 
  FileText, 
  ArrowLeftRight, 
  Users, 
  Sparkles,
  HelpCircle,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { DATA_HALAMAN_FLIPBOOK, TOKOH_BPUPKI, TIGA_GAGASAN_TOKOH, TokohBio } from '../data/flipbookData';
import { sound } from '../utils/audioEffects';
import { TokohModal } from './TokohModal';
import { VoiceRecordModal } from './VoiceRecordModal';
import { EasternObjectionModal } from './EasternObjectionModal';
import { ComparisonSlider } from './ComparisonSlider';
import { HotsQuizComponent } from './HotsQuizComponent';

// Generated image assets paths
const COVER_IMAGE = "/src/assets/images/journal_cover_vintage_1792938437002.jpg";
const PEJAMBON_IMAGE = "/src/assets/images/gedung_chuo_sangi_in_1792938438341.jpg";
const DELIBERATION_IMAGE = "/src/assets/images/sidang_bpupki_deliberation_1792938438207.jpg";

interface FlipbookViewerProps {
  onOpenStoryboard: () => void;
}

export const FlipbookViewer: React.FC<FlipbookViewerProps> = ({ onOpenStoryboard }) => {
  // spreadIndex: 0 = Cover, 1 = Hal 1-2, 2 = Hal 3-4, 3 = Hal 5-6, 4 = Hal 7-8, 5 = Hal 9-10, 6 = Hal 11-12
  const [spreadIndex, setSpreadIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [selectedTokoh, setSelectedTokoh] = useState<TokohBio | null>(null);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState<boolean>(false);
  const [isEasternModalOpen, setIsEasternModalOpen] = useState<boolean>(false);
  
  // Interactive CRT Poll State on Hal 1-2
  const [crtSelectedOption, setCrtSelectedOption] = useState<string | null>(null);
  const [crtReflectionText, setCrtReflectionText] = useState<string>('');
  const [crtSaved, setCrtSaved] = useState<boolean>(false);

  // Jump to spread with sound
  const goToSpread = (index: number) => {
    if (index >= 0 && index <= 6) {
      sound.playPageTurn();
      setSpreadIndex(index);
    }
  };

  const handleNext = () => {
    if (spreadIndex < 6) {
      goToSpread(spreadIndex + 1);
    }
  };

  const handlePrev = () => {
    if (spreadIndex > 0) {
      goToSpread(spreadIndex - 1);
    }
  };

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-between p-2 sm:p-4 md:p-6 select-none max-w-7xl mx-auto">
      {/* Top Utility Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between py-2 px-4 bg-[#2b1f16]/90 border border-[#8c6d46]/40 rounded-xl mb-4 text-[#f5ebd7] shadow-lg backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#d4af37]" />
          <span className="font-heading text-sm md:text-base font-bold tracking-wide">
            Jurnal Penjelajah: Lahirnya Pancasila
          </span>
          <span className="hidden md:inline-block text-xs font-ui text-[#c59b27] bg-[#3d2b1f] px-2.5 py-0.5 rounded-full border border-[#8c6d46]/40">
            SMA Kelas 10 • Bab 1 Unit 1
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Audio toggle button */}
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg hover:bg-white/10 text-[#d4af37] transition-colors"
            title={isMuted ? "Aktifkan Efek Suara Buku" : "Matikan Suara"}
            aria-label="Toggle Suara"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Quick Jump Dropdown */}
          <select
            value={spreadIndex}
            onChange={(e) => goToSpread(Number(e.target.value))}
            className="bg-[#3d2b1f] text-[#f5ebd7] border border-[#8c6d46]/60 rounded-lg px-2.5 py-1 text-xs font-ui focus:outline-none focus:border-[#d4af37]"
            aria-label="Pilih Halaman Flipbook"
          >
            <option value={0}>Sampul Depan (Cover Jurnal)</option>
            <option value={1}>Halaman 1-2: Prolog & Pemantik CRT</option>
            <option value={2}>Halaman 3-4: Pembentukan BPUPKI</option>
            <option value={3}>Halaman 5-6: Tiga Tokoh Tiga Gagasan</option>
            <option value={4}>Halaman 7-8: Panitia Sembilan & Piagam</option>
            <option value={5}>Halaman 9-10: PPKI & Keputusan Emas</option>
            <option value={6}>Halaman 11-12: Penutup & Kuis HOTS</option>
          </select>

          {/* Open Storyboard View button */}
          <button
            onClick={onOpenStoryboard}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#8c2d19] hover:bg-[#a33722] text-white rounded-lg text-xs font-ui font-semibold shadow-xs transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            Naskah & Canva Guide
          </button>
        </div>
      </div>

      {/* Main Flipbook Book Container */}
      <div className="w-full max-w-5xl grow flex items-center justify-center">
        {spreadIndex === 0 ? (
          /* SPREAD 0: VINTAGE LEATHER JOURNAL COVER */
          <div className="w-full max-w-md mx-auto aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden border-4 border-[#8c6d46] relative group transform transition-all hover:scale-[1.01]">
            <img 
              src={COVER_IMAGE}
              alt="Sampul Jurnal Penjelajah Lahirnya Pancasila"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 text-center text-white">
              <span className="text-xs uppercase font-ui tracking-widest text-amber-300 font-bold mb-1">
                Media Pembelajaran Interaktif Siswa SMA Kelas 10
              </span>
              <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-[#faf2e4] leading-tight mb-2 drop-shadow-md">
                Jurnal Penjelajah: Menelusuri Jejak Lahirnya Pancasila
              </h1>
              <p className="font-body italic text-xs md:text-sm text-neutral-300 mb-6 max-w-xs mx-auto">
                Sejarah Perumusan Weltanschauung Bangsa oleh BPUPKI dan PPKI 1945
              </p>

              <button
                onClick={() => goToSpread(1)}
                className="w-full py-3 bg-gradient-to-r from-[#b8860b] to-[#d4af37] hover:from-[#d4af37] hover:to-[#ffd700] text-[#1b140f] font-ui font-bold text-sm rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Buka Lembar Catatan Penjelajah</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* SPREADS 1 TO 6: TWO-PAGE OPEN BOOK FORMAT */
          <div className="w-full bg-[#fbf6ec] rounded-2xl shadow-2xl border-4 border-[#734e32] overflow-hidden min-h-[580px] md:min-h-[640px] flex flex-col relative">
            {/* Visual Book Spine & Binding Details */}
            <div className="grow grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#cbb396]/60 relative">
              {/* Vertical book gutter shadow down the middle */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none bg-gradient-to-r from-black/15 via-black/5 to-black/15 z-10" />

              {/* LEFT PAGE */}
              <div className="p-6 md:p-8 flex flex-col justify-between parchment-texture gutter-left">
                <div>
                  {/* Left Header */}
                  <div className="flex items-center justify-between border-b border-[#8c6d46]/30 pb-2 mb-4">
                    <span className="text-[10px] uppercase font-ui tracking-widest font-bold text-[#8c6d46]">
                      {DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].chapterTag}
                    </span>
                    <span className="font-heading text-xs font-bold text-[#8c6d46]">
                      Halaman {(spreadIndex * 2) - 1}
                    </span>
                  </div>

                  {/* Left Page Title & Primary Narrative */}
                  <div className="mb-4">
                    <h2 className="font-heading text-lg md:text-xl font-bold text-[#3a2216] leading-snug">
                      {DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].teksUtama.judul}
                    </h2>
                    <p className="font-ui text-xs font-semibold text-[#8c6d46] mt-1 italic">
                      {DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].teksUtama.subjudul}
                    </p>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-3 font-body text-xs md:text-sm text-[#2c1f17] leading-relaxed">
                    <p>{DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].teksUtama.paragraf[0]}</p>
                    <p>{DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].teksUtama.paragraf[1]}</p>
                    {DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].teksUtama.paragraf[2] && (
                      <p className="hidden sm:block">
                        {DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].teksUtama.paragraf[2]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Left Page Bottom Footnote / Journal Quote */}
                {DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].teksUtama.catatanJurnal && (
                  <div className="mt-4 pt-3 border-t border-[#8c6d46]/20 bg-[#efe4ce]/60 p-3 rounded-lg border-l-2 border-[#b8860b]">
                    <p className="font-body text-xs italic text-[#543b2a]">
                      {DATA_HALAMAN_FLIPBOOK[spreadIndex - 1].teksUtama.catatanJurnal}
                    </p>
                  </div>
                )}
              </div>

              {/* RIGHT PAGE (Interactive Stage & Specialized Content) */}
              <div className="p-6 md:p-8 flex flex-col justify-between parchment-texture-darker gutter-right">
                <div className="space-y-4">
                  {/* Right Header */}
                  <div className="flex items-center justify-between border-b border-[#8c6d46]/30 pb-2 mb-2">
                    <span className="text-[10px] uppercase font-ui tracking-widest font-bold text-[#b8860b]">
                      Interaktivitas & Bukti Sejarah
                    </span>
                    <span className="font-heading text-xs font-bold text-[#8c6d46]">
                      Halaman {spreadIndex * 2}
                    </span>
                  </div>

                  {/* SPREAD 1 SPECIFIC (CRT Interactive Dilemma & Reflection) */}
                  {spreadIndex === 1 && (
                    <div className="space-y-3">
                      <div className="bg-[#ede2ce] p-3.5 rounded-xl border border-[#cbb396] shadow-xs">
                        <div className="flex items-center gap-1.5 text-xs font-ui font-bold text-[#8c2d19] mb-1">
                          <HelpCircle className="w-4 h-4 text-[#8c2d19]" />
                          Tantangan Pemantik Gotong Royong (CRT):
                        </div>
                        <p className="font-body text-xs text-[#2c1d13] leading-relaxed">
                          {DATA_HALAMAN_FLIPBOOK[0].interaktif.kontenPopUp.pertanyaan}
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-2">
                        {DATA_HALAMAN_FLIPBOOK[0].interaktif.kontenPopUp.opsi.map((opt: any) => (
                          <button
                            key={opt.id}
                            onClick={() => {
                              sound.playStampClick();
                              setCrtSelectedOption(opt.id);
                            }}
                            className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs font-body leading-relaxed flex items-start gap-2 ${
                              crtSelectedOption === opt.id
                                ? 'bg-[#efe0c8] border-[#8c6d46] font-semibold text-[#3a2016] ring-1 ring-[#8c6d46]'
                                : 'bg-white/80 hover:bg-white border-[#d4c1a5] text-[#3d2d22]'
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full bg-[#dec9ad] text-[#4a3424] flex items-center justify-center font-ui text-[11px] font-bold shrink-0 mt-0.5">
                              {opt.id === 'opt_1' ? 'A' : opt.id === 'opt_2' ? 'B' : 'C'}
                            </span>
                            <span>{opt.teks}</span>
                          </button>
                        ))}
                      </div>

                      {/* Feedback box */}
                      {crtSelectedOption && (
                        <div className="bg-[#e4ede1] p-3 rounded-lg border border-[#a6cfa0] text-xs font-body text-[#1d461f] leading-relaxed animate-in fade-in">
                          <strong>Kearifan Musyawarah:</strong> {DATA_HALAMAN_FLIPBOOK[0].interaktif.kontenPopUp.umpanBalikCRT}
                        </div>
                      )}

                      {/* Student personal journal input */}
                      <div className="pt-2">
                        <label className="text-[11px] font-ui font-bold text-[#7a573f] block mb-1">
                          Tulis Refleksimu Sendiri: Bagaimana kamu mempraktikkan musyawarah di kelasmu?
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={crtReflectionText}
                            onChange={(e) => setCrtReflectionText(e.target.value)}
                            placeholder="Contoh: Saat bagi tugas piket atau mufakat ketua kelas..."
                            className="w-full text-xs font-body p-2 rounded-lg border border-[#cbb396] bg-white/90 text-[#2c1f17] focus:outline-none focus:border-[#8c6d46]"
                          />
                          <button
                            onClick={() => {
                              if (crtReflectionText.trim()) {
                                sound.playVictoryChime();
                                setCrtSaved(true);
                                setTimeout(() => setCrtSaved(false), 3000);
                              }
                            }}
                            className="px-3 py-1.5 bg-[#5c3d2e] hover:bg-[#462d22] text-[#fbf6ec] rounded-lg text-xs font-ui font-semibold shrink-0 transition-colors"
                          >
                            {crtSaved ? "Tersimpan ✓" : "Simpan"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SPREAD 2 SPECIFIC (Pembentukan BPUPKI, Timeline & 3 Tokoh Stamps) */}
                  {spreadIndex === 2 && (
                    <div className="space-y-3">
                      {/* Pejambon archival photo sketch */}
                      <div className="rounded-xl overflow-hidden border-2 border-[#8c6d46] shadow-sm relative group">
                        <img 
                          src={PEJAMBON_IMAGE} 
                          alt="Gedung Pancasila Pejambon 1945"
                          referrerPolicy="no-referrer"
                          className="w-full h-32 md:h-36 object-cover"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/60 p-1.5 text-center text-[10px] text-amber-200 font-ui">
                          Gedung Chuo Sangi In (kini Gedung Pancasila), Pejambon Jakarta Pusat (1945)
                        </div>
                      </div>

                      {/* Mini Timeline Strip */}
                      <div className="bg-[#ede2ce] p-2.5 rounded-lg border border-[#cbb396] text-[11px] font-ui space-y-1">
                        <div className="font-bold text-[#8c2d19] flex items-center gap-1.5">
                          <Bookmark className="w-3.5 h-3.5" />
                          Linimasa Pembentukan Dokuritsu Zyunbi Tyoosakai:
                        </div>
                        <p className="text-[#3a2a1f]">
                          <strong>1 Maret:</strong> Maklumat Harada • <strong>29 April:</strong> Pembentukan 67 Anggota • <strong>28 Mei:</strong> Pelantikan Resmi • <strong>29 Mei:</strong> Sidang Pertama Dibuka.
                        </p>
                      </div>

                      {/* 3 Tokoh Interactive Stamp Buttons */}
                      <div className="pt-1">
                        <span className="text-[11px] font-ui font-bold text-[#7a573f] block mb-2">
                          Klik Stempel untuk Membuka Dossier Biodata Tokoh:
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {TOKOH_BPUPKI.map((tokoh) => (
                            <button
                              key={tokoh.id}
                              onClick={() => {
                                sound.playStampClick();
                                setSelectedTokoh(tokoh);
                              }}
                              className="p-2 rounded-xl border-2 border-dashed border-[#8c6d46] bg-[#fbf5e8] hover:bg-[#efe0c8] transition-all text-center group cursor-pointer shadow-xs active:scale-95"
                            >
                              <div className="w-8 h-8 mx-auto rounded-full bg-[#5c3d2e] text-[#fbf6ec] flex items-center justify-center font-heading text-xs font-bold mb-1 group-hover:scale-105 transition-transform">
                                {tokoh.nama.charAt(0)}
                              </div>
                              <div className="font-ui font-bold text-[11px] text-[#3a2016] line-clamp-1">
                                {tokoh.nama.split(" ")[tokoh.nama.split(" ").length - 1]}
                              </div>
                              <div className="text-[9px] text-[#7a5a44] font-ui line-clamp-1">
                                {tokoh.id === 'radjiman' ? 'Ketua' : tokoh.id === 'soeroso' ? 'Wakil (RI)' : 'Wakil (Jpn)'}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SPREAD 3 SPECIFIC (Tiga Tokoh Tiga Gagasan & Voice Record) */}
                  {spreadIndex === 3 && (
                    <div className="space-y-3">
                      {/* Deliberation Meeting Sketch */}
                      <div className="rounded-xl overflow-hidden border-2 border-[#8c6d46] shadow-sm relative">
                        <img 
                          src={DELIBERATION_IMAGE} 
                          alt="Suasana Musyawarah Sidang BPUPKI 1945"
                          referrerPolicy="no-referrer"
                          className="w-full h-28 md:h-32 object-cover"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/60 p-1 text-center text-[10px] text-amber-200 font-ui">
                          Sidang Pertama BPUPKI: Perumusan Dasar Moral dan Filosofis Negara
                        </div>
                      </div>

                      {/* 3 Ideas comparison cards */}
                      <div className="grid grid-cols-3 gap-1.5 text-[10px] font-ui">
                        {TIGA_GAGASAN_TOKOH.map((g, idx) => (
                          <div key={idx} className="bg-[#ede2ce] p-2 rounded-lg border border-[#cbb396]">
                            <div className="font-bold text-[#8c2d19] truncate">{g.tokoh}</div>
                            <div className="text-[9px] text-[#6b4c37] mb-1">{g.tanggal}</div>
                            <div className="text-[9px] text-[#3a281c] font-medium leading-tight">
                              {g.kataKunciFilosofis}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Vintage Voice Record Interactive Callout */}
                      <div className="p-3 bg-[#261d17] text-[#f5ebd7] rounded-xl border-2 border-[#b8860b] shadow-md flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-full bg-[#b8860b] text-[#1b140f] flex items-center justify-center font-bold shrink-0 animate-pulse">
                            <Mic className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-amber-300 font-ui font-bold block">
                              Arsip Suara Bersejarah 1 Juni 1945
                            </span>
                            <span className="font-heading text-xs font-bold text-white block">
                              Pidato Lahirnya Pancasila — Ir. Soekarno
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            sound.playStampClick();
                            setIsVoiceModalOpen(true);
                          }}
                          className="px-3 py-1.5 bg-gradient-to-r from-[#b8860b] to-[#d4af37] hover:from-[#d4af37] hover:to-[#ffd700] text-[#1b140f] rounded-lg text-xs font-ui font-bold shadow transition-transform active:scale-95 shrink-0"
                        >
                          Putar Rekaman
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SPREAD 4 SPECIFIC (Panitia Sembilan, 7 Kata Piagam Jakarta, Eastern Objection) */}
                  {spreadIndex === 4 && (
                    <div className="space-y-3">
                      {/* Document Frame */}
                      <div className="bg-[#fceae6] p-3.5 rounded-xl border-2 border-[#e09f92] shadow-inner text-[#421911]">
                        <div className="flex items-center justify-between text-[10px] font-ui uppercase font-bold text-[#8c2d19] mb-1">
                          <span>Naskah Mukaddimah (Piagam Jakarta)</span>
                          <span>22 Juni 1945</span>
                        </div>
                        <p className="font-body text-xs md:text-sm text-[#2b1812] leading-relaxed">
                          Maka disusunlah kemerdekaan kebangsaan Indonesia itu dalam suatu Hukum Dasar Negara Indonesia, yang terbentuk dalam suatu susunan Negara Republik Indonesia yang berkedaulatan rakyat, dengan berdasar kepada:
                        </p>
                        
                        {/* 7 CONTESTED WORDS HIGHLIGHT */}
                        <div 
                          onClick={() => {
                            sound.playStampClick();
                            setIsEasternModalOpen(true);
                          }}
                          className="my-2 p-2 bg-[#f8d7da] hover:bg-[#f5c6cb] rounded-lg border-2 border-dashed border-[#8c2d19] cursor-pointer transition-colors group"
                        >
                          <span className="text-[10px] font-ui font-bold text-[#8c2d19] uppercase block">
                            Sorotan 7 Kata Kunci (Klik untuk Dekripsi):
                          </span>
                          <span className="font-body text-sm font-bold text-[#8c2d19] underline decoration-[#8c2d19]">
                            &ldquo;Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya&rdquo;
                          </span>
                          <span className="text-[10px] font-ui text-[#8c2d19] flex items-center gap-1 mt-1 font-semibold">
                            <Sparkles className="w-3 h-3" /> Mengapa kalimat ini memicu keberatan Indonesia Timur?
                          </span>
                        </div>
                      </div>

                      {/* Button to open Eastern Objection Dossier */}
                      <button
                        onClick={() => {
                          sound.playStampClick();
                          setIsEasternModalOpen(true);
                        }}
                        className="w-full py-2.5 bg-[#8c2d19] hover:bg-[#702111] text-white rounded-xl font-ui font-semibold text-xs transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        Buka Arsip: Mengapa Wilayah Timur Berkeberatan?
                      </button>

                      <div className="bg-[#ede2ce] p-2.5 rounded-lg border border-[#cbb396] text-[11px] font-ui text-[#4a3424] leading-relaxed">
                        <strong>Intisari Pembelajaran:</strong> Para pendiri bangsa menyadari bahwa mempertahankan 7 kata tersebut dapat membahayakan keutuhan Negara Kesatuan Republik Indonesia yang baru saja diproklamasikan.
                      </div>
                    </div>
                  )}

                  {/* SPREAD 5 SPECIFIC (PPKI & Keputusan Emas - Before/After Slider) */}
                  {spreadIndex === 5 && (
                    <div className="space-y-3">
                      {/* Integrated Comparison Slider Component */}
                      <ComparisonSlider />

                      <div className="bg-[#f0f8f1] p-3 rounded-xl border border-[#a2d5ab] text-xs font-body text-[#184e27] leading-relaxed">
                        <strong className="block font-ui text-[11px] font-bold text-[#144d24] uppercase mb-0.5">
                          Keteladanan Luhur Para Tokoh Islam:
                        </strong>
                        Ki Bagus Hadikusumo, K.H. Wahid Hasyim, dan Kasman Singodimedjo membuktikan jiwa kenegarawanan agung. Mengubah 7 kata menjadi <span className="font-semibold">&ldquo;Ketuhanan Yang Maha Esa&rdquo;</span> adalah pengorbanan suci demi merawat rumah bersama Indonesia dari perpecahan.
                      </div>
                    </div>
                  )}

                  {/* SPREAD 6 SPECIFIC (Evaluasi Kuis HOTS & Penutup) */}
                  {spreadIndex === 6 && (
                    <div className="space-y-3">
                      {/* Integrated HOTS Quiz Engine */}
                      <HotsQuizComponent />
                    </div>
                  )}
                </div>

                {/* Right Page Bottom Action */}
                <div className="mt-4 pt-3 border-t border-[#8c6d46]/20 flex items-center justify-between text-xs text-[#70523f] font-ui">
                  <span className="italic">
                    Jurnal Catatan Sejarah Pancasila • SMA Kelas 10
                  </span>
                  <button
                    onClick={onOpenStoryboard}
                    className="hover:text-[#3a2016] underline font-semibold flex items-center gap-1"
                  >
                    <span>Lihat Naskah Canva</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Book Navigation Controls */}
            <div className="p-3 bg-[#e8dec8] border-t-2 border-[#8c6d46]/40 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={spreadIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5c3d2e] hover:bg-[#462d22] text-[#fbf6ec] font-ui text-xs font-semibold disabled:opacity-40 transition-colors cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSpread(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      spreadIndex === idx 
                        ? 'bg-[#8c2d19] w-6' 
                        : 'bg-[#8c6d46]/40 hover:bg-[#8c6d46]'
                    }`}
                    title={`Lompat ke Spread ${idx}`}
                    aria-label={`Lompat ke Spread ${idx}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={spreadIndex === 6}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8c2d19] hover:bg-[#702111] text-white font-ui text-xs font-semibold disabled:opacity-40 transition-colors cursor-pointer shadow-xs"
              >
                <span>Halaman Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Pop-up Dialogs */}
      <TokohModal 
        tokoh={selectedTokoh} 
        onClose={() => setSelectedTokoh(null)} 
      />
      <VoiceRecordModal 
        isOpen={isVoiceModalOpen} 
        onClose={() => setIsVoiceModalOpen(false)} 
      />
      <EasternObjectionModal 
        isOpen={isEasternModalOpen} 
        onClose={() => setIsEasternModalOpen(false)} 
      />
    </div>
  );
};
