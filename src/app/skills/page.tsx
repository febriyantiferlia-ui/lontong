export default function Skills() {
  const skills = [
    { icon: "💻", text: "HTML, CSS, JavaScript" },
    { icon: "⚛", text: "React & Next.js" },
    { icon: "🛢", text: "MySQL Database" },
  ];

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-pink-600">My Skills</h1>
      <div className="grid gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="ml-3 text-gray-700 font-medium">{skill.text}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
