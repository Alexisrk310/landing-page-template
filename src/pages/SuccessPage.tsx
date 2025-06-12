import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/cart"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-green-800 p-8 text-center">
      <CheckCircle className="w-20 h-20 text-green-600 mb-6" />
      <h1 className="text-4xl font-bold mb-4">¡Pago Exitoso!</h1>
      <p className="text-lg">Gracias por tu compra. Te redirigiremos al carrito.</p>
    </div>
  );
};

export default SuccessPage;
