"use client";
import Image from "next/image";

export default function SectionHeader({ titulo, fondo, textoSecundario }) {
  const fondoValido = fondo?.startsWith("/") ? fondo : "/images/fondo-hero.jpg";

  return (
    <section className="w-full ">
      <div
        className="bg-yellow-500 text-black flex flex-wrap justify-between items-center text-sm font-bold uppercase tracking-wide px-6 py-3 shadow-lg relative z-10"
        style={{
          backgroundImage: "url('/images/banner-textura.jpg')",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>Por tiempo limitado</p>
        <p>Envío gratis a todo el país</p>
        <p>A partir de $99.999</p>
        <p className="underline cursor-pointer hover:text-white transition">
          Aprovechá ahora
        </p>
      </div>

      <div className="relative h-[400px] overflow-hidden">
        <Image
          src={fondoValido}
          alt={titulo}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-[2] text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg uppercase tracking-wide">
            {titulo}
          </h1>
          {textoSecundario && (
            <p className="mt-3 text-gray-200 text-lg font-medium max-w-2xl">
              {textoSecundario}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

