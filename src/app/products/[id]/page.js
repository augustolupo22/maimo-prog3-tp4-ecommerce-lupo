"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:4000/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Cargando producto...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <Image
        src={product?.imagen || "/placeholder.png"}
        alt={product?.name || "Imagen no disponible"}
        width={500}
        height={400}
        className="object-contain mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.descripcion}</p>
      <p className="text-3xl font-bold text-yellow-600 mt-4">
        {product.precio
          ? `$${product.precio.toLocaleString("es-AR")}`
          : "Precio no disponible"}
      </p>

      <div className="mt-4">
        <h3 className="font-semibold">Talles disponibles:</h3>
        <div className="flex gap-2 mt-2">
          {product.talles?.map((talle, i) => (
            <button
              key={i}
              className="px-3 py-1 border rounded hover:bg-yellow-500 hover:text-white transition"
            >
              {talle}
            </button>
          ))}
        </div>
      </div>
      <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-yellow-600">
        Comprar
      </button>
    </div>
  );
}
