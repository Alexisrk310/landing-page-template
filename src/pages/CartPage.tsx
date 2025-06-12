import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleCheckout = async () => {
  try {
    const response = await fetch("https://mercado-pago-backend-six.vercel.app/api/create-preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
    });

    const data = await response.json();

    if (data.init_point) {
      window.location.href = data.init_point;
    } else {
      alert("Error al crear la preferencia de pago.");
    }
  } catch (error) {
    console.error("Error en checkout:", error);
    alert("Hubo un problema al procesar el pago.");
  }
};


  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Tu carrito</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border rounded-lg p-4 shadow-sm"
            >
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
                <p className="text-sm text-gray-700">
                  Cantidad:{" "}
                  <span className="font-medium">{item.quantity}</span>
                </p>
                <p className="text-sm mt-1 text-gray-800 font-semibold">
                  Subtotal: ${ (item.price * item.quantity).toLocaleString() }
                </p>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 space-y-4">
            <p className="text-xl font-bold text-green-700">
              Total: ${totalPrice.toLocaleString()}
            </p>
            <button
              onClick={handleCheckout}
              disabled={isPaying}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isPaying ? "Redirigiendo..." : "Pagar con Mercado Pago"}
            </button>
            <br />
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
