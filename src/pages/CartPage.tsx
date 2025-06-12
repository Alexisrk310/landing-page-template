import React, { useEffect, useState } from "react";
import { Minus, Plus, XCircle } from "lucide-react";
import CheckoutBrick from "@/components/CheckoutBrick";


interface CartItem {
  category: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isPaying, setIsPaying] = useState(false);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const updateQuantity = (index: number, delta: number) => {
    const newItems = [...cartItems];
    const item = newItems[index];
    item.quantity = Math.max(1, item.quantity + delta);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const removeItem = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    setPreferenceId(null);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckoutBricks = async () => {
    setIsPaying(true);
    try {
      const response = await fetch("https://mercado-pago-backend-six.vercel.app/api/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      if (data.preference_id) {
        setPreferenceId(data.preference_id);
      } else {
        alert("Error al crear la preferencia.");
      }
    } catch (error) {
      console.error("Error en checkout:", error);
      alert("Hubo un problema al procesar el pago.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-emerald-800">
        🛒 Tu carrito
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, i) => (
            <div key={i} className="relative border rounded-lg p-4 shadow-sm bg-white">
              <button
                onClick={() => removeItem(i)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                aria-label="Eliminar producto"
              >
                <XCircle size={24} />
              </button>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-sm text-gray-700">
                    Precio unitario:{" "}
                    <span className="font-medium text-green-600">
                      ${item.price.toLocaleString()}
                    </span>
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(i, -1)}
                      className="p-1 border rounded text-red-500 hover:bg-red-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(i, 1)}
                      className="p-1 border rounded text-green-600 hover:bg-green-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="text-sm mt-2 text-gray-800 font-semibold">
                    Subtotal: ${(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 space-y-4">
            <p className="text-xl font-bold text-emerald-700">
              Total: ${totalPrice.toLocaleString()}
            </p>

            <button
              onClick={handleCheckoutBricks}
              disabled={isPaying}
              className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition disabled:opacity-50"
            >
              {isPaying ? "Cargando..." : "Pagar con Mercado Pago"}
            </button>

           {preferenceId && (
  <CheckoutBrick preferenceId={preferenceId} amount={totalPrice} />
)}


            <br />
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-400 transition"
            >
              Vaciar carrito
            </button>
          </div>

          <div className="mt-10 text-center">
            <p className="text-md font-medium mb-2 text-gray-700">Puedes pagar con:</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <img src="/paymentMethods/mercado-pago-logo.jpg" alt="MercadoPago" className="h-15" />
              <img src="/paymentMethods/visa-logo.png" alt="Visa" className="h-15" />
              <img src="/paymentMethods/mastercard-logo.png" alt="MasterCard" className="h-15" />
              <img src="/paymentMethods/efecty-logo.svg" alt="Efecty" className="h-15" />
              <img src="/paymentMethods/pse-logo.png" alt="PSE" className="h-15" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
