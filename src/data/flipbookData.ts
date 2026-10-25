export interface TokohBio {
  id: string;
  nama: string;
  gelar: string;
  peran: string;
  asalKarakter: string;
  kutipanFokus: string;
  biodataSingkat: string;
  faktaMenarik: string;
}

export interface GagasanTokoh {
  tokoh: string;
  tanggal: string;
  sebutan: string;
  poinGagasan: string[];
  kataKunciFilosofis: string;
  analisisInti: string;
}

export interface QuizQuestion {
  id: number;
  pertanyaan: string;
  pilihan: { key: string; teks: string }[];
  kunci: string;
  levelKognitif: string;
  pembahasan: string;
  refleksiKarakter: string;
}

export interface PageContent {
  id: number;
  spreadTitle: string;
  chapterTag: string;
  halamanNomor: string;
  teksUtama: {
    judul: string;
    subjudul: string;
    paragraf: string[];
    catatanJurnal?: string;
  };
  instruksiCanva: {
    rekomendasiLayout: string;
    paletWarna: { nama: string; hex: string }[];
    kataKunciElemenCanva: string[];
    instruksiVisualDetail: string;
    tipTipografi: string;
  };
  interaktif: {
    namaFitur: string;
    tipe: 'poll_pemantik' | 'popup_biodata' | 'voice_record' | 'eastern_objection' | 'comparison_slider' | 'hots_quiz';
    teksTombol: string;
    kontenPopUp: any;
  };
}

export const METADATA_PEMBELAJARAN = {
  fase: "Fase E (Kelas 10 SMA/MA/SMK)",
  mataPelajaran: "Pendidikan Pancasila",
  elemen: "Pancasila",
  babUnit: "Bab 1: Menjiwai Pancasila | Unit 1: Sejarah Perumusan Pancasila oleh BPUPKI dan PPKI",
  dimensiProfilPelajar: [
    "Bernalar Kritis (menganalisis kompromi historis dan argumentasi para pendiri bangsa)",
    "Gotong Royong (meneladani musyawarah mufakat demi kemaslahatan bersama)",
    "Berkebhinekaan Global & Nasional (menghargai kemajemukan agama, suku, dan pandangan hidup)"
  ],
  pendekatan: "Culturally Responsive Teaching (CRT) & Inquiry-Based Discovery",
  temaVisual: "Jurnal Penjelajah: Menelusuri Jejak Lahirnya Pancasila (Aesthetic Field Journal / Vintage Archival Notebook)"
};

export const TOKOH_BPUPKI: TokohBio[] = [
  {
    id: "radjiman",
    nama: "dr. K.R.T. Radjiman Wedyodiningrat",
    gelar: "Ketua BPUPKI (Dokuritsu Zyunbi Tyoosakai)",
    peran: "Pemimpin Sidang yang Bijak & Pelempar Pertanyaan Fondasional",
    asalKarakter: "Yogyakarta (Dokter Keraton Surakarta, Tokoh Boedi Oetomo)",
    kutipanFokus: "Negara yang akan kita bentuk ini, apakah dasarnya?",
    biodataSingkat: "Lahir di Yogyakarta pada 21 April 1879. Beliau adalah salah satu dokter pribumi pertama lulusan STOVIA dan Universitas Amsterdam. Diangkat memimpin 67 anggota BPUPKI karena wibawa, kebijaksanaan, dan integritas intelektualnya. Pertanyaan pemantik filosofis yang ia lontarkan pada 29 Mei 1945 menggerakkan diskursus intelektual terhebat dalam sejarah modern Indonesia: merumuskan weltanschauung (pandangan hidup bersama).",
    faktaMenarik: "Sebagai dokter yang juga budayawan keraton, dr. Radjiman memimpin sidang dengan ketenangan luar biasa di tengah desakan tentara pendudukan Jepang yang tegang dan terdesak oleh Sekutu."
  },
  {
    id: "soeroso",
    nama: "Raden Pandji Soeroso",
    gelar: "Ketua Muda / Wakil Ketua BPUPKI (Perwakilan Indonesia)",
    peran: "Administrator Ulung, Negosiator, & Kepala Kantor Tata Usaha Sidang",
    asalKarakter: "Porong, Sidoarjo, Jawa Timur (Pamrih Perjuangan Serikat Pegawai Pegadaian & Volksraad)",
    kutipanFokus: "Ketertiban risalah dan kelancaran perundingan adalah separuh dari kemenangan diplomasi bangsa.",
    biodataSingkat: "Lahir pada 3 November 1893. Raden Pandji Soeroso adalah organisator birokrasi yang sangat piawai dan mantan anggota Volksraad yang vokal memperjuangkan nasib kaum buruh dan pribumi. Di BPUPKI, ia bertindak sebagai jembatan operasional, memastikan notula, transkrip sidang, dan seluruh risalah perdebatan terdokumentasi dengan rapi dan akurat.",
    faktaMenarik: "Julukannya di kalangan pejuang adalah 'Kakek Penengah' karena kepiawaiannya meredakan perdebatan sengit antar-faksi politik sebelum berujung kebuntuan."
  },
  {
    id: "ichibangase",
    nama: "Ichibangase Yosio",
    gelar: "Wakil Ketua BPUPKI (Perwakilan Militer Pendudukan Jepang)",
    peran: "Pengawas Representatif Pemerintahan Militer Angkatan Darat ke-16 Jepang",
    asalKarakter: "Jepang (Diplomat & Pejabat Administrasi Militer Gunseikanbu)",
    kutipanFokus: "Pemerintah Militer memperhatikan dengan seksama aspirasi bangsa Indonesia bagi masa depan Asia Timur Raya.",
    biodataSingkat: "Pejabat sipil-militer Jepang yang ditunjuk untuk mendampingi kepemimpinan BPUPKI bersama RP Soeroso. Keberadaannya mencerminkan realitas politis bahwa badan ini dibentuk di bawah pengawasan kekuasaan militer Jepang. Kendati bertindak sebagai mata dan telinga penguasa militer, pergerakan BPUPKI perlahan melampaui kepentingan propaganda Jepang menuju kemerdekaan murni Indonesia.",
    faktaMenarik: "Meskipun memiliki hak duduk di meja pimpinan terdepan, Ichibangase tidak banyak mengintervensi substansi musyawarah batin para tokoh Indonesia dalam merumuskan dasar moral bangsa."
  }
];

export const TIGA_GAGASAN_TOKOH: GagasanTokoh[] = [
  {
    tokoh: "Mr. Mohammad Yamin",
    tanggal: "29 Mei 1945",
    sebutan: "Usulan Lisan & Usulan Tertulis",
    poinGagasan: [
      "1. Peri Kebangsaan",
      "2. Peri Kemanusiaan",
      "3. Peri Ketuhanan",
      "4. Peri Kerakyatan (Permusyawaratan, Perwakilan, Kebijaksanaan)",
      "5. Kesejahteraan Rakyat (Keadilan Sosial)"
    ],
    kataKunciFilosofis: "Akar Sejarah & Keadaban Nusantara",
    analisisInti: "Yamin menggali nilai-nilai peradaban nusantara kuno seperti kejayaan Sriwijaya dan Majapahit, menekankan bahwa kemerdekaan Indonesia bukan meniru bangsa Barat, melainkan menghidupkan kembali marwah kebangsaan yang berbudi pekerti luhur."
  },
  {
    tokoh: "Prof. Dr. Soepomo",
    tanggal: "31 Mei 1945",
    sebutan: "Teori Negara Integralistik (Persatuan Total)",
    poinGagasan: [
      "1. Persatuan (Integralistik / Kebersamaan)",
      "2. Kekeluargaan",
      "3. Keseimbangan Lahir dan Batin",
      "4. Musyawarah",
      "5. Keadilan Rakyat"
    ],
    kataKunciFilosofis: "Manunggalnya Pemimpin dan Rakyat (Kekeluargaan)",
    analisisInti: "Soepomo menolak paham individualisme liberal barat maupun teori kelas Marxisme. Ia mengusulkan negara integralistik di mana negara tidak membela golongan mayoritas maupun pemodal kaya, melainkan bersatu padu laksana keluarga besar."
  },
  {
    tokoh: "Ir. Soekarno",
    tanggal: "1 Juni 1945",
    sebutan: "Pancasila: Weltanschauung & Philosophische Grondslag",
    poinGagasan: [
      "1. Kebangsaan Indonesia (Nasionalisme)",
      "2. Internasionalisme atau Peri-Kemanusiaan",
      "3. Mufakat atau Demokrasi",
      "4. Kesejahteraan Sosial",
      "5. Ketuhanan yang Berkebudayaan"
    ],
    kataKunciFilosofis: "Trisila & Ekasila (Gotong Royong Murni)",
    analisisInti: "Bung Karno menyampaikan pidato tanpa teks yang memukau. Beliau memperkenalkan istilah resmi 'Pancasila' atas saran ahli bahasa. Beliau juga memeras kelima sila menjadi Trisila (Sosio-nasionalisme, Sosio-demokrasi, Ketuhanan), lalu memerasnya lagi menjadi satu intisari agung: GOTONG ROYONG."
  }
];

export const DATA_HALAMAN_FLIPBOOK: PageContent[] = [
  {
    id: 1,
    spreadTitle: "Prolog & Pemantik: Saat Gotong Royong Mengalir di Sekitar Kita",
    chapterTag: "Bagian I: Fondasi Kesadaran",
    halamanNomor: "Halaman 1-2",
    teksUtama: {
      judul: "Dari Balai Warga ke Balai Bangsa: Jejak Musyawarah yang Menghidupkan",
      subjudul: "Mengapa para pendiri bangsa kita memilih berembuk ketimbang saling memaksakan kehendak?",
      paragraf: [
        "Pernahkah kalian melihat kampung atau lingkungan tempat tinggalmu dilanda banjir musiman luapan sungai? Air meninggi hingga pinggang, saluran air tersumbat sampah ranting, dan perahu karet darurat mulai disiapkan.",
        "Di tengah situasi genting itu, apa yang terjadi di posko atau balai RT? Apakah warga saling menyalahkan asal suku atau agamanya? Tidak! Para pemuda spontan bahu-membahu mengevakuasi balita dan lansia. Kaum ibu meracik dapur umum mengepulkan nasi hangat. Tokoh lingkungan berkumpul di teras surau merancang jalur sodetan air darurat. Tiap orang menanggalkan kepentingan pribadinya demi satu tujuan bersama: menyelamatkan keselamatan warga satu kampung.",
        "Nah, sahabat penjelajah, suasana batin yang persis seperti itulah yang menyelimuti Gedung Chuo Sangi In pada pertengahan tahun 1945! Saat itu, 'banjir bandang' Perang Dunia II dan keruntuhan fasisme militer Jepang tengah melanda tanah air. Enam puluh tujuh putra-putri terbaik dari Sabang sampai Merauke berkumpul bukan untuk berdebat mencari siapa yang paling berkuasa, melainkan duduk bersama dalam satu meja musyawarah agung: mencari perahu keselamatan bernama Indonesia Merdeka."
      ],
      catatanJurnal: "Kutipan Jurnal: 'Pancasila lahir bukan di ruang kuliah ber-AC, melainkan di kancah gotong royong anak negeri yang rela berpeluh keringat mengikis ego demi payung rumah bersama.'"
    },
    instruksiCanva: {
      rekomendasiLayout: "Two-page editorial spread: Halaman kiri berisi ilustrasi montase split warga gotong royong banjir kampung bersanding dengan foto arsip meja sidang BPUPKI. Halaman kanan teks narasi bergaya lembar jurnal petualang dengan ornamen kompas dan stempel cap tinta.",
      paletWarna: [
        { nama: "Parchment Tan", hex: "#F5EFEB" },
        { nama: "Sepia Ink", hex: "#3B2F2F" },
        { nama: "Vintage Brick Red", hex: "#8B3A2B" },
        { nama: "Antique Gold", hex: "#C59B27" }
      ],
      kataKunciElemenCanva: [
        "vintage journal aesthetic",
        "parchment paper texture background",
        "antique compass sketch",
        "ink stamp frame",
        "indonesian gotong royong community illustration"
      ],
      instruksiVisualDetail: "Gunakan latar belakang kertas vintage bertekstur lecek lembut (#F5EFEB). Berikan bingkai garis dobel tinta cokelat sepia tipis. Di sudut kanan atas letakkan stempel berlabel 'DOKUMEN PENJELAJAH KELAS X - CRT EXPLORATION'. Sisipkan sticky note warna krem dengan tulisan tangan font Caveat.",
      tipTipografi: "Judul gunakan Serif antik klasik (Cinzel / Playfair Display, 24pt, bold, warna #3B2F2F). Body text gunakan Serif bacaan hangat (Lora, 12pt, line-height 1.6). Catatan kaki gunakan font tulisan tangan vintage (Caveat / Beth Ellen, 14pt, warna #8B3A2B)."
    },
    interaktif: {
      namaFitur: "Pertanyaan Pemantik Interaktif (CRT Dilemma)",
      tipe: "poll_pemantik",
      teksTombol: "Buka Tantangan Pemantik Musyawarah",
      kontenPopUp: {
        pertanyaan: "Bayangkan lingkungan RT-mu dilanda banjir bandang. Dana kas warga sangat terbatas. Ada 3 usulan yang sama-sama ngotot: (A) Membeli pompa air mesin, (B) Membagikan sembako instan ke seluruh korban, (C) Memperbaiki tanggul jebol dengan karung pasir gotong royong. Jika kamu adalah ketua panitia remaja, langkah musyawarah apa yang paling mencerminkan jiwa Pancasila?",
        opsi: [
          { id: "opt_1", teks: "Memilih usulan C (tanggul gotong royong) melalui musyawarah mufakat, karena memadukan pencegahan jangka panjang dengan kerja sama fisik seluruh warga secara berkeadilan.", nilai: "Karakter: Musyawarah Mufakat & Gotong Royong Berkelanjutan" },
          { id: "opt_2", teks: "Melakukan voting kilat agar cepat selesai tanpa perlu mendengarkan warga sepuh yang berpendapat lain.", nilai: "Karakter: Kurang Mengakomodasi Kebijaksanaan Kolektif" },
          { id: "opt_3", teks: "Mendahulukan usulan warga yang paling kaya karena mereka yang menyumbang kas terbanyak.", nilai: "Karakter: Bertentangan dengan Sila Keadilan Sosial bagi Seluruh Rakyat" }
        ],
        umpanBalikCRT: "Luar biasa! Musyawarah para pendiri bangsa di BPUPKI mengajarkan bahwa kompromi terbaik bukanlah kemenangan suara terbanyak yang menindas suara sedikit, melainkan kearifan mencari titik temu yang menyelamatkan seluruh penumpang perahu kebangsaan!"
      }
    }
  },
  {
    id: 2,
    spreadTitle: "Pembentukan BPUPKI: Menjawab Panggilan dr. Radjiman",
    chapterTag: "Bagian II: Meja Sidang Pejambon",
    halamanNomor: "Halaman 3-4",
    teksUtama: {
      judul: "Fajar di Pejambon: Ketika Pertanyaan Mengguncang Sejarah",
      subjudul: "Kronik Pembentukan Dokuritsu Zyunbi Tyoosakai (Maret - Mei 1945)",
      paragraf: [
        "Maret 1945, matahari kemaharajaan Jepang mulai meredup di Pasifik. Kota-kota mereka dibom, armada laut mereka lumpuh. Di Jawa, Panglima Tentara ke-16 Letnan Jenderal Kumakichi Harada mengumumkan pembentukan sebuah badan penyelidik usaha kemerdekaan pada 1 Maret 1945. Tapi jangan salah sangka: para tokoh bangsa kita tidak menjadikannya sekadar panggung boneka!",
        "Tepat pada 29 April 1945, badan tersebut resmi beranggotakan 67 orang (60 tokoh pergerakan Indonesia dan 7 orang pengamat dari Jepang). Mereka dilantik secara khidmat pada 28 Mei 1945 di Gedung Chuo Sangi In (kini Gedung Pancasila, Jalan Pejambon No. 6 Jakarta Pusat).",
        "Keesokan paginya, 29 Mei 1945, palu sidang diketuk. Sosok pria berbusana beskap keraton dengan jenggot putih rapi dan kacamata bulat berdiri memandang seluruh hadirin. Dialah dr. K.R.T. Radjiman Wedyodiningrat. Dengan suara berat dan tenang, ia melontarkan satu pertanyaan yang menghentak dada para hadirin:",
        "'Tuan-tuan yang terhormat! Kita berkumpul di sini untuk menyusun kemerdekaan Indonesia. Tetapi, di atas fondasi dan dasar apakah negara yang akan kita dirikan ini harus berdiri?' Pertanyaan sederhana ini menjadi picu lahirnya api filsafat dasar negara kita."
      ],
      catatanJurnal: "Timeline Penjelajah: 1 Maret (Pengumuman Harada) -> 29 April (Penetapan Pengurus) -> 28 Mei (Upacara Pelantikan & Pengibaran Merah Putih berdampingan Hinomaru) -> 29 Mei-1 Juni (Sidang Pertama: Lahirnya Pancasila)."
    },
    instruksiCanva: {
      rekomendasiLayout: "Infografis linimasa horizontal berbentuk pita kertas gulung kuno (parchment ribbon) yang menghubungkan tanggal-tanggal kunci dari Maret hingga Juni 1945. Di bagian bawah terdapat 3 kartu profil tokoh bergaya amplop pos udara vintage.",
      paletWarna: [
        { nama: "Aged Manila", hex: "#EADDC6" },
        { nama: "Prussian Navy Blue", hex: "#1D2D44" },
        { nama: "Charcoal Black", hex: "#222222" },
        { nama: "Seal Wax Red", hex: "#9E2A2B" }
      ],
      kataKunciElemenCanva: [
        "vintage scroll timeline",
        "postage stamp vintage portrait",
        "1940s typewriter font",
        "aged document wax seal",
        "colonial building sketch"
      ],
      instruksiVisualDetail: "Sisipkan gambar arsip Gedung Pancasila Pejambon dengan efek halftone koran tempo doeloe. Letakkan 3 ikon stempel pos bergambar wajah siluet dr. Radjiman, RP Soeroso, dan Ichibangase Yosio. Saat didesain di Canva, tambahkan stiker 'Tap to Inspect Dossier' dengan panah pensil sketsa.",
      tipTipografi: "Teks linimasa gunakan Special Elite atau Courier Prime (11pt) untuk mensimulasikan ketikan mesin tik Underwood era 1940-an."
    },
    interaktif: {
      namaFitur: "Berkas Rahasia Tokoh (Pop-up Dossier Biodata)",
      tipe: "popup_biodata",
      teksTombol: "Buka Kartu Tokoh Pimpinan BPUPKI",
      kontenPopUp: TOKOH_BPUPKI
    }
  },
  {
    id: 3,
    spreadTitle: "Tiga Tokoh, Tiga Gagasan: Simfoni Pemikiran Dasar Negara",
    chapterTag: "Bagian III: Arena Intelektual",
    halamanNomor: "Halaman 5-6",
    teksUtama: {
      judul: "Pertarungan Gagasan di Meja Sidang Pertama (29 Mei – 1 Juni 1945)",
      subjudul: "Tiga Negarawan, Tiga Lensa Intelektual, Satu Cita-Cita Mulia",
      paragraf: [
        "Ruang sidang Chuo Sangi In terasa membara bukan hanya karena teriknya hawa Batavia tanpa kipas angin listrik, melainkan karena percikan ide-ide brilian yang saling bersahutan. Tiga tokoh utama tampil ke podium mengajukan rumusan konseptual mengenai dasar negara Indonesia merdeka.",
        "Pertama, Mr. Mohammad Yamin (29 Mei 1945). Sang sejarawan dan pujangga ini berpidato menggelorakan peri kebangsaan dan kemanusiaan yang berakar pada peradaban luhur Sriwijaya dan Majapahit. Yamin menegaskan bahwa Indonesia tidak boleh menjadi fotokopi negara barat, melainkan harus berpijak pada watak asli peradaban Timur.",
        "Kedua, Prof. Dr. Soepomo (31 Mei 1945). Sang begawan hukum adat ini mengemukakan konsep 'Negara Integralistik'. Bagi Soepomo, negara bukanlah kesepakatan dagang antara individu-individu yang saling bersaing, melainkan satu kesatuan organis tubuh: layaknya keluarga batin di mana pemimpin dan rakyat manunggal tanpa sekat pertentangan kelas.",
        "Puncaknya, 1 Juni 1945: Ir. Soekarno melangkah mantap. Dengan vokal menggelegar dan gestur tangan yang menghipnotis seluruh ruangan, ia mengajukan 'Philosophische Grondslag' yang dinamainya PANCASILA. Ia membuktikan bahwa lima mutiara sila tersebut dapat diperas menjadi Trisila, lalu diringkas menjadi Ekasila: GOTONG ROYONG!"
      ],
      catatanJurnal: "Perbandingan Cepat: Yamin menekankan akar historis keadaban Nusantara; Soepomo menekankan ikatan batin kekeluargaan integralistik; Soekarno memadukan filsafat dunia dengan jiwa asli gotong royong."
    },
    instruksiCanva: {
      rekomendasiLayout: "Tiga kolom triptych bergaya kartu catatan lapangan (field cards) berjajar dengan sudut kertas terlipat. Di atas kolom Soekarno, sematkan ikon mikrofon radio vintage 1940-an dengan gelombang suara emas.",
      paletWarna: [
        { nama: "Mahogany Wood", hex: "#4A2E18" },
        { nama: "Antique Cream", hex: "#FFF9EB" },
        { nama: "Brass Gold", hex: "#D4AF37" },
        { nama: "Muted Forest", hex: "#2D5A27" }
      ],
      kataKunciElemenCanva: [
        "vintage radio microphone",
        "audio waveform antique gold",
        "old parchment index cards",
        "vintage ink pen quill",
        "indonesian founding fathers sketch"
      ],
      instruksiVisualDetail: "Berikan efek emboss pada judul 'PANCASILA 1 JUNI 1945'. Di samping foto sketsa Bung Karno, letakkan tombol stiker berupa pita kaset rekaman antik berlabel 'Voice Record: Dengarkan Suara Pidato 1 Juni 1945'.",
      tipTipografi: "Header kolom gunakan font Oswald atau Playfair Display Bold (16pt), isi poin-poin gunakan font serif bersih seperti Lora Regular (11pt)."
    },
    interaktif: {
      namaFitur: "Simulasi Voice Record Pidato Bung Karno (1 Juni 1945)",
      tipe: "voice_record",
      teksTombol: "Putar Rekaman Suara Pidato 1 Juni 1945",
      kontenPopUp: {
        judulRekaman: "Kutipan Pidato Lahirnya Pancasila - Ir. Soekarno (1 Juni 1945)",
        durasi: "00:45 (Simulasi Radio Batavia 1945)",
        kutipanTeksPidato: "Saudara-saudara! Apakah dasar negara kita? Prinsip-prinsip yang saya usulkan ini: Pertama, Kebangsaan Indonesia. Kedua, Internasionalisme atau Peri-Kemanusiaan. Ketiga, Mufakat atau Demokrasi. Keempat, Kesejahteraan Sosial. Kelima, Menyusun Indonesia Merdeka dengan bertaqwa kepada Tuhan Yang Maha Esa. Namanya bukan Panca Dharma, tetapi Pancasila! Sila artinya azas atau dasar, dan di atas kelima dasar itulah kita mendirikan negara Indonesia, kekal dan abadi! Jika kuperas yang lima menjadi tiga, dan yang tiga menjadi satu, maka dapatlah aku satu perkataan Indonesia yang tulen: GOTONG ROYONG!",
        analisisPancasila: "Pidato tanpa teks berdurasi lebih dari 1 jam ini disambut tepuk tangan bergemuruh berdiri (standing ovation) dari seluruh anggota sidang. Hari bersejarah 1 Juni inilah yang kini kita peringati abadi sebagai Hari Lahir Pancasila."
      }
    }
  },
  {
    id: 4,
    spreadTitle: "Panitia Sembilan & Ketegangan: Ujian Pertama Kesepakatan",
    chapterTag: "Bagian IV: Titik Temu Piagam",
    halamanNomor: "Halaman 7-8",
    teksUtama: {
      judul: "Piagam Jakarta dan Tujuh Kata yang Menentukan Nasib Bangsa",
      subjudul: "Masa Reses, Diplomasi Kamar Sempit, dan Kompromi Bersejarah 22 Juni 1945",
      paragraf: [
        "Sidang pertama BPUPKI usai pada 1 Juni, namun rumusan final dasar negara belum tuntas. Pada masa reses, dibentuklah Panitia Sembilan yang bertugas menjembatani jurang pemikiran antara dua kubu besar: Golongan Kebangsaan (Nasionalis Netral Agama) dan Golongan Islam.",
        "Sembilan tokoh ini adalah: Soekarno (Ketua), Mohammad Hatta, Mohammad Yamin, A.A. Maramis, Achmad Soebardjo (Golongan Kebangsaan) berhadapan mesra dengan Abikoesno Tjokrosoejoso, H. Agus Salim, K.H. Abdul Wahid Hasyim, dan Mr. Abdoel Kahar Moezakir (Golongan Islam).",
        "Pada 22 Juni 1945 di Pegangsaan Timur 56 Jakarta, mereka melahirkan naskah 'Mukaddimah' (yang oleh Yamin dinamai 'Piagam Jakarta' atau Jakarta Charter). Namun di dalamnya termaktub klausul sila pertama yang kelak memicu ketegangan hebat: 'Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya'.",
        "Mengapa tujuh kata itu menjadi sorotan tajam? Bagi golongan Islam, kalimat itu adalah perlindungan moral dan pengakuan atas perjuangan berabad-abad umat mayoritas. Namun bagi saudara-saudara kita di wilayah Indonesia Timur yang mayoritas beragama Kristen, Katolik, dan kepercayaan lokal, tujuh kata tersebut dipandang berpotensi menciptakan warga negara kelas dua dalam rumah bersama Indonesia."
      ],
      catatanJurnal: "Kunci Berpikir Kritis: Demokrasi sejati bukan tirani mayoritas atau anarki minoritas, melainkan kesediaan saling merangkul dalam kesetaraan martabat kemanusiaan."
    },
    instruksiCanva: {
      rekomendasiLayout: "Desain amplop dokumen diplomatik setengah terbuka dengan naskah ketikan Piagam Jakarta berstempel 'MUKADDIMAH 22 JUNI 1945'. Tujuh kata kontroversial diberi stabilo tinta merah transparan dengan tanda panah catatan kaki interaktif.",
      paletWarna: [
        { nama: "Document Beige", hex: "#F3EDE2" },
        { nama: "Crimson Red (Highlight)", hex: "#C1121F" },
        { nama: "Worn Navy", hex: "#1F2937" },
        { nama: "Amber Glow", hex: "#D97706" }
      ],
      kataKunciElemenCanva: [
        "vintage typewriter manuscript",
        "highlight pen effect marker red",
        "magnifying glass looking at text",
        "indonesia archipelago map antique",
        "diplomatic seal envelope"
      ],
      instruksiVisualDetail: "Letakkan peta kepulauan Indonesia timur (Maluku, Papua, NTT, Sulawesi) dengan sorotan rona hangat. Arahkan kaca pembesar virtual (magnifying glass vector) ke teks tujuh kata dengan stiker bertuliskan 'Klik untuk Menguak Keberatan Indonesia Timur'.",
      tipTipografi: "Teks Piagam gunakan gaya font teletype (Courier Prime / Special Elite, 12pt). Tujuh kata sengaja diberi aksen garis bawah merah dan huruf miring tebal."
    },
    interaktif: {
      namaFitur: "Dekripsi Dokumen: Mengapa Indonesia Timur Berkeberatan?",
      tipe: "eastern_objection",
      teksTombol: "Buka Arsip: Suara Keberatan Indonesia Timur",
      kontenPopUp: {
        judul: "Kawat Diplomatik Pukul 17.00: Sikap Tegas Tokoh Indonesia Timur",
        narasumber: "Opsir Kaigun (Angkatan Laut Jepang) menyampaikan pesan para pemimpin Kristen/Katolik Indonesia Timur kepada Bung Hatta",
        alasanUtama: [
          "1. Ancaman Perpecahan Wilayah: Jika dasar negara memuat syariat bagi satu agama tertentu saja, maka saudara-saudara di Indonesia Timur (Sulawesi, Maluku, Nusa Tenggara, Papua) merasa terdiskriminasi dan berpotensi memilih berdiri di luar Republik Indonesia.",
          "2. Asas Persatuan Rumah Bersama: Para tokoh Kristen seperti Mr. A.A. Maramis dan J. Latuharhary menegaskan bahwa kemerdekaan Indonesia ditebus dengan tumpah darah seluruh anak bangsa lintas iman.",
          "3. Jiwa Kebangsaan Non-Diskriminatif: Menempatkan hukum keagamaan tertentu dalam konstitusi dasar berisiko mengaburkan kedudukan hukum setiap warga negara di hadapan undang-undang dasar."
        ],
        refleksiHatta: "Hatta menulis dalam memoarnya: 'Jika Indonesia pecah menjadi negara-negara bagian kecil karena fanatisme kata-kata, maka impian Indonesia Merdeka yang berdaulat akan lenyap ditelan imperialisme kembali.'"
      }
    }
  },
  {
    id: 5,
    spreadTitle: "PPKI & Keputusan Emas: Kemenangan Akal Budi dan Toleransi",
    chapterTag: "Bagian V: 15 Menit yang Menyelamatkan RI",
    halamanNomor: "Halaman 9-10",
    teksUtama: {
      judul: "18 Agustus 1945: Diplomasi Fajar dan Kebijaksanaan Hati",
      subjudul: "Ketika Ego Ditanggalkan Demi Abadinya Republik Indonesia",
      paragraf: [
        "Hanya sehari setelah Proklamasi Kemerdekaan 17 Agustus 1945 berkumandang, Republik yang baru berumur jagung ini langsung menghadapi ujian eksistensial paling genting. Pada pagi buta 18 Agustus 1945, sebelum sidang Panitia Persiapan Kemerdekaan Indonesia (PPKI) dibuka, Bung Hatta mengambil inisiatif diplomasi paling legendaris.",
        "Hatta mendatangi empat tokoh Islam terkemuka yang memiliki wibawa luar biasa: Ki Bagus Hadikusumo, K.H. Wahid Hasyim, Mr. Kasman Singodimedjo, dan Teuku Mohammad Hasan. Di sebuah ruangan kecil di Pejambon, selama kurang lebih 15 menit, pembicaraan dari hati ke hati berlangsung tegang namun penuh ketulusan.",
        "Hatta memaparkan kenyataan pahit: saudara-saudara kita di timur merasa berat hati dan berniat memisahkan diri jika tujuh kata tersebut tetap dipertahankan. Ki Bagus Hadikusumo, tokoh Muhammadiyah yang kukuh, awalnya terdiam berat. Namun, setelah Kasman Singodimedjo membujuk dengan penuh keharuan demi persatuan umat dan tanah air, kebesaran jiwa itu pun bersinar.",
        "Para tokoh Islam bersepakat mengganti tujuh kata kontroversial tersebut menjadi kalimat yang sangat agung, universal, dan berpuncak pada tauhid yang merangkul: 'KETUHANAN YANG MAHA ESA'. Sebuah keputusan emas yang membuktikan bahwa para pendiri bangsa kita adalah negarawan sejati yang rela mengalahkan ego demi keutuhan tanah air tercinta!"
      ],
      catatanJurnal: "Refleksi Penjelajah: Kompromi para tokoh Islam pada 18 Agustus 1945 bukanlah kekalahan, melainkan pengorbanan suci termulia bagi tegaknya Negara Kesatuan Republik Indonesia."
    },
    instruksiCanva: {
      rekomendasiLayout: "Desain komparasi visual interaktif 'Sebelum vs Sesudah' menyerupai dua papan kayu jati kuno berdampingan atau slider kaca perbandingan. Dilengkapi ornamen timbangan keadilan antik dan pita merah putih.",
      paletWarna: [
        { nama: "Antique Mahogany", hex: "#3A1F18" },
        { nama: "Ivory Canvas", hex: "#FCFBF7" },
        { nama: "Emerald Sage", hex: "#2A6F4E" },
        { nama: "Gold Crest", hex: "#D4AF37" }
      ],
      kataKunciElemenCanva: [
        "before after comparison slider card",
        "antique brass balance scale of justice",
        "indonesian flag red white vintage texture",
        "handshake agreement historic sketch",
        "gold foil medal laurel"
      ],
      instruksiVisualDetail: "Letakkan kartu slider perbandingan teks dengan handle drag geser kiri-kanan. Di sisi kiri tampilkan Piagam Jakarta (22 Juni 1945) bernuansa sepia kemerahan, di sisi kanan Pembukaan UUD 1945 (18 Agustus 1945) bernuansa emas kehijauan sejuk.",
      tipTipografi: "Teks bunyi sila pertama gunakan font Cinzel Serif besar (18pt, bold, warna emas tua #B8860B) untuk menandai sakralnya momen perubahan."
    },
    interaktif: {
      namaFitur: "Slider Interaktif Sebelum vs Sesudah (Piagam Jakarta vs UUD 1945)",
      tipe: "comparison_slider",
      teksTombol: "Bandingkan Teks Piagam Jakarta vs UUD 18 Agustus",
      kontenPopUp: {
        sebelum: {
          sumber: "Piagam Jakarta (Jakarta Charter) - 22 Juni 1945",
          teksSila: "Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya",
          implikasi: "Berasas klausul kewajiban teologis spesifik golongan agama mayoritas, berisiko memunculkan kesenjangan integrasi nasional dengan wilayah Indonesia Timur.",
          kataKunci: "7 Kata Kontroversial"
        },
        sesudah: {
          sumber: "Pembukaan UUD 1945 & Sila I Pancasila - 18 Agustus 1945",
          teksSila: "Ketuhanan Yang Maha Esa",
          implikasi: "Berasas monoteisme universal yang merangkul seluruh pemeluk agama resmi dan kepercayaan di Nusantara, menjamin keadilan batin dan kewarganegaraan setara tanpa diskriminasi.",
          kataKunci: "Keputusan Emas Persatuan"
        },
        maknaKompromi: "Dalam 15 menit diplomasi fajar, para pendiri bangsa berhasil menyelamatkan potensi bubarnya republik sebelum sempat berlayar. Inilah puncak teladan toleransi kebangsaan kita!"
      }
    }
  },
  {
    id: 6,
    spreadTitle: "Penutup & Uji Ekspedisi: Membawa Api Pancasila Hari Ini",
    chapterTag: "Bagian VI: Refleksi & Evaluasi HOTS",
    halamanNomor: "Halaman 11-12",
    teksUtama: {
      judul: "Menjaga Nyala Perahu Kebangsaan: Giliran Generasimu Melangkah!",
      subjudul: "Ekspedisi Sejarah Selesai, Misi Pengamalan Dimulai",
      paragraf: [
        "Selamat, penjelajah muda! Kalian telah menapaki lorong waktu menyusuri ruang-ruang rapat berdebu di Gedung Pejambon 1945. Kalian telah menyaksikan bagaimana tajamnya silang pendapat, kerasnya perdebatan konseptual, namun pada akhirnya semua tunduk pada satu cinta agung: INDONESIA.",
        "Pancasila bukanlah naskah mati yang hanya dihafal saat upacara Senin pagi di lapangan sekolah. Pancasila adalah kompas hidup! Ketika di media sosial kita tergoda merundung orang yang berbeda pendapat, ingatlah santunnya Bung Karno dan Soepomo saat berdebat. Ketika kita enggan mengalah dalam kerja kelompok atau kepanitiaan OSIS, kenanglah lapang dadanya Ki Bagus Hadikusumo dan para ulama yang merelakan tujuh kata demi tetap utuhnya Papua, Maluku, dan Sulawesi dalam pelukan Ibu Pertiwi.",
        "Kini, pena sejarah berada di jemarimu. Akankah kamu menjadi pribadi yang gemar menyalakan api perpecahan karena perbedaan kecil, ataukah menjadi perekat kerukunan yang siap bergotong royong membersihkan 'banjir persoalan' bangsa?",
        "Ujilah ketajaman analisis dan pemahaman sejarahmu melalui Kuis Evaluasi Tingkat Tinggi (HOTS) di bawah ini!"
      ],
      catatanJurnal: "Motto Penjelajah: 'Bukan abu sejarah yang kita warisi, melainkan nyala api pengorbanan dan kompromi luhur yang harus terus berkobar di dadamu.'"
    },
    instruksiCanva: {
      rekomendasiLayout: "Halaman kiri berisi sertifikat medali penjelajah dengan stempel cap lilin emas 'LULUS EKSPEDISI PANCASILA KELAS X'. Halaman kanan memuat antarmuka 3 kartu kuis pilihan ganda interaktif bergaya papan teka-teki telegram vintage.",
      paletWarna: [
        { nama: "Antique Gold", hex: "#C59B27" },
        { nama: "Deep Navy Seal", hex: "#0F1E36" },
        { nama: "Cream White", hex: "#FAF8F5" },
        { nama: "Emerald Badge", hex: "#1B5E20" }
      ],
      kataKunciElemenCanva: [
        "explorer certificate vintage gold border",
        "antique wax stamp completed",
        "quiz card UI elements 1940s",
        "garuda pancasila golden badge emblem",
        "celebration parchment ribbons"
      ],
      instruksiVisualDetail: "Sisipkan kartu sertifikat kelulusan penjelajah dengan kolom nama siswa yang dapat diisi. Berikan animasi partikel confetti atau stempel cap dinamis saat siswa berhasil menyelesaikan 3 soal kuis HOTS dengan baik.",
      tipTipografi: "Sertifikat gunakan font kaligrafi antik Cinzel Decorative / Great Vibes, untuk soal kuis gunakan Plus Jakarta Sans atau Lora dengan kontras tinggi."
    },
    interaktif: {
      namaFitur: "Kuis Pilihan Ganda Berstandar HOTS (3 Soal Analitis)",
      tipe: "hots_quiz",
      teksTombol: "Mulai Tantangan Kuis HOTS (3 Soal)",
      kontenPopUp: null
    }
  }
];

export const SOAL_KUIS_HOTS: QuizQuestion[] = [
  {
    id: 1,
    levelKognitif: "C4 - Analisis Kritis (Menghubungkan Fakta Historis dengan Dinamika Kebangsaan)",
    pertanyaan: "Pada 18 Agustus 1945 pagi, Bung Hatta melobi para tokoh Islam di PPKI untuk menghapus tujuh kata dalam Piagam Jakarta dan menggantinya menjadi 'Ketuhanan Yang Maha Esa'. Berdasarkan analisis konteks geopolitik saat itu, apa konsekuensi paling rasional dan fatal yang dapat terjadi apabila para tokoh Islam bersikeras mempertahankan tujuh kata tersebut?",
    pilihan: [
      { key: "A", teks: "Pemerintah militer Jepang akan kembali mengambil alih kekuasaan dan membatalkan status proklamasi kemerdekaan." },
      { key: "B", teks: "Terjadinya disintegrasi nasional karena wilayah Indonesia Timur berpotensi kuat memisahkan diri dari Republik Indonesia yang baru merdeka." },
      { key: "C", teks: "Sekutu akan menganggap Indonesia sebagai negara diktator militer dan menjatuhkan sanksi ekonomi total." },
      { key: "D", teks: "Ir. Soekarno akan mengundurkan diri dari jabatan Presiden dan menyerahkan kepemimpinan pada Sutan Sjahrir." }
    ],
    kunci: "B",
    pembahasan: "Kunci: B. Konsekuensi paling fatal adalah ancaman disintegrasi wilayah nasional. Keberatan yang disampaikan tokoh-tokoh Indonesia Timur (melalui opsir Kaigun) menegaskan bahwa mereka merasa tidak diperlakukan setara jika konstitusi dasar hanya mewajibkan syariat bagi satu agama tertentu. Jika faksi Islam bersikukuh mempertahankan 7 kata itu, perwakilan Indonesia Timur menyatakan lebih baik berdiri di luar Republik Indonesia. Mengalahnya tokoh Islam adalah penyelamat keutuhan wilayah Sabang sampai Merauke.",
    refleksiKarakter: "Bernalar Kritis & Wawasan Kebangsaan: Menyadarkan siswa bahwa keputusan para pendiri bangsa dilandasi pertimbangan keselamatan dan persatuan teritorial negara kesatuan, bukan egoisme sektarian."
  },
  {
    id: 2,
    levelKognitif: "C5 - Evaluasi Nilai (Membandingkan Prinsip Integralistik Soepomo dengan Realitas Demokrasi)",
    pertanyaan: "Dalam pidato 31 Mei 1945, Prof. Dr. Soepomo mengusulkan teori 'Negara Integralistik' yang menekankan bahwa negara tidak membela golongan mayoritas maupun minoritas, melainkan bersatu secara organis dengan seluruh rakyat laksana keluarga batin. Jika gagasan integralistik ini dievaluasi dalam konteks kehidupan sekolah masa kini, tindakan pengurus OSIS manakah yang paling mencerminkan esensi gagasan Soepomo tersebut?",
    pilihan: [
      { key: "A", teks: "Mengadakan kegiatan class meeting yang hanya mengikutsertakan siswa yang berprestasi akademik tinggi agar membawa nama baik sekolah." },
      { key: "B", teks: "Menetapkan kebijakan anggaran seragam baru dengan cara voting sepihak tanpa meminta masukan dari siswa yang kurang mampu." },
      { key: "C", teks: "Merancang program bakti sosial dan forum dengar pendapat yang merangkul seluruh aspirasi ekstrakurikuler tanpa mengistimewakan kelompok populer." },
      { key: "D", teks: "Membubarkan klub hobi yang anggotanya sedikit karena dianggap tidak memberikan kontribusi piala kompetisi." }
    ],
    kunci: "C",
    pembahasan: "Kunci: C. Inti negara integralistik Soepomo adalah paham kekeluargaan dan persatuan total, di mana seluruh elemen dipandang sebagai bagian tak terpisahkan dari satu tubuh. Pilihan C mencerminkan perlakuan adil dan inklusif di lingkungan sekolah, tanpa ada kelompok yang diistimewakan (mayoritas/populer) maupun disingkirkan (minoritas/marjinal).",
    refleksiKarakter: "Gotong Royong & Inklusivitas: Mengajarkan siswa bahwa kepemimpinan yang berjiwa Pancasila adalah kepemimpinan yang merangkul dan mengayomi seluruh bagian, bukan menindas yang kecil."
  },
  {
    id: 3,
    levelKognitif: "C6 - Kreasi & Pemecahan Masalah (Aplikasi Semangat Kompromi BPUPKI pada Konflik Siswa)",
    pertanyaan: "Di kelasmu terjadi perselisihan sengit mengenai tujuan destinasi studi tur kelulusan. Kelompok mayoritas siswa (60%) menginginkan pergi berlibur ke pantai resort mewah, sedangkan kelompok siswa (40%) yang berasal dari keluarga ekonomi menengah ke bawah merasa sangat keberatan karena beban biayanya memberatkan orang tua mereka. Mengadopsi keteladanan musyawarah dan kompromi luhur para pendiri bangsa di BPUPKI/PPKI, solusi paling berkeadaban manakah yang wajib ditempuh?",
    pilihan: [
      { key: "A", teks: "Melakukan voting terbuka mutlak, karena dalam prinsip demokrasi suara mayoritas 60% wajib ditaati sepenuhnya oleh pihak minoritas." },
      { key: "B", teks: "Membatalkan seluruh kegiatan studi tur dan melarang semua siswa bepergian agar tidak ada pihak yang merasa iri hati." },
      { key: "C", teks: "Membiarkan kelompok mayoritas berangkat sendiri ke resort, sementara kelompok minoritas tetap belajar di dalam kelas." },
      { key: "D", teks: "Bermusyawarah mencari destinasi alternatif edukatif yang terjangkau semua kalangan, dipadukan penggalangan dana kreatif atau subsidi silang sehingga semua teman dapat ikut tanpa beban." }
    ],
    kunci: "D",
    pembahasan: "Kunci: D. Pilihan D adalah pengejawantahan murni dari Sila ke-4 (Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan) dan Sila ke-5 (Keadilan sosial). Sebagaimana para pendiri bangsa yang rela mengorbankan redaksi 7 kata demi merangkul saudara di kawasan Timur, kelompok mayoritas siswa selayaknya tidak bertindak tiranis memaksakan kehendak mewah yang melukai saudara sekelasnya yang kurang mampu. Musyawarah mufakat sejati melahirkan solusi win-win dan gotong royong subsidi silang.",
    refleksiKarakter: "Profil Pelajar Pancasila: Menghidupkan kompromi historis menjadi keterampilan sosial praktis (social empathy & conflict resolution) dalam kehidupan harian remaja."
  }
];
