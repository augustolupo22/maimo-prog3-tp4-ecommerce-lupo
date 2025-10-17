"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "../../contexts/CartContexts";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
        if (!res.ok) throw new Error("Error al traer producto");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-gray-500 mt-10">Cargando producto...</p>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black pt-30 px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">

        <div className="flex-1 flex justify-center">
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <Image
              src={product.imagen}
              alt={product.name}
              width={1000}
              height={1000}
              className="rounded-lg object-contain"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <p className="text-sm text-gray-400">
            Inicio / Camisetas /{" "}
            <span className="text-gray-600">{product.name}</span>
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg">{product.descripcion}</p>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-4xl font-bold text-green-600 mb-2">
              ${product.precio?.toLocaleString("es-AR")}
            </p>
            <p className="text-sm text-gray-500">
              6 cuotas sin interés de{" "}
              <span className="font-semibold text-black">
                ${Math.round(product.precio / 6).toLocaleString("es-AR")}
              </span>
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-2">Talle:</p>
            <div className="flex gap-3">
              {product.talles?.map((t, i) => (
                <button
                  key={i}
                  className="px-4 py-2 border border-gray-400 rounded-md text-gray-800 hover:bg-black hover:text-white transition"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full md:w-1/2 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-md transition"
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
}
