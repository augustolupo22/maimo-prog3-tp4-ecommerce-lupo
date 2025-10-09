"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:4000/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al traer productos:", error);
      }
    }
    fetchProducts();
  }, []);

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
