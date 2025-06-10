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
                  Subtotal: $
                  {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-bold text-green-700">
              Total: ${totalPrice.toLocaleString()}
            </p>
            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
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
