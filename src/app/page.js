import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsContainer from "./components/ProductsContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductsContainer />
      <Footer />
    </>
  );
}
