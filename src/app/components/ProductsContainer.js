"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const baseURL = process.env.NEXT_PUBLIC_API_URL;
        const endpoint = `${baseURL}/products`;
        console.log("URL final del fetch:", endpoint);

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`);

        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("La API no devolvió un array válido");
        }

        setProducts(data);
      } catch (err) {
        console.error("Error al cargar productos:", err);
        setError(err.message);
      }
    }

    fetchProducts();
  }, []);

  if (error)
    return (
      <p className="text-center text-red-500 mt-10">
        Error al cargar productos: {error}
      </p>
    );

  if (!products.length)
    return (
      <p className="text-center text-gray-400 mt-10">Cargando productos...</p>
    );

  return (
    <section className="p-10 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </section>
  );
}
