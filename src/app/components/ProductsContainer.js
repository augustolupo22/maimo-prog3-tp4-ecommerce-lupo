"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("La API no devolvió un array válido");
        }

        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    }

    fetchProducts();
  }, []);

  if (!products.length) {
    return (
      <p className="text-center text-red-500 font-semibold mt-10">
        Error al cargar productos o sin datos disponibles.
      </p>
    );
  }

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
