"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContexts";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-black text-white px-10 py-4 flex items-center justify-between border-b border-gray-800 fixed top-0 w-full z-50 shadow-lg">
      <Link href="/">
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
      </Link>

      <div className="flex items-center space-x-6 text-sm font-semibold uppercase">
        <Link
          href="/nuestrosproductos"
          className="hover:text-yellow-500 transition"
        >
          Productos
        </Link>
        <Link href="/contact" className="hover:text-yellow-500 transition">
          Contacto
        </Link>

        <Link href="/cart" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
