"use client";

export default function ContactSection() {
  return (
    <section className="bg-black text-white mt-15 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">
          Contactanos
        </h1>
        <p className="text-gray-300 mb-10">
          Si tenés dudas sobre nuestros productos, pedidos o cualquier consulta,
          completá el formulario o escribinos directamente.
        </p>

        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black text-white focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Tu email"
              className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black text-white focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Escribí tu mensaje..."
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black text-white focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="mt-12 text-gray-400">
          <p>📍 Buenos Aires, Argentina</p>
          <p>📧 contacto@futbolerosstore.com</p>
          <p>📱 +54 9 11 2345-6789</p>
        </div>
      </div>
    </section>
  );
}
