import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Judul Utama */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-pink-600 tracking-wide drop-shadow-sm">
        Tentang <span className="text-gray-800">Saya</span>
      </h1>

      {/* Foto Profil */}
      <div className="flex justify-center mb-8">
        <Image
          src="/wou.jpeg"
          alt="Foto Saya"
          width={260}
          height={260}
          className="rounded-full shadow-xl border-4 border-pink-200 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Biodata + Motivasi */}
      <div className="bg-gradient-to-br from-pink-100 via-pink-50 to-white rounded-3xl shadow-lg p-8 space-y-6">
        {/* Biodata */}
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-pink-300 inline-block pb-1">
          Biodata Lia
        </h2>
        <ul className="space-y-2 text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold text-pink-600">Nama:</span> Ferlia
            Febriyanti
          </li>
          <li>
            <span className="font-semibold text-pink-600">Jurusan:</span> RPL
            Rekayasa Perangkat Lunak
          </li>
          <li>
            <span className="font-semibold text-pink-600">Hobby:</span> Nonton
            Drakor
          </li>
          <li>
            <span className="font-semibold text-pink-600">Alamat:</span>{" "}
            Jl.Panji Suroso Utara
          </li>
        </ul>

        {/* Motivasi */}
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-pink-300 inline-block pb-1 mt-6">
          Motivasi Belajar Coding
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify italic">
          “Coding bagi saya bukan hanya tentang menulis baris-baris kode, tapi
          juga tentang bagaimana cara berpikir, memecahkan masalah, dan
          menuangkan ide menjadi karya nyata. Setiap error yang muncul justru
          jadi pelajaran, dan ketika berhasil menyelesaikannya ada rasa puas
          tersendiri.”
        </p>
      </div>
    </main>
  );
}