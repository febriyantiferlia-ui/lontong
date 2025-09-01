export default function Contact() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Judul */}
      <h1 className="text-4xl font-extrabold mb-12 text-center text-pink-600 tracking-wide drop-shadow-sm">
        Contact <span className="text-gray-800">Me</span>
      </h1>

      {/* Card Kontak */}
      <div className="p-10 bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-lg space-y-6">
        <p className="text-gray-800 flex items-center text-lg">
           <span className="ml-3">Email: </span>
          <a
            href="mailto:febriyantiferlia@gmail.com"
            className="ml-2 text-pink-600 font-medium hover:underline"
          >
            febriyantiferlia@gmail.com
          </a>
        </p>

        <p className="text-gray-800 flex items-center text-lg">
           <span className="ml-3">WhatsApp: </span>
          <a
            href="https://wa.me/6283129351423"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-pink-600 font-medium hover:underline"
          >
            0831-2935-1423
          </a>
        </p>

        <p className="text-gray-800 flex items-center text-lg">
           <span className="ml-3">Instagram: </span>
          <a
            href="https://www.instagram.com/ferliiaa_/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-pink-600 font-medium hover:underline"
          >
            @ferliiaa_
          </a>
        </p>

        <p className="text-gray-800 flex items-center text-lg">
           <span className="ml-3">TikTok: </span>
          <a
            href="https://www.tiktok.com/@f3rliaa?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-pink-600 font-medium hover:underline"
          >
            @f3rliaa
          </a>
        </p>
      </div>
    </main>
  );
}