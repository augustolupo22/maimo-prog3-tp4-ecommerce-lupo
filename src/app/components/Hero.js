import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center">
      <Image
        src="/fondo-hero.jpg"
        alt="Hero Futbol"
        fill
        priority
        className="object-cover -z-5"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white max-w-2xl px-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Vive la pasión del fútbol con{" "}
          <span className="text-yellow-400">Futboleros Store</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Descubrí camisetas retro, ediciones limitadas y productos exclusivos
          para coleccionistas y fanáticos.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/nuestrosproductos">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
              Ver Productos
            </button>
          </Link>
          <Link href="/contact">
            <button className="border border-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
              Contáctanos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
