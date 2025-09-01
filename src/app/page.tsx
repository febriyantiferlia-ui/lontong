import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center">
      <Image
        src="/profile.jpg"
        alt="Foto Profil"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4 shadow-lg"
      />
      <h1 className="text-3xl font-bold">Halo, Saya Ferlia</h1>
      <p className="text-gray-600 mt-2">
        Mahasiswa yang sedang belajar Next.js untuk membuat portfolio.
      </p>
    </div>
  );
}

