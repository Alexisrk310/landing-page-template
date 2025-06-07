import { useState, useEffect } from "react";
import { X, ArrowRight, ArrowLeft } from "lucide-react";

import { pins } from "@/data/foods/foodsData";
import MenuItem from "@/components/MenuItem";
import type { PinProps } from "@/interfaces/foods.Interface";


export default function MenuConModal() {
  const [selectedPin, setSelectedPin] = useState<PinProps | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [showClick, setShowClick] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowClick((prev) => !prev), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedPin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Limpieza para cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPin]);

  const closeModal = () => {
    setSelectedPin(null);
    setCurrentImgIndex(0);
  };

  const nextImage = () => {
    if (!selectedPin) return;
    setCurrentImgIndex((i) => (i + 1) % selectedPin.images.length);
  };

  const prevImage = () => {
    if (!selectedPin) return;
    setCurrentImgIndex(
      (i) => (i - 1 + selectedPin.images.length) % selectedPin.images.length
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-green-700 mt-10">
        MENÚ
      </h1>

      <div className="relative w-full mx-auto mt-10 overflow-x-hidden">
        <img
          src="/menu/menu.jfif"
          alt="Menú Rafa Express"
          className="w-full rounded-xl shadow-xl object-cover"
        />

        {pins.map((pin) => (
          <div
            key={pin.id}
            className="absolute"
            style={{ top: pin.y, left: pin.x }}
          >
            <div className="flex flex-col items-center group relative">
              {showClick && (
                <div
                  className="absolute bottom-full mb-2 text-xs bg-gray-800 text-white px-3 py-1 rounded-md shadow-lg max-w-[120px] text-center z-10"
                  style={{
                    transform: "translateX(-50%)",
                    left: "50%",
                  }}
                >
                  ¡Click aquí!
                </div>
              )}

              <button
                onClick={() => setSelectedPin(pin)}
                title={pin.title}
                className="bg-red-600 text-white rounded-full w-8 h-8 text-xs flex items-center justify-center shadow-md hover:scale-110 transition duration-150"
              >
                {pin.icon}
              </button>
            </div>
          </div>
        ))}

        {selectedPin && (
          <div className="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl sm:p-6 p-4 relative border border-red-300 overflow-y-auto max-h-[95vh]">
              {/* Botón de cierre */}
              <button
                onClick={closeModal}
                className="absolute z-50 top-3 right-3 text-white bg-black p-2 rounded-full text-2xl shadow-xl border border-white hover:scale-110 transition"
              >
                <X size={18} />
              </button>

              {/* Imagen con flechas */}
              <div className="relative">
                <img
                  src={selectedPin.images[currentImgIndex]}
                  alt={selectedPin.title}
                  className="w-full h-52 sm:h-64 object-cover rounded-xl mb-3"
                />
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-white p-1 rounded-full shadow hover:bg-slate-200"
                >
                  <ArrowLeft color="#000000" size={18} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-white p-1 rounded-full shadow hover:bg-slate-200"
                >
                  <ArrowRight color="#000000" size={18} />
                </button>
              </div>

              {/* Título y descripción */}
              <h2 className="text-xl sm:text-2xl font-bold text-red-700">
                {selectedPin.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mt-2 mb-4">
                {selectedPin.description}
              </p>

              {/* Lista de productos */}
              <ul className="space-y-3 ">
                {selectedPin.products.map((product, index) => (
                  <li
                    key={index}
                    className="border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md"
                  >
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full sm:w-16 h-40 sm:h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-black">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {product.description}
                        </p>
                        <p className="text-sm font-bold text-green-700">
                          ${product.price}
                        </p>
                      </div>
                      <button
                        className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition self-start sm:self-auto"
                        onClick={() => ""}
                      >
                        Comprar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>

      <MenuItem data={pins} />
      </div>
    </>
  );
}
