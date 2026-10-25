import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, RotateCcw, HelpCircle, ChevronRight, Download, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SOAL_KUIS_HOTS } from '../data/flipbookData';
import { sound } from '../utils/audioEffects';

export const HotsQuizComponent: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('');
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const currentQ = SOAL_KUIS_HOTS[currentIdx];
  const totalQuestions = SOAL_KUIS_HOTS.length;

  const handleSelectOption = (key: string) => {
    if (isSubmitted) return;
    sound.playStampClick();
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIdx]: key,
    });
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    SOAL_KUIS_HOTS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.kunci) {
        correct++;
      }
    });
    return Math.round((correct / totalQuestions) * 100);
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    sound.playVictoryChime();
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#b8860b', '#8c2d19', '#1b5e20', '#f4ebe1']
    });
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentIdx(0);
    setShowCertificate(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const score = calculateScore();

  return (
    <div className="w-full parchment-texture rounded-2xl border-2 border-[#8c6d46] p-4 md:p-6 shadow-md text-[#2b1f17]">
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#8c6d46]/30 pb-3 mb-4">
        <div>
          <span className="text-[10px] uppercase font-ui tracking-widest text-[#8c6d46] font-bold">
            Ujian Akhir Ekspedisi • Higher Order Thinking Skills
          </span>
          <h3 className="font-heading text-lg md:text-xl font-bold text-[#3d2315]">
            Tantangan Analisis Kompromi & Toleransi Sejarah
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-ui bg-[#e8dec8] px-3 py-1 rounded-full border border-[#8c6d46]/40 text-[#4a3424] font-semibold">
            Soal {currentIdx + 1} dari {totalQuestions}
          </span>
          {isSubmitted && (
            <span className={`text-xs font-ui px-3 py-1 rounded-full font-bold text-white ${score >= 70 ? 'bg-[#1b5e20]' : 'bg-[#8c2d19]'}`}>
              Skor: {score}/100
            </span>
          )}
        </div>
      </div>

      {!showCertificate ? (
        <div>
          {/* Cognitive Level Badge */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs font-ui font-bold text-[#8c2d19] bg-[#fae8e5] px-2.5 py-0.5 rounded border border-[#e8b5ac]">
              {currentQ.levelKognitif}
            </span>
          </div>

          {/* Question Stem */}
          <div className="bg-[#f5ede1] p-4 rounded-xl border border-[#d6c1a5] mb-4">
            <p className="font-body text-sm md:text-base text-[#2e2017] leading-relaxed font-medium">
              {currentQ.pertanyaan}
            </p>
          </div>

          {/* Options List */}
          <div className="space-y-2.5 mb-5">
            {currentQ.pilihan.map((pil) => {
              const isSelected = selectedAnswers[currentIdx] === pil.key;
              const isCorrectAnswer = currentQ.kunci === pil.key;
              let optionStyle = "bg-[#fcf9f2] hover:bg-[#f3ead7] border-[#d4c1a5] text-[#2c1e15]";

              if (isSubmitted) {
                if (isCorrectAnswer) {
                  optionStyle = "bg-[#e8f5e9] border-[#2e7d32] text-[#1b5e20] font-semibold";
                } else if (isSelected && !isCorrectAnswer) {
                  optionStyle = "bg-[#ffebee] border-[#c62828] text-[#b71c1c]";
                } else {
                  optionStyle = "bg-[#fcf9f2] opacity-60 border-[#d4c1a5] text-[#4a3a2e]";
                }
              } else if (isSelected) {
                optionStyle = "bg-[#efe0c8] border-[#8c6d46] text-[#3d2516] font-semibold ring-2 ring-[#8c6d46]/40";
              }

              return (
                <button
                  key={pil.key}
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(pil.key)}
                  className={`w-full text-left p-3 md:p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                >
                  <span className="w-6 h-6 rounded-full bg-[#e3d3bd] text-[#4a3424] flex items-center justify-center font-ui text-xs font-bold shrink-0 mt-0.5">
                    {pil.key}
                  </span>
                  <span className="font-body text-xs md:text-sm leading-relaxed grow">
                    {pil.teks}
                  </span>
                  {isSubmitted && isCorrectAnswer && (
                    <CheckCircle className="w-5 h-5 text-[#2e7d32] shrink-0" />
                  )}
                  {isSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-[#c62828] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible after submission) */}
          {isSubmitted && (
            <div className="bg-[#ede3ce] p-4 rounded-xl border-l-4 border-[#1b5e20] mb-5 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-ui font-bold text-[#1b5e20] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                Pembahasan Mendalam & Refleksi Karakter:
              </div>
              <p className="font-body text-xs md:text-sm text-[#382618] leading-relaxed">
                {currentQ.pembahasan}
              </p>
              <div className="pt-2 border-t border-[#d8c7a7] text-xs font-ui text-[#6e462c] italic">
                {currentQ.refleksiKarakter}
              </div>
            </div>
          )}

          {/* Question Navigation & Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-[#8c6d46]/30">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className="px-3 py-1.5 rounded-lg border border-[#8c6d46]/40 text-xs font-ui font-medium disabled:opacity-40 hover:bg-[#8c6d46]/10 text-[#4a3424] transition-colors"
              >
                Sebelumnya
              </button>
              <button
                onClick={handleNext}
                disabled={currentIdx === totalQuestions - 1}
                className="px-3 py-1.5 rounded-lg border border-[#8c6d46]/40 text-xs font-ui font-medium disabled:opacity-40 hover:bg-[#8c6d46]/10 text-[#4a3424] transition-colors"
              >
                Selanjutnya
              </button>
            </div>

            <div className="flex items-center gap-2">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={answeredCount < totalQuestions}
                  className="px-5 py-2 bg-[#8c2d19] hover:bg-[#702111] text-white rounded-xl font-ui font-semibold text-xs transition-colors shadow-sm disabled:opacity-40 flex items-center gap-1.5"
                >
                  Kunci Jawaban ({answeredCount}/{totalQuestions})
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 rounded-lg border border-[#8c6d46] text-xs font-ui font-semibold hover:bg-[#8c6d46]/10 text-[#4a3424] flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Ulangi
                  </button>
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="px-4 py-2 bg-[#b8860b] hover:bg-[#a07409] text-white rounded-xl font-ui font-semibold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <Award className="w-4 h-4" />
                    Lihat Sertifikat Kelulusan
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Certificate View */
        <div className="space-y-4 animate-in zoom-in-95 duration-200">
          <div className="bg-[#fbf7ed] border-4 border-[#b8860b] p-6 rounded-2xl shadow-xl text-center relative overflow-hidden">
            {/* Corner decorative crests */}
            <div className="absolute top-2 left-2 text-[#b8860b] text-xl font-heading">✦</div>
            <div className="absolute top-2 right-2 text-[#b8860b] text-xl font-heading">✦</div>
            <div className="absolute bottom-2 left-2 text-[#b8860b] text-xl font-heading">✦</div>
            <div className="absolute bottom-2 right-2 text-[#b8860b] text-xl font-heading">✦</div>

            <div className="w-16 h-16 mx-auto rounded-full bg-[#b8860b] text-white flex items-center justify-center mb-3 shadow-md border-2 border-[#fff] ring-4 ring-[#b8860b]/30">
              <Award className="w-8 h-8" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#8c6d46] font-ui font-bold block">
              PIAGAM PENGHARGAAN PENJELAJAH SEJARAH PANCASILA
            </span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#3a2016] mt-1 mb-2">
              Sertifikat Keberhasilan Ekspedisi BPUPKI & PPKI
            </h3>
            
            <p className="font-body text-xs md:text-sm text-[#5a4233] max-w-lg mx-auto">
              Dengan ini menerangkan bahwa siswa penjelajah:
            </p>

            <div className="my-3 max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Ketik Namamu di Sini..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full text-center font-heading text-lg font-bold text-[#8c2d19] bg-transparent border-b-2 border-[#b8860b] focus:outline-none focus:border-[#8c2d19] pb-1"
              />
            </div>

            <p className="font-body text-xs text-[#5a4233] max-w-lg mx-auto leading-relaxed">
              Telah menuntaskan penelusuran sejarah perumusan Pancasila (Unit 1 Kelas X SMA) dan lulus evaluasi HOTS mengenai esensi musyawarah, gotong royong, dan kompromi toleransi kebangsaan dengan predikat:
            </p>

            <div className="inline-block my-3 px-5 py-1.5 bg-[#e8dec8] rounded-full border border-[#b8860b] text-[#3a2016] font-heading font-bold text-sm">
              Skor Ekspedisi: {score}/100 • Penjelajah Berpikir Kritis
            </div>

            <div className="mt-4 pt-3 border-t border-[#8c6d46]/30 flex items-center justify-between text-[11px] font-ui text-[#7a5e4b]">
              <span>Mata Pelajaran: Pendidikan Pancasila SMA</span>
              <span>Profil Pelajar Pancasila: Terpuji</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowCertificate(false)}
              className="px-4 py-2 border border-[#8c6d46] rounded-xl text-xs font-ui font-semibold text-[#4a3424] hover:bg-[#8c6d46]/10"
            >
              Kembali ke Soal Kuis
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-[#5c3d2e] hover:bg-[#462d22] text-[#fbf6ec] rounded-xl text-xs font-ui font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              Cetak / Simpan Piagam
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
