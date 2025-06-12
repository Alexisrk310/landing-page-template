// Archivo: MenuItem.tsx
import React, { useState, useEffect, useRef } from "react";
import { pins } from "@/data/foods/foodsData";
import type { PinProps } from "@/interfaces/foods.Interface";
import {
  Beef,
  Hamburger,
  Pizza,
  X,
  ShoppingCart,
  CheckCircle,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";

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
    {
      category: string;
      name: string;
      quantity: number;
      price: number;
      image?: string;
    }[]
  >([]);
  const [showCart, setShowCart] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showOrderTip, setShowOrderTip] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const cartButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedProducts.length > 0) {
      const interval = setInterval(() => {
        setShowOrderTip((prev) => !prev);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [selectedProducts]);

  useEffect(() => {
    if (showSavedMessage) {
      const timer = setTimeout(() => {
        setShowSavedMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSavedMessage]);

  const filteredData = data
    .filter((item) => !activeCategory || item.title === activeCategory)
    .map((item) => {
      const filteredProducts = item.products.filter((product) =>
        `${product.name} ${item.title}`
          .toLowerCase()
          .includes(search.toLowerCase())
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
      setSelectedProducts((prev) => [
        ...prev,
        { category, name, price, image },
      ]);
    }
  };

  const openCartWithProduct = (
    category: string,
    name: string,
    price: number,
    image?: string
  ) => {
    setCartItems([{ category, name, price, image, quantity: 1 }]);
    setShowCart(true);
  };
  const mergeCartItems = (
    items: typeof cartItems,
    newItems: typeof cartItems
  ) => {
    const merged = [...items];
    newItems.forEach((newItem) => {
      const index = merged.findIndex(
        (item) =>
          item.name === newItem.name && item.category === newItem.category
      );
      if (index > -1) {
        merged[index].quantity += newItem.quantity;
      } else {
        merged.push(newItem);
      }
    });
    return merged;
  };

  return (
    <div className="bg-white min-h-screen pb-20 px-4 text-gray-900 overflow-x-hidden">
      {showSavedMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Productos guardados en el carrito
        </div>
      )}

      {/* Buscador y botón de selección múltiple */}
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
          {multiSelect ? (
            <X />
          ) : (
            <>
              <Pizza />
              <Hamburger />
              <Beef />
            </>
          )}
        </button>
      </div>

      {/* Filtros por categoría */}
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

      {/* Tooltip de selección múltiple */}
      {multiSelect && (
        <div className="text-center mb-4">
          <p className="text-sm text-gray-700 bg-yellow-100 border border-yellow-200 inline-block px-4 py-2 rounded-full flex items-center gap-2">
            Selección múltiple activada – haz clic en los productos que deseas
            agregar.
            <ChevronDown className="animate-bounce" />
            <ChevronDown className="animate-bounce delay-100" />
          </p>
        </div>
      )}

      {/* Grid de productos */}
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
                    ? toggleProductSelection(
                        item.title,
                        product.name,
                        product.price,
                        product.image
                      )
                    : undefined
                }
                className={`relative cursor-pointer border rounded-lg overflow-hidden transition-shadow duration-200 select-none ${
                  isSelected(item.title, product.name)
                    ? "ring-2 ring-green-500 bg-green-50"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {multiSelect && (
                  <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow bounce z-10">
                    Haz clic para seleccionar
                  </div>
                )}
                {isSelected(item.title, product.name) && (
                  <div className="absolute top-2 right-2 bg-green-600 text-white rounded-full p-1 shadow-md text-sm">
                    <CheckCircle />
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
                  <span className="text-sm text-red-500 font-semibold">
                    {item.title}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{product.name}</h3>
                  <p className="text-gray-700 mt-1 text-sm line-clamp-2">
                    {product.description || "Sin descripción"}
                  </p>
                  <p className="mt-2 font-semibold text-green-600">
                    ${product.price.toLocaleString()}
                  </p>
                  {!multiSelect && (
                    <button
                      className="py-2 px-4 mt-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition shadow-md flex items-center justify-center gap-2"
                      onClick={() =>
                        openCartWithProduct(
                          item.title,
                          product.name,
                          product.price,
                          product.image
                        )
                      }
                    >
                      <ShoppingCart className="w-4 h-4" /> Comprar
                    </button>
                  )}
                </div>
              </div>
            ))
          )
        )}
      </div>

      {/* Botón flotante del carrito y tooltip */}
      {multiSelect && selectedProducts.length > 0 && (
        <div>
          <button
            ref={cartButtonRef}
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
          {showOrderTip && (
            <div className="fixed bottom-20 right-6 bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-md animate-pulse">
              <div className="relative">
                Haz tu pedido aquí
                <div className="absolute -bottom-2 right-2 bottom-ro rotate-45 w-2 h-2 bg-gray-900"></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal del carrito */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-2 right-2  hover:text-black text-3xl font-bold border border-white bg-gray-900 text-white w-8 h-8 rounded-full shadow-md"
            >
              <X className="w-full"/>
            </button>
            <h2 className="text-xl font-bold mb-4">Productos seleccionados</h2>
            <ul className="mb-4 max-h-60 overflow-auto">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 border-b"
                >
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
                      <span className="text-sm text-gray-500">
                        ({item.category})
                      </span>
                      <p className="text-sm text-green-600">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        setCartItems((prev) =>
                          prev.map((it, i) =>
                            i === index && it.quantity > 1
                              ? { ...it, quantity: it.quantity - 1 }
                              : it
                          )
                        );
                      }}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => {
                        setCartItems((prev) =>
                          prev.map((it, i) =>
                            i === index
                              ? { ...it, quantity: it.quantity + 1 }
                              : it
                          )
                        );
                      }}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" /> Agregar al carrito
            </button>
          </div>
        </div>
      )}

      {/* Confirmación final */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4 text-center">
              ¿Estás seguro?
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Tu pedido está en la bolsa.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                onClick={() => setShowConfirm(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                onClick={() => {
                  const stored = localStorage.getItem("cart");
                  const existingItems = stored ? JSON.parse(stored) : [];
                  const merged = mergeCartItems(existingItems, cartItems);
                  localStorage.setItem("cart", JSON.stringify(merged));
                  setSelectedProducts([]);
                  setCartItems([]);
                  setMultiSelect(false);
                  setShowCart(false);
                  setShowConfirm(false);
                  setShowSavedMessage(true);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
