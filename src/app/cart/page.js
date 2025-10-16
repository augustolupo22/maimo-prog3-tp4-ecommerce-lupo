"use client";
import Image from "next/image";
import { useCart } from "../contexts/CartContexts";

export default function CartPage() {
  const { cart, total, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex flex-col md:flex-row gap-8 p-15 pt-30 bg-gray-200 min-h-screen">
      <div className="flex-1 bg-black p-6 rounded-xl shadow-md">

        {cart.length === 0 ? (
          <p className="text-red-700">Tu carrito está vacío.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b border-gray-400 py-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.imagen}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-contain rounded-md"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-green-600 text-lg">${item.precio.toLocaleString("es-AR")}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 border rounded-md hover:bg-gray-400"
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 border rounded-md hover:bg-gray-400"
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-l text-red-500 hover:underline ml-4"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>

              <p className="font-bold text-lg">
                ${(item.precio * item.quantity).toLocaleString("es-AR")}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="md:w-1/3 bg-black p-6 rounded-xl shadow-md h-fit">
        <h2 className="text-lg font-bold mb-4">Resumen de compra</h2>

        <div className="flex justify-between mb-2 text-sm">
          <span>Productos ({cart.length})</span>
          <span>${total.toLocaleString("es-AR")}</span>
        </div>

        <div className="flex justify-between mb-2 text-sm text-green-600">
          <span>Envío</span>
          <span>Gratis</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Total</span>
          <span>${total.toLocaleString("es-AR")}</span>
        </div>

        <button className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition">
          Continuar compra
        </button>
      </div>
    </div>
  );
}
