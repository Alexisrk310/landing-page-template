import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";

const FailurePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/cart"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 p-8 text-center">
      <XCircle className="w-20 h-20 text-red-600 mb-6" />
      <h1 className="text-4xl font-bold mb-4">¡Pago Fallido!</h1>
      <p className="text-lg">Ocurrió un error al procesar tu pago. Redirigiendo al carrito.</p>
    </div>
  );
};

export default FailurePage;
