import Image from "next/image";

const projects = [
  {
    name: "Jalan Sehat",
    description: "kegiatan olahraga ringan berupa berjalan kaki bersama-sama menempuh jarak tertentu dan ada doorprize atau hadiah undian untuk peserta ",
    image: "/keren.jpeg", 
  },
  {
    name: "Barikan",
    description: "tradisi kumpul warga untuk doa bersama,setiap orang bawa makanan dari rumah, lalu makanan itu dikumpulkan jadi satu, didoakan bersama, dan setelah itu dimakan bareng-bareng",
    image: "/barik.jpeg", 
  },
  {
    name: "Karnaval",
    description: "acara pawai atau arak-arakan di jalan yang biasanya menampilkan berbagai macam atraksi, seperti orang memakai kostum unik",
    image: "/karvil.jpeg", 
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-pink-600">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-4 border rounded-lg shadow bg-white hover:shadow-lg transition max-w-sm"
          >
            <Image
              src={p.image}
              alt={p.name}
              width={200}
              height={200}
              className="rounded-lg mb-3 object-cover w-full h-40"
            />
            <h2 className="text-xl font-semibold text-gray-800">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
