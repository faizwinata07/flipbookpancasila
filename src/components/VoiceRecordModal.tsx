import React, { useState, useEffect, useRef } from 'react';
import { X, Mic, Play, Pause, Radio, Flame, Sparkles } from 'lucide-react';

interface VoiceRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoiceRecordModal: React.FC<VoiceRecordModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const quoteSpeech = "Saudara-saudara! Apakah dasar negara kita? Prinsip-prinsip yang saya usulkan ini: Pertama, Kebangsaan Indonesia. Kedua, Internasionalisme atau Peri-Kemanusiaan. Ketiga, Mufakat atau Demokrasi. Keempat, Kesejahteraan Sosial. Kelima, Menyusun Indonesia Merdeka dengan bertaqwa kepada Tuhan Yang Maha Esa. Namanya bukan Panca Dharma, tetapi Pancasila! Sila artinya azas atau dasar, dan di atas kelima dasar itulah kita mendirikan negara Indonesia, kekal dan abadi! Jika kuperas yang lima menjadi tiga, dan yang tiga menjadi satu, maka dapatlah aku satu perkataan Indonesia yang tulen: GOTONG ROYONG!";

  const words = quoteSpeech.split(" ");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveWordIndex((prev) => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isPlaying, words.length]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setActiveWordIndex(0);

      // Attempt SpeechSynthesis if supported for audio
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(quoteSpeech);
        utterance.lang = 'id-ID';
        utterance.rate = 0.95;
        utterance.pitch = 0.9;
        utterance.onend = () => {
          setIsPlaying(false);
          setActiveWordIndex(0);
        };
        speechRef.current = utterance;
        try {
          window.speechSynthesis.speak(utterance);
        } catch {
          // Fallback timer keeps running
        }
      }
    }
  };

  const handleClose = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setActiveWordIndex(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#261d17] border-4 border-[#b8860b] rounded-2xl shadow-2xl p-6 md:p-8 text-[#f5ebd7] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Vintage Radio Grill decoration header */}
        <div className="flex items-center justify-between border-b border-[#b8860b]/40 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#3d2c20] border-2 border-[#b8860b] flex items-center justify-center text-[#d4af37] shadow-inner">
              <Radio className={`w-6 h-6 ${isPlaying ? 'animate-pulse text-amber-400' : ''}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest uppercase font-ui bg-[#4a3424] px-2 py-0.5 rounded text-[#d4af37] border border-[#b8860b]/50">
                  Arsip Suara Sejarah • 1 Juni 1945
                </span>
                {isPlaying && (
                  <span className="text-[10px] text-amber-400 font-ui font-semibold animate-pulse">
                    ● SEDANG MENGUDARA
                  </span>
                )}
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-[#faf0dc] mt-0.5">
                Pidato Bersejarah Lahirnya Pancasila — Ir. Soekarno
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-white/10 text-[#d4af37] transition-colors"
            aria-label="Tutup Player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Vintage Waveform Audio Visualizer */}
        <div className="bg-[#1b140f] p-4 rounded-xl border border-[#b8860b]/30 mb-5 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#a88a6d] font-ui flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 text-amber-400" />
              Siaran Gedung Chuo Sangi In, Djakarta (1 Juni 1945)
            </span>
            <span className="text-xs font-mono text-[#d4af37]">
              {isPlaying ? '00:32 / 01:15' : '00:00 / 01:15'}
            </span>
          </div>

          {/* Equalizer Frequency Bars */}
          <div className="flex items-center justify-center gap-1 h-12 py-1 px-4 bg-[#120d09] rounded-lg border border-[#3d2c20]">
            {[24, 45, 68, 30, 85, 95, 60, 40, 75, 90, 80, 55, 70, 90, 65, 45, 80, 95, 60, 35, 75, 50].map((baseHeight, i) => (
              <div
                key={i}
                className="w-1.5 rounded-full transition-all duration-150"
                style={{
                  height: isPlaying ? `${Math.max(15, (baseHeight * (0.4 + Math.random() * 0.6)))}%` : '15%',
                  backgroundColor: isPlaying ? '#d4af37' : '#5c4533',
                  boxShadow: isPlaying ? '0 0 6px rgba(212, 175, 55, 0.5)' : 'none'
                }}
              />
            ))}
          </div>

          {/* Play / Pause Control Button */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={handleTogglePlay}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#b8860b] to-[#d4af37] hover:from-[#d4af37] hover:to-[#ffd700] text-[#1b140f] font-ui font-bold text-sm tracking-wide shadow-lg transition-transform active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" /> Jeda Rekaman
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" /> Putar Pidato 1 Juni 1945
                </>
              )}
            </button>
          </div>
        </div>

        {/* Speech Transcript Container with dynamic text karaoke highlighting */}
        <div className="bg-[#2e231c] p-4 md:p-5 rounded-xl border border-[#b8860b]/30 mb-4 max-h-[160px] overflow-y-auto">
          <p className="font-body text-sm md:text-base leading-relaxed text-[#e6d8c3]">
            {words.map((word, idx) => {
              const isPancasila = word.includes("Pancasila") || word.includes("GOTONG");
              const isCurrent = idx === activeWordIndex && isPlaying;
              return (
                <span
                  key={idx}
                  className={`transition-colors duration-150 ${
                    isCurrent
                      ? 'bg-amber-400 text-black px-1 rounded font-bold'
                      : isPancasila
                      ? 'text-amber-300 font-semibold underline decoration-amber-500/50'
                      : 'text-[#e6d8c3]'
                  } inline-block mr-1`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

        {/* Historical Insight Callout */}
        <div className="bg-[#382b22] p-3.5 rounded-lg border-l-4 border-amber-500 flex items-start gap-3">
          <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-[#d9c7af] font-ui leading-relaxed">
            <strong className="text-amber-300 font-semibold block mb-0.5">
              Mengapa Pidato Ini Mengubah Sejarah?
            </strong>
            Bung Karno berpidato secara spontan tanpa teks selama berjam-jam. Beliau memadukan filsafat modern dengan kearifan asli nusantara, hingga melahirkan istilah resmi <span className="text-white font-semibold">&ldquo;Pancasila&rdquo;</span>. Momen inilah yang disambut sorak gembira hadirin dan diputuskan sebagai Hari Lahir Pancasila.
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-[#b8860b]/30 flex items-center justify-between text-xs text-[#a88a6d] font-ui">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Media Pembelajaran Interaktif Pendidikan Pancasila Kelas 10
          </span>
          <button
            onClick={handleClose}
            className="px-4 py-1.5 bg-[#4a3424] hover:bg-[#5c402c] text-[#f5ebd7] rounded-lg transition-colors font-medium"
          >
            Selesai Mendengarkan
          </button>
        </div>
      </div>
    </div>
  );
};
