"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">
            Nuestras Prendas
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Camisetas Retro</a>
            </li>
            <li>
              <a href="#">Camisetas Actuales</a>
            </li>
            <li>
              <a href="#">Mayoristas</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">
            Términos y condiciones
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Política de Envío</a>
            </li>
            <li>
              <a href="#">Política de Garantía</a>
            </li>
            <li>
              <a href="#">Política de Cancelación</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Sobre Nosotros</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Quiénes Somos</a>
            </li>
            <li>
              <a href="#">Preguntas Frecuentes</a>
            </li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Suscríbete</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Tu correo..."
              className="p-2 w-full text-black"
            />
            <button className="bg-yellow-500 text-black px-4">Enviar</button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            <SiTiktok className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-800 pt-4">
        © Futboleros Store 2025. Desarrollado para la Facultad.
      </div>
    </footer>
  );
}
