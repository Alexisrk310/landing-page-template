import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

const PendingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/cart"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-yellow-800 p-8 text-center">
      <Clock className="w-20 h-20 text-yellow-600 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Pago Pendiente</h1>
      <p className="text-lg">Estamos esperando la confirmación de tu pago. Serás redirigido.</p>
    </div>
  );
};

export default PendingPage;
