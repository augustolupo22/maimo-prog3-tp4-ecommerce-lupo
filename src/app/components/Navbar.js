"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-10 py-4 flex items-center justify-between border-b border-gray-800 fixed top-0 w-full z-50 shadow-lg">
      <div className="flex items-center space-x-3">
        <Image 
          src="/LOGO-STORE-01.png" 
          alt="Logo Futboleros Store"
          width={70}
          height={70}
        />
        <span className="text-xl font-bold tracking-widest text-yellow-500 uppercase">
          Futboleros Store
        </span>
      </div>

      <div className="flex space-x-8 text-sm font-semibold uppercase">
        <Link href="/" className="hover:text-yellow-500 transition">Inicio</Link>
        <Link href="/productos" className="hover:text-yellow-500 transition">Productos</Link>
        <Link href="/personalizar" className="hover:text-yellow-500 transition">Personalizar</Link>
        <Link href="/contacto" className="hover:text-yellow-500 transition">Contacto</Link>
      </div>
    </nav>
  );
}

