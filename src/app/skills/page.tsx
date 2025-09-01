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
      <h1 className="text-3xl font-bold mb-8 text-center text-pink-600">
        🚀 My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center p-5 bg-gradient-to-r from-pink-50 to-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <span className="text-3xl mr-4">{skill.icon}</span>
            <span className="text-gray-800 font-semibold text-lg">{skill.text}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
