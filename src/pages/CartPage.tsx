import React, { useEffect, useState } from "react";
import CheckoutBrick from "@/components/CheckoutBrick";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  const handleCheckout = async () => {
    const res = await fetch("https://mercado-pago-backend-six.vercel.app/api/create-preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });
    const data = await res.json();
    setPreferenceId(data.preferenceId);
  };

  return (
    <div>
      <h1>Carrito</h1>
      {/* renderiza items */}
      <button onClick={handleCheckout}>Comprar ahora</button>

      {preferenceId && <CheckoutBrick preferenceId={preferenceId} />}
    </div>
  );
};

export default Cart;
