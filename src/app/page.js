import Image from "next/image";
import ProductsContainer from "./components/ProductsContainer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsContainer />
    </>
  );
}
