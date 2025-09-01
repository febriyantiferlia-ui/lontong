const projects = [
  {
    name: "Portfolio Website",
    description: "Website portfolio menggunakan Next.js & Tailwind.",
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio-demo.vercel.app",
  },
  {
    name: "ToDo App",
    description: "Aplikasi sederhana untuk mencatat tugas harian.",
    github: "https://github.com/username/todo-app",
    demo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <div className="mt-2 flex gap-4">
              <a href={p.github} target="_blank" className="text-blue-500 underline">
                GitHub
              </a>
              <a href={p.demo} target="_blank" className="text-green-500 underline">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
