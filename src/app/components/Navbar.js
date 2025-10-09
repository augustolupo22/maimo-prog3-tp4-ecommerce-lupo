"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

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

      <div className="flex space-x-8 text-sm font-semibold uppercase items-center">
        <Link href="/" className="hover:text-yellow-500 transition">
          Inicio
        </Link>
        <Link
          href="/nuestrosproductos"
          className="hover:text-yellow-500 transition"
        >
          Productos
        </Link>
        <Link href="/contact" className="hover:text-yellow-500 transition">
          Contacto
        </Link>

        <Link
          href="/carrito"
          className="relative hover:text-yellow-500 transition"
        >
          <ShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs font-bold rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
