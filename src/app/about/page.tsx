import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center">
        Tentang Saya
      </h1>

      {/* Foto Profil */}
      <div className="flex justify-center mb-6">
        <Image
          src="/wou.jpeg" // ganti dengan foto kamu di folder public
          alt="Foto Saya"
          width={180}
          height={180}
          className="rounded-full shadow-lg border-4 border-pink-200"
        />
      </div>

      {/* Biodata */}
      <div className="bg-pink-100 rounded-2xl shadow-md p-6 space-y-3">
        <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
           Biodata Lia
        </h2>
        <ul className="space-y-2 text-gray-800">
          <li> Nama: Ferlia Febriyanti</li>
          <li> Jurusan: RPL Rekayasa Perangkat Lunak</li>
          <li> Hobby: Nonton Drakor</li>
          <li> Alamat: Jl.Panji Suroso Utara</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
           Motivasi Belajar Coding
        </h2>
        <p className="text-gray-800">
          Coding bagi saya bukan hanya tentang menulis baris-baris kode, tapi juga tentang bagaimana cara berpikir, memecahkan masalah, dan menuangkan ide menjadi karya nyata. Setiap error yang muncul justru jadi pelajaran, dan ketika berhasil menyelesaikannya ada rasa puas tersendiri.{" "}
        </p>
      </div>
    </main>
  );
}
