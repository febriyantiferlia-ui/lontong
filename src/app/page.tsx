import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center">
      <Image
        src="/cantik.jpeg"
        alt="Foto Profil"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4 shadow-lg"
      />
      <h1 className="text-3xl font-bold">Hai Aku Liaa</h1>
      <p className="text-gray-600 mt-2">
       Di portfolio ini aku berbagi tentang diriku, keterampilan, dan project 
        yang sudah aku kerjakan. Semoga bisa jadi inspirasi dan motivasi juga!
      </p>
    </div>

  );
}
