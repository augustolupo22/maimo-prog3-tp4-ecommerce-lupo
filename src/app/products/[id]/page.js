"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:4000/products/${id}`);
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
    return <p className="text-center text-red-500 mt-10">Cargando producto...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-30 flex gap-10">

      <div className="flex-1 flex justify-center items-center">
        <Image
          src={product.imagen}
          alt={product.name}
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>

        <p className="text-gray-900 mb-4">{product.descripcion}</p>

        <p className="text-4xl font-bold text-yellow-600 mb-2">
          ${product.precio?.toLocaleString("es-AR")}
        </p>

        <p className="text-sm text-yellow-600 mb-6">
          6 cuotas sin interés de{" "}
          <span className="font-bold">
            ${(Math.round(product.precio / 6)).toLocaleString("es-AR")}
          </span>
        </p>

        <h3 className=" text-gray-900 mb-2">Talles disponibles:</h3>
        <div className="flex gap-2 text-black mb-6">
          {product.talles?.map((t, i) => (
            <button
              key={i}
              className="px-3 py-1 border rounded hover:bg-yellow-500 hover:text-white transition"
            >
              {t}
            </button>
          ))}
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
