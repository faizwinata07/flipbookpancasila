import React, { useState } from 'react';
import { 
  DATA_HALAMAN_FLIPBOOK, 
  METADATA_PEMBELAJARAN, 
  SOAL_KUIS_HOTS, 
  TOKOH_BPUPKI, 
  TIGA_GAGASAN_TOKOH 
} from '../data/flipbookData';
import { Copy, Check, Palette, Sparkles, BookOpen, Layers, MousePointer, HelpCircle, Download } from 'lucide-react';

export const StoryboardView: React.FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const generateFullMarkdownScript = () => {
    let md = `# NASKAH LENGKAP MEDIA PEMBELAJARAN FLIPBOOK INTERAKTIF
## TEMA: "Jurnal Penjelajah: Menelusuri Jejak Lahirnya Pancasila"
### PENDIDIKAN PANCASILA - KELAS 10 SMA (FASE E)
**Bab 1: Menjiwai Pancasila | Unit 1: Sejarah Perumusan Pancasila oleh BPUPKI dan PPKI**
**Pendekatan:** ${METADATA_PEMBELAJARAN.pendekatan}
**Profil Pelajar Pancasila:** ${METADATA_PEMBELAJARAN.dimensiProfilPelajar.join(", ")}

---

`;

    DATA_HALAMAN_FLIPBOOK.forEach((item) => {
      md += `## ${item.halamanNomor}: ${item.spreadTitle}
*Kategori: ${item.chapterTag}*

### (1) TEKS UTAMA
**Judul:** ${item.teksUtama.judul}
**Subjudul:** ${item.teksUtama.subjudul}

${item.teksUtama.paragraf.join("\n\n")}

${item.teksUtama.catatanJurnal ? `*${item.teksUtama.catatanJurnal}*` : ""}

### (2) INSTRUKSI VISUAL / GAMBAR UNTUK CANVA
- **Rekomendasi Layout:** ${item.instruksiCanva.rekomendasiLayout}
- **Palet Warna Utama (Hex):** ${item.instruksiCanva.paletWarna.map(c => `${c.nama} (${c.hex})`).join(", ")}
- **Kata Kunci Elemen Canva:** ${item.instruksiCanva.kataKunciElemenCanva.join(", ")}
- **Detail Instruksi Visual:** ${item.instruksiCanva.instruksiVisualDetail}
- **Tipografi:** ${item.instruksiCanva.tipTipografi}

### (3) TEKS UNTUK TOMBOL INTERAKTIF / POP-UP
- **Fitur Interaktif:** ${item.interaktif.namaFitur}
- **Label Tombol:** [ ${item.interaktif.teksTombol} ]
- **Konten Interaktif/Pop-Up:**
\`\`\`json
${JSON.stringify(item.interaktif.kontenPopUp, null, 2)}
\`\`\`

---

`;
    });

    md += `## LAMPIRAN EVALUASI: KUIS HOTS (PILIHAN GANDA TINGKAT TINGGI)\n\n`;
    SOAL_KUIS_HOTS.forEach((soal, i) => {
      md += `### Soal ${i + 1} (${soal.levelKognitif})\n`;
      md += `**Pertanyaan:**\n${soal.pertanyaan}\n\n`;
      soal.pilihan.forEach(p => {
        md += `- ${p.key}. ${p.teks}\n`;
      });
      md += `\n**Kunci Jawaban:** ${soal.kunci}\n`;
      md += `**Pembahasan:** ${soal.pembahasan}\n`;
      md += `**Refleksi Karakter:** ${soal.refleksiKarakter}\n\n`;
    });

    return md;
  };

  const handleDownloadMarkdown = () => {
    const md = generateFullMarkdownScript();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Naskah_Lengkap_Flipbook_Pancasila_Kelas10.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8 text-[#2c2017]">
      {/* Instructional Design Header banner */}
      <div className="parchment-texture border-2 border-[#8c6d46] rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#8c6d46]/30 pb-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-ui font-bold bg-[#8c2d19] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                Dokumen Kurikulum & Desain Instruksional
              </span>
              <span className="text-xs font-ui text-[#8c6d46] font-semibold">
                Fase E • SMA Kelas 10
              </span>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-[#3a2016]">
              Naskah Lengkap & Panduan Produksi Canva Flipbook Interaktif
            </h1>
            <p className="font-body text-sm md:text-base text-[#5c4333] mt-1 max-w-2xl leading-relaxed">
              Tema Visual: <em>&ldquo;Jurnal Penjelajah: Menelusuri Jejak Lahirnya Pancasila&rdquo;</em> (Buku Catatan Sejarah/Vintage). Dilengkapi teks pedagogis Culturally Responsive Teaching (CRT), instruksi grafis Canva, dan interaktivitas pop-up.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleCopyText(generateFullMarkdownScript(), 'all_script')}
              className="px-4 py-2 bg-[#5c3d2e] hover:bg-[#462d22] text-[#fbf6ec] rounded-xl font-ui text-xs font-semibold flex items-center gap-2 shadow-sm transition-colors"
            >
              {copiedSection === 'all_script' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" /> Tersalin ke Clipboard
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Salin Seluruh Naskah (.MD)
                </>
              )}
            </button>
            <button
              onClick={handleDownloadMarkdown}
              className="px-4 py-2 bg-[#b8860b] hover:bg-[#996f08] text-white rounded-xl font-ui text-xs font-semibold flex items-center gap-2 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" /> Unduh Dokumen Naskah
            </button>
          </div>
        </div>

        {/* Learning Objectives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-ui">
          <div className="bg-[#ede2ce] p-3.5 rounded-xl border border-[#d4c1a5]">
            <span className="font-bold text-[#7a482b] uppercase tracking-wider block mb-1">
              Mata Pelajaran & Unit
            </span>
            <p className="font-medium text-[#3b2a1f]">
              {METADATA_PEMBELAJARAN.babUnit}
            </p>
          </div>
          <div className="bg-[#ede2ce] p-3.5 rounded-xl border border-[#d4c1a5]">
            <span className="font-bold text-[#7a482b] uppercase tracking-wider block mb-1">
              Pendekatan Pembelajaran
            </span>
            <p className="font-medium text-[#3b2a1f]">
              {METADATA_PEMBELAJARAN.pendekatan}
            </p>
          </div>
          <div className="bg-[#ede2ce] p-3.5 rounded-xl border border-[#d4c1a5]">
            <span className="font-bold text-[#7a482b] uppercase tracking-wider block mb-1">
              Dimensi Profil Pelajar Pancasila
            </span>
            <p className="font-medium text-[#3b2a1f]">
              Bernalar Kritis, Gotong Royong, Berkebhinekaan Global
            </p>
          </div>
        </div>
      </div>

      {/* Pages Breakdown List */}
      <div className="space-y-8">
        {DATA_HALAMAN_FLIPBOOK.map((item) => (
          <div 
            key={item.id}
            id={`naskah-${item.id}`}
            className="parchment-texture border-2 border-[#8c6d46]/70 rounded-2xl p-6 md:p-8 shadow-md relative"
          >
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#8c6d46]/30 pb-4 mb-6">
              <div>
                <span className="text-xs font-ui font-bold text-[#8c2d19] uppercase tracking-widest">
                  {item.halamanNomor} • {item.chapterTag}
                </span>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-[#3a2016]">
                  {item.spreadTitle}
                </h2>
              </div>
              <button
                onClick={() => {
                  const chunk = `### ${item.halamanNomor}: ${item.spreadTitle}\n\n(1) TEKS UTAMA:\n${item.teksUtama.judul}\n${item.teksUtama.subjudul}\n\n${item.teksUtama.paragraf.join("\n\n")}\n\n(2) INSTRUKSI CANVA:\n- Layout: ${item.instruksiCanva.rekomendasiLayout}\n- Elemen: ${item.instruksiCanva.kataKunciElemenCanva.join(", ")}\n- Detail: ${item.instruksiCanva.instruksiVisualDetail}\n- Tipografi: ${item.instruksiCanva.tipTipografi}\n\n(3) INTERAKTIF:\n- ${item.interaktif.namaFitur} [${item.interaktif.teksTombol}]`;
                  handleCopyText(chunk, `page_${item.id}`);
                }}
                className="px-3 py-1.5 border border-[#8c6d46] hover:bg-[#8c6d46]/10 text-[#4a3424] rounded-lg font-ui text-xs font-medium flex items-center gap-1.5 transition-colors self-start sm:self-auto"
              >
                {copiedSection === `page_${item.id}` ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Disalin
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Salin Halaman Ini
                  </>
                )}
              </button>
            </div>

            {/* Three Pillars Layout: (1) Teks Utama, (2) Instruksi Canva, (3) Tombol Interaktif */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* (1) TEKS UTAMA (6 cols) */}
              <div className="lg:col-span-6 bg-[#f7efe3] p-5 rounded-xl border border-[#d6c4aa] shadow-inner space-y-3">
                <div className="flex items-center gap-2 border-b border-[#d6c4aa] pb-2">
                  <BookOpen className="w-4 h-4 text-[#8c2d19]" />
                  <h3 className="font-ui font-bold text-xs uppercase tracking-wider text-[#8c2d19]">
                    (1) Teks Utama Siswa
                  </h3>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base md:text-lg text-[#3d2417] leading-tight">
                    {item.teksUtama.judul}
                  </h4>
                  <p className="font-ui text-xs font-semibold text-[#7c5b46] mt-0.5 italic">
                    {item.teksUtama.subjudul}
                  </p>
                </div>
                <div className="space-y-2.5 font-body text-xs md:text-sm text-[#2f221a] leading-relaxed">
                  {item.teksUtama.paragraf.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {item.teksUtama.catatanJurnal && (
                  <div className="bg-[#ede1ca] p-3 rounded-lg border-l-3 border-[#b8860b] text-xs font-body italic text-[#4a3627]">
                    {item.teksUtama.catatanJurnal}
                  </div>
                )}
              </div>

              {/* (2) INSTRUKSI CANVA (3 cols) */}
              <div className="lg:col-span-3 bg-[#f2e7d5] p-5 rounded-xl border border-[#d6c4aa] shadow-inner space-y-3">
                <div className="flex items-center gap-2 border-b border-[#d6c4aa] pb-2">
                  <Palette className="w-4 h-4 text-[#b8860b]" />
                  <h3 className="font-ui font-bold text-xs uppercase tracking-wider text-[#7c5314]">
                    (2) Panduan Grafis Canva
                  </h3>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-ui font-bold text-[#7c5314] block">
                    Layout & Grid
                  </span>
                  <p className="font-ui text-xs text-[#3b2b20] leading-snug mt-0.5">
                    {item.instruksiCanva.rekomendasiLayout}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-ui font-bold text-[#7c5314] block mb-1">
                    Palet Warna Hex
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.instruksiCanva.paletWarna.map((color, cIdx) => (
                      <span 
                        key={cIdx} 
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white border border-[#cbb396]"
                        title={color.nama}
                      >
                        <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: color.hex }} />
                        {color.hex}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-ui font-bold text-[#7c5314] block mb-1">
                    Keywords Elemen Canva
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.instruksiCanva.kataKunciElemenCanva.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-ui bg-[#e5d6c0] px-2 py-0.5 rounded text-[#423126]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] font-ui text-[#423126] leading-relaxed bg-[#e8dac5] p-2.5 rounded-lg border border-[#cbb396]">
                  <strong>Detail Penempatan:</strong> {item.instruksiCanva.instruksiVisualDetail}
                </div>

                <div className="text-[10px] font-ui text-[#6e4d35]">
                  <strong>Tipografi:</strong> {item.instruksiCanva.tipTipografi}
                </div>
              </div>

              {/* (3) TEKS INTERAKTIF / POP-UP (3 cols) */}
              <div className="lg:col-span-3 bg-[#efe4d0] p-5 rounded-xl border border-[#d6c4aa] shadow-inner space-y-3">
                <div className="flex items-center gap-2 border-b border-[#d6c4aa] pb-2">
                  <MousePointer className="w-4 h-4 text-[#1b5e20]" />
                  <h3 className="font-ui font-bold text-xs uppercase tracking-wider text-[#1b5e20]">
                    (3) Tombol & Pop-Up
                  </h3>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-ui font-bold text-[#1b5e20] block">
                    Nama Komponen
                  </span>
                  <p className="font-ui text-xs font-semibold text-[#244227]">
                    {item.interaktif.namaFitur}
                  </p>
                </div>

                <div className="bg-[#e0edd8] p-2.5 rounded-lg border border-[#b4d6a7]">
                  <span className="text-[10px] font-ui font-bold text-[#1b5e20] uppercase block mb-1">
                    Label Tombol Interaktif:
                  </span>
                  <span className="text-xs font-ui font-bold text-[#0d3d13] block">
                    &ldquo;{item.interaktif.teksTombol}&rdquo;
                  </span>
                </div>

                <div className="text-xs font-body text-[#3a2c20] leading-relaxed max-h-48 overflow-y-auto bg-white/60 p-2.5 rounded border border-[#d6c4aa]">
                  {item.interaktif.tipe === 'poll_pemantik' && (
                    <div>
                      <p className="font-semibold text-[11px] mb-1">Teks Pertanyaan Pemantik CRT:</p>
                      <p className="italic text-[11px]">{item.interaktif.kontenPopUp.pertanyaan}</p>
                    </div>
                  )}

                  {item.interaktif.tipe === 'popup_biodata' && (
                    <div className="space-y-1">
                      <p className="font-semibold text-[11px]">3 Tokoh Pimpinan:</p>
                      {TOKOH_BPUPKI.map(t => (
                        <div key={t.id} className="text-[11px] border-b border-black/10 pb-1">
                          <strong>{t.nama}</strong>: {t.peran}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.interaktif.tipe === 'voice_record' && (
                    <div>
                      <p className="font-semibold text-[11px] mb-1">Teks Simulasi Rekaman Bung Karno:</p>
                      <p className="italic text-[10px] line-clamp-4">{item.interaktif.kontenPopUp.kutipanTeksPidato}</p>
                    </div>
                  )}

                  {item.interaktif.tipe === 'eastern_objection' && (
                    <div>
                      <p className="font-semibold text-[11px] mb-1">Dekripsi Keberatan Indonesia Timur:</p>
                      <p className="text-[10px] leading-snug">Menjelaskan aspirasi kesetaraan warga negara & menghindari perpecahan NKRI.</p>
                    </div>
                  )}

                  {item.interaktif.tipe === 'comparison_slider' && (
                    <div className="text-[11px] space-y-1">
                      <p><strong>Sebelum:</strong> 7 kata Piagam Jakarta</p>
                      <p><strong>Sesudah:</strong> Ketuhanan Yang Maha Esa</p>
                    </div>
                  )}

                  {item.interaktif.tipe === 'hots_quiz' && (
                    <div>
                      <p className="font-semibold text-[11px]">3 Soal Evaluasi HOTS:</p>
                      <p className="text-[10px]">C4 Analisis, C5 Evaluasi, C6 Pemecahan Masalah Kompromi.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
