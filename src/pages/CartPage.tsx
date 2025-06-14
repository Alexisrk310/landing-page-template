import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import {
  Minus,
  Plus,
  XCircle,
  ShoppingBag,
  Store,
  Truck,
  Trash2,
} from "lucide-react";
import EpaycoCheckoutButton from "../components/EpaycoCheckoutButton";
import { pins } from "@/data/foods/foodsData";

interface CartItem {
  category: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const neighborhoods = [
  { label: "El Laguito", value: "El Laguito", fee: 5000 },
  { label: "Bocagrande", value: "Bocagrande", fee: 6000 },
  { label: "Manga", value: "Manga", fee: 7000 },
  { label: "Getsemaní", value: "Getsemaní", fee: 6000 },
  { label: "Pie de la Popa", value: "Pie de la Popa", fee: 5000 },
  { label: "Los Alpes", value: "Los Alpes", fee: 7000 },
  { label: "Crespo", value: "Crespo", fee: 6000 },
  { label: "Olaya", value: "Olaya", fee: 7000 },
  { label: "San Fernando", value: "San Fernando", fee: 7000 },
  { label: "La Castellana", value: "La Castellana", fee: 8000 },
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showModal, setShowModal] = useState<"delivery" | "pickup" | null>(
    null
  );
  const [formData, setFormData] = useState<any>(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<any>(null);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const findProductInPins = (name: string) => {
    for (const pin of pins) {
      const found = pin.products.find((product) => product.name === name);
      if (found) return { ...found, category: pin.title };
    }
    return null;
  };

  const validateCartItems = (storedItems: CartItem[]): CartItem[] => {
    const validItems: CartItem[] = [];
    storedItems.forEach((item) => {
      const realProduct = findProductInPins(item.name);
      if (
        realProduct &&
        realProduct.price === item.price &&
        realProduct.image === item.image &&
        realProduct.category === item.category
      ) {
        validItems.push(item);
      }
    });
    return validItems;
  };

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      const parsed = JSON.parse(stored);
      const validCart = validateCartItems(parsed);
      setCartItems(validCart);
      if (parsed.length !== validCart.length) {
        localStorage.setItem("cart", JSON.stringify(validCart));
      }
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const updateQuantity = (index: number, delta: number) => {
    const newItems = [...cartItems];
    const item = newItems[index];
    item.quantity = Math.max(1, item.quantity + delta);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const removeItem = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const description = cartItems
    .map((item) => `${item.name} x${item.quantity}`)
    .join(", ");

  const onSubmit = (data: any) => {
    const isValidCart =
      validateCartItems(cartItems).length === cartItems.length;
    if (!isValidCart) {
      alert(
        "El carrito ha sido modificado. Verifica los productos antes de continuar."
      );
      clearCart();
      return;
    }

    const neighborhoodName = selectedNeighborhood?.label || "N/A";
    const fee = selectedNeighborhood?.fee || 0;

    const addressPart =
      showModal === "delivery"
        ? ` | Entregar en: ${data.address}, ${neighborhoodName}`
        : " | Recoger en tienda";

    const descriptionWithAddress = `${description}${addressPart}`;

    setFormData({
      ...data,
      description: descriptionWithAddress,
      totalAmount: totalPrice + fee,
    });
  };

  const closeModal = () => {
    setShowModal(null);
    setFormData(null);
    setSelectedNeighborhood(null);
    setDeliveryFee(0);
    reset();
  };

  return (
    <div className="min-h-screen px-4 py-10 max-w-4xl mx-auto text-gray-900">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-800 drop-shadow-sm">
        🛒 Tu carrito
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Tu carrito está vacío.
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, i) => (
            <div
              key={i}
              className="relative border rounded-2xl p-4 shadow-lg bg-white hover:shadow-xl transition"
            >
              <button
                onClick={() => removeItem(i)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                aria-label="Eliminar producto"
              >
                <XCircle size={24} />
              </button>

              <div className="flex items-center gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl border"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-1">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Precio unitario:{" "}
                    <span className="font-semibold text-green-600">
                      ${item.price.toLocaleString()}
                    </span>
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(i, -1)}
                      className="p-1 border rounded-full text-red-500 hover:bg-red-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-lg px-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(i, 1)}
                      className="p-1 border rounded-full text-green-600 hover:bg-green-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="text-sm mt-2 text-gray-800 font-semibold">
                    Subtotal: ${(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-6 space-y-4">
            <p className="text-2xl font-bold text-emerald-700">
              Total: ${totalPrice.toLocaleString()}
            </p>

            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 font-semibold shadow-md"
                onClick={() => setShowModal("pickup")}
              >
                <Store size={20} /> Recoger en tienda
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 font-semibold shadow-md"
                onClick={() => setShowModal("delivery")}
              >
                <Truck size={20} /> Envío a domicilio
              </button>
            </div>

            <button
              onClick={clearCart}
              className="flex items-center justify-center gap-2 mx-auto mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-400 transition font-semibold shadow"
            >
              <Trash2 size={18} /> Vaciar carrito
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xl relative shadow-2xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <XCircle size={28} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-emerald-700">
              {showModal === "delivery"
                ? "Información para domicilio"
                : "Recoger en tienda"}
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <input
                  {...register("name", { required: "Nombre requerido" })}
                  placeholder="Nombre completo"
                  className="border p-3 rounded w-full shadow-sm outline-0"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message as string}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("phone", { required: "Teléfono requerido" })}
                  placeholder="Teléfono"
                  className="border p-3 rounded w-full shadow-sm outline-0"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message as string}
                  </p>
                )}
              </div>
              {showModal === "delivery" ? (
                <>
                  <div>
                    <input
                      {...register("address", {
                        required: "Dirección requerida",
                      })}
                      placeholder="Dirección"
                      className="border p-3 rounded w-full shadow-sm outline-0"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address.message as string}
                      </p>
                    )}
                  </div>
                  <div>
                    <Select
                      options={neighborhoods}
                      placeholder="Selecciona un barrio"
                      onChange={(selected) => {
                        setSelectedNeighborhood(selected);
                        setDeliveryFee(selected?.fee || 0);
                      }}
                      isSearchable
                      classNamePrefix="react-select"
                      className="w-full rounded border shadow-sm"
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          padding: "2px 4px",
                          borderColor: state.isFocused ? "#10b981" : "#d1d5db", // Tailwind emerald-500 y gray-300
                          boxShadow: "none",
                          borderRadius: "0.5rem", // rounded
                          minHeight: "48px", // como el input con p-3
                        }),
                        placeholder: (base) => ({
                          ...base,
                          color: "#9ca3af", // gray-400
                        }),
                      }}
                    />
                  </div>
                </>
              ) : (
                <div className="md:col-span-2">
                  <input
                    {...register("id")}
                    placeholder="Cédula (opcional)"
                    className="border p-3 rounded w-full shadow-sm outline-0"
                  />
                </div>
              )}

              <div className="md:col-span-2">
                <p className="text-center text-lg font-bold text-emerald-700 mt-2">
                  Total a pagar: ${(totalPrice + deliveryFee).toLocaleString()}
                </p>
              </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={
                    !isValid ||
                    (showModal === "delivery" && !selectedNeighborhood)
                  }
                  className={`px-6 py-3 rounded-full text-white font-semibold transition-all ${
                    !isValid ||
                    (showModal === "delivery" && !selectedNeighborhood)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
                >
                  Confirmar datos y pagar
                </button>
              </div>
            </form>

            {formData && isValid && (
              <div className="mt-6 text-center">
                <EpaycoCheckoutButton
                  amount={formData.totalAmount}
                  name={formData.name}
                  description={formData.description}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
