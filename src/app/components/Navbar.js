"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#D4B46E] via-[#E0C77E] to-[#D4B46E] text-black px-8 py-4 flex items-center justify-between border-b border-gray-200 fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center space-x-2">
        <Image 
          src="/LOGO-STORE-01.png" 
          alt="Logo Futboleros Store"
          width={70}
          height={70}
        />
        <span className="font-semibold text-lg tracking-tight text-black">Futboleros Store</span>
      </div>

      <div className="flex space-x-8 text-sm font-medium">
        <Link href="/" className="hover:text-gray-700 transition">Inicio</Link>
        <Link href="/productos" className="hover:text-gray-700 transition">Productos</Link>
        <Link href="/personalizar" className="hover:text-gray-700 transition">Personalizar</Link>
        <Link href="/contacto" className="hover:text-gray-700 transition">Contacto</Link>
      </div>
    </nav>
  );
}

