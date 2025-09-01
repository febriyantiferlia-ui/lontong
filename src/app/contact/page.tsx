export default function Contact() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-pink-600">Contact Me</h1>
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <p className="text-gray-700 mb-2"> Email: febriyantiferlia@gmail.com</p>
        <p className="text-gray-700 mb-2"> WhatsApp: 0831-2935-1423</p>

        <p className="text-gray-700 mb-2">
           Instagram:{" "}
          <a
            href="https://www.instagram.com/ferliiaa_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            ferliiaa_
          </a>
        </p>

        <p className="text-gray-700">
           TikTok:{" "}
          <a
            href="https://www.tiktok.com/@f3rliaa?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            f3rliaa
          </a>
        </p>
      </div>
    </main>
  );
}
