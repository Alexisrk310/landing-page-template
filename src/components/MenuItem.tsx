import React, { useState } from "react";
import { pins } from "@/data/foods/foodsData";
import type { PinProps } from "@/interfaces/foods.Interface";

interface Props {
  data: PinProps[];
}

const MenuItem: React.FC<Props> = ({ data }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredData = data
    .filter((item) =>
      !activeCategory || item.title === activeCategory
    )
    .map((item) => {
      const filteredProducts = item.products.filter((product) =>
        `${product.name} ${item.title}`.toLowerCase().includes(search.toLowerCase())
      );
      return filteredProducts.length > 0
        ? { ...item, products: filteredProducts }
        : null;
    })
    .filter(Boolean) as PinProps[];

  return (
    <div className="bg-white min-h-screen py-10 px-4 text-gray-900">
      <h1 className="text-4xl font-bold mb-2 text-green-600 text-center">Menú</h1>
      <p className="text-gray-600 mb-6 text-center">
        Explora nuestras deliciosas categorías
      </p>

      {/* Input de búsqueda */}
      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar producto o categoría..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Botones de categoría */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
            !activeCategory
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-green-100"
          }`}
        >
          Todas
        </button>
        {pins.map((pin, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(pin.title)}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
              activeCategory === pin.title
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-red-100"
            }`}
          >
            {pin.title}
          </button>
        ))}
      </div>

      {/* Tarjetas de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {filteredData.length === 0 ? (
          <p className="text-center text-red-500 col-span-full">
            No se encontraron productos.
          </p>
        ) : (
          filteredData.map((item) =>
            item.products.map((product, i) => (
              <div
                key={`${item.id}-${i}`}
                className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    Sin imagen
                  </div>
                )}

                <div className="p-4">
                  <span className="text-sm text-red-500 font-semibold">{item.title}</span>
                  <h3 className="text-xl font-bold mt-1">{product.name}</h3>
                  <p className="text-gray-700 mt-1 text-sm line-clamp-2">
                    {product.description || "Sin descripción"}
                  </p>
                  <p className="mt-2 font-semibold text-green-600">
                    ${product.price.toLocaleString()}
                  </p>
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition"
                      onClick={() => alert(`Comprando ${product.name}`)}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default MenuItem;
