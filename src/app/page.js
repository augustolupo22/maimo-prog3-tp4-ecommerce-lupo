import Image from "next/image";
import ProductsContainer from "./components/ProductsContainer";
import Hero from "./components/Hero";
import SectionHeader from "./components/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionHeader
        titulo="Nuestros Productos"
        fondo="/banner-textura.jpg"
        textoSecundario="Descubrí camisetas únicas, modelos retro y mucho más."
      />
      <ProductsContainer />
    </>
  );
}
