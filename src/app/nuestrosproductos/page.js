"use client";

import ProductsContainer from "../components/ProductsContainer";
import SectionHeader from "../components/SectionHeader";

export default function ProductsPage() {
  return (
    <main className="bg-black min-h-screen pt-25">
      <SectionHeader
        titulo="Nuestros Productos"
        fondo="/banner-textura.jpg"
        textoSecundario="Descubrí camisetas únicas, modelos retro y mucho más."
      />
      <ProductsContainer />
    </main>
  );
}
