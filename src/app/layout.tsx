import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Saya",
  description: "Website portfolio dengan Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans bg-gray-50 text-gray-900">
        <nav className="bg-pink-500 text-white p-4 flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
