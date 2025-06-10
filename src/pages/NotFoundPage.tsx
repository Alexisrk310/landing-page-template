// NotFoundPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-600 flex flex-col items-center justify-center text-white px-4 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-red-600 via-black to-teal-700 animate-pulse" />

      <div className="z-10 text-center space-y-6">
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
          <span className="text-teal-700 drop-shadow-lg">Rafa</span>
          <span className="text-red-600 drop-shadow-lg">Express</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold animate-bounce">404 - Página no encontrada</h2>
        <p className="text-lg max-w-md mx-auto text-gray-300">
          Parece que te perdiste en la cocina... ¡pero tranquilo, tenemos lo que necesitas!
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
        >
          Volver al menú <MoveRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-600 rounded-full blur-3xl opacity-30 animate-ping" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-teal-700 rounded-full blur-3xl opacity-30 animate-ping delay-2000" />
    </div>
  );
};

export default NotFoundPage;
