import Image from "next/image";

const projects = [
  {
    name: "Jalan Sehat",
    description:
      "Kegiatan olahraga ringan berupa berjalan kaki bersama-sama menempuh jarak tertentu, biasanya disertai doorprize atau hadiah undian untuk peserta.",
    image: "/keren.jpeg",
  },
  {
    name: "Barikan",
    description:
      "Tradisi kumpul warga untuk doa bersama. Setiap orang membawa makanan dari rumah, lalu dikumpulkan, didoakan, dan dimakan bersama-sama.",
    image: "/barik.jpeg",
  },
  {
    name: "Karnaval",
    description:
      "Acara pawai atau arak-arakan di jalan yang menampilkan berbagai macam atraksi, seperti orang memakai kostum unik.",
    image: "/karvil.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-pink-600 tracking-wide drop-shadow-sm">
        My <span className="text-gray-800">Projects</span>
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
          >
            {/* Foto lebih besar */}
            <Image
              src={p.image}
              alt={p.name}
              width={400}
              height={250}
              className="rounded-t-2xl object-cover w-full h-56"
            />

            {/* Konten */}
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-bold text-gray-900">{p.name}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}