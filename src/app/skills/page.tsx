export default function SkillsPage() {
  const skills = [
    { icon: "💻", text: "HTML, CSS, JavaScript" },
    { icon: "⚛️", text: "React & Next.js" },
    { icon: "🛢️", text: "MySQL Database" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <ul className="grid gap-4">
        {skills.map((s, i) => (
          <li key={i} className="flex items-center gap-2 p-3 border rounded-lg shadow">
            <span className="text-2xl">{s.icon}</span>
            <span>{s.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
