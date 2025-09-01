import Image from "next/image";

const projects = [
  {
    name: "Portfolio Website",
    description: "Website portfolio menggunakan Next.js & Tailwind.",
    image: "/keren.jpeg", 
  },
  {
    name: "ToDo App",
    description: "Aplikasi sederhana untuk mencatat tugas harian.",
    image: "/projects/todo.png", 
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
