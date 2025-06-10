import React, { useState } from "react";
import { pins } from "@/data/foods/foodsData";
import type { PinProps } from "@/interfaces/foods.Interface";
import { Beef, Hamburger, Pizza, X, ShoppingCart } from "lucide-react";

interface Props {
  data: PinProps[];
}

const MenuItem: React.FC<Props> = ({ data }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<
    { category: string; name: string; price: number; image?: string }[]
  >([]);
  const [cartItems, setCartItems] = useState<
    { category: string; name: string; quantity: number; price: number; image?: string }[]
  >([]);
  const [showCart, setShowCart] = useState(false);

  const filteredData = data
    .filter((item) => !activeCategory || item.title === activeCategory)
    .map((item) => {
      const filteredProducts = item.products.filter((product) =>
        `${product.name} ${item.title}`.toLowerCase().includes(search.toLowerCase())
      );
      return filteredProducts.length > 0
        ? { ...item, products: filteredProducts }
        : null;
    })
    .filter(Boolean) as PinProps[];

  const isSelected = (category: string, name: string) =>
    selectedProducts.some((p) => p.category === category && p.name === name);

  const toggleProductSelection = (
    category: string,
    name: string,
    price: number,
    image?: string
  ) => {
    if (isSelected(category, name)) {
      setSelectedProducts((prev) =>
        prev.filter((p) => !(p.category === category && p.name === name))
      );
    } else {
      setSelectedProducts((prev) => [...prev, { category, name, price, image }]);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20 px-4 text-gray-900">
      {/* Input de búsqueda + botón múltiple */}
      <div className="mb-6 max-w-xl mx-auto flex justify-between items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar producto o categoría..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={() => {
            setMultiSelect((prev) => !prev);
            if (multiSelect) setSelectedProducts([]);
          }}
          className={`flex ml-2 px-3 py-2 rounded-md font-medium text-sm ${
            multiSelect
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {multiSelect ? <X /> : <><Pizza /><Hamburger /><Beef /></>}
        </button>
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

      {multiSelect && (
        <div className="text-center mb-4">
          <p className="text-sm text-gray-700 bg-yellow-100 border border-yellow-200 inline-block px-4 py-2 rounded-full ">
            Selección múltiple activada – haz clic en los productos que deseas agregar.
          </p>
        </div>
      )}

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
                onClick={() =>
                  multiSelect
                    ? toggleProductSelection(item.title, product.name, product.price, product.image)
                    : undefined
                }
                className={`relative cursor-pointer border rounded-lg overflow-hidden transition-shadow duration-200 ${
                  isSelected(item.title, product.name)
                    ? "ring-2 ring-green-500 bg-green-50"
                    : "bg-white border-gray-200 shadow-sm"
                } `}
              >
                {multiSelect && (
                  <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow bounce z-10">
                    Haz clic para seleccionar
                  </div>
                )}

                {isSelected(item.title, product.name) && (
                  <div className="absolute top-2 right-2 bg-green-600 text-white rounded-full p-1 shadow-md text-sm">
                    ✔️
                  </div>
                )}

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
                </div>
              </div>
            ))
          )
        )}
      </div>

      {multiSelect && selectedProducts.length > 0 && (
        <button
          onClick={() => {
            const items = selectedProducts.map((item) => ({
              ...item,
              quantity: 1,
            }));
            setCartItems(items);
            setShowCart(true);
          }}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg"
        >
          <ShoppingCart className="w-6 h-6" />
        </button>
      )}

      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Productos seleccionados</h2>
            <ul className="mb-4 max-h-60 overflow-auto">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <span className="text-sm text-gray-500">({item.category})</span>
                      <p className="text-sm text-green-600">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value) || 1;
                      setCartItems((prev) =>
                        prev.map((it, i) =>
                          i === index ? { ...it, quantity: newQuantity } : it
                        )
                      );
                    }}
                    className="w-16 ml-4 px-2 py-1 border rounded text-center"
                  />
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                const confirmed = confirm("¿Agregar estos productos con cantidad al carrito?");
                if (confirmed) {
                  localStorage.setItem("cart", JSON.stringify(cartItems));
                  alert("Productos guardados en el carrito.");
                  setSelectedProducts([]);
                  setCartItems([]);
                  setMultiSelect(false);
                  setShowCart(false);
                }
              }}
              className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
