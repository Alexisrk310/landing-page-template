import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCartButton: React.FC = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalQuantity = cart.reduce(
        (sum: number, item: any) => sum + (item.quantity || 0),
        0
      );
      setItemCount(totalQuantity);
    };

    updateCount();

    // Para que se actualice aunque sea en pestaña distinta
    window.addEventListener("storage", updateCount);

    // Para actualizar en esta misma pestaña si cambias localStorage manualmente
    const interval = setInterval(updateCount, 1000);

    return () => {
      window.removeEventListener("storage", updateCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="w-6 h-6 text-green-600 hover:text-green-700 transition" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default FloatingCartButton;
