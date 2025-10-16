"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../contexts/CartContexts";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-[320px] h-[500px] border hover:shadow-xl hover:scale-105 transition cursor-pointer flex flex-col justify-between">
      <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-2 rounded-br-none">
        ENVÍO GRATIS
      </div>

      <div className="flex justify-center p-4">
        <Image
          src={product.imagen}
          alt={product.name}
          width={250}
          height={250}
          className="object-contain"
        />
      </div>

      <div className="px-5 pb-5 text-center">
        <h2 className="text-xl font-semibold uppercase text-yellow-500 min-h-[40px] line-clamp-2">
          {product.name}
        </h2>

        <p className="font-bold text-2xl text-black mt-2">
          ${product.precio.toLocaleString("es-AR")}
        </p>

        <p className="text-xs text-gray-600 mt-1">
          6 cuotas sin interés de{" "}
          <span className="font-bold">
            ${Math.round(product.precio / 6).toLocaleString("es-AR")}
          </span>
        </p>

        <div className="mt-4 flex justify-center gap-3">
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition"
          >
            Agregar al carrito
          </button>

          <Link
            href={`/products/${product._id}`}
            className="border border-black text-sm text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Ver
          </Link>
        </div>
      </div>
    </div>
  );
}

