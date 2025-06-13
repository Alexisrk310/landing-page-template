import React, { useEffect, useState } from "react";
import CheckoutBrick from "@/components/CheckoutBrick";

interface CartItem {
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const createPreference = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://mercado-pago-backend-six.vercel.app/api/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await res.json();
      if (data.preferenceId) {
        setPreferenceId(data.preferenceId);
      } else {
        alert("Error creando la preferencia.");
      }
    } catch (err) {
      console.error(err);
      alert("Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700 text-center">Carrito de compras</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 border rounded-lg p-4 shadow-sm bg-white">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                <p className="text-sm text-gray-600">Subtotal: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-bold text-emerald-800">Total: ${total.toLocaleString()}</p>
            {!preferenceId ? (
              <button
                onClick={createPreference}
                disabled={loading}
                className="mt-4 bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 disabled:opacity-50"
              >
                {loading ? "Cargando..." : "Comprar ahora"}
              </button>
            ) : (
              <div className="mt-6 border p-4 rounded-lg bg-gray-50">
                <h3 className="text-lg font-semibold text-center mb-2">Completa tu pago</h3>
                <CheckoutBrick preferenceId={preferenceId} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
