export default function Skills() {
  const skills = [
    { icon: "💻", text: "HTML, CSS, JavaScript" },
    { icon: "⚛", text: "React & Next.js" },
    { icon: "🛢", text: "MySQL Database" },
    { icon: "⚙️", text: "Node.js & Express" },
    { icon: "🎨", text: "UI/UX Design (Figma, Tailwind)" },
  ];

  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Judul Section */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-pink-600 tracking-wide drop-shadow-sm">
        My <span className="text-gray-800">Skills</span>
      </h1>

      {/* Grid Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center p-6 bg-gradient-to-br from-pink-50 via-white to-pink-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Ikon */}
            <span className="text-4xl mr-5">{skill.icon}</span>

            {/* Teks Skill */}
            <div>
              <p className="text-lg font-bold text-gray-900">{skill.text}</p>
              <p className="text-sm text-gray-500 mt-1">
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}