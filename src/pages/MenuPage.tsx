import { useState, useEffect } from "react";
import { BeefIcon, HamburgerIcon, Pizza, X, ArrowRight, ArrowLeft } from "lucide-react";
import HotDogIcon from "@/components/HotDogIcon";
import ArepaIcon from "@/components/ArepaIcon";
import PataconIcon from "@/components/PataconIcon";
import PapasIcon from "@/components/PapasIcon";

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
}

interface Pin {
  id: number;
  x: string;
  y: string;
  title: string;
  description: string;
  images: string[];
  icon?: React.ReactNode;
  products: Product[];
}

const pins: Pin[] = [
  {
    id: 1,
    x: "1%",
    y: "32.7%",
    title: "Pizzas Extra Large",
    description: "Variedades como jamón y queso, hawaiana, pollo y champiñones, etc.",
    images: ["/foodOfTheWeek/picada.png", "/pizza2.jpg"],
    icon: <Pizza />,
    products: [
      { name: "Jamon y Queso", price: "50.000", description: "Clásica combinación.", image: "/foodOfTheWeek/picada.png" },
      { name: "Hawaiana", price: "55.000", description: "Con piña y jamón.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 2,
    x: "21%",
    y: "41%",
    title: "Pizzas Small",
    description: "Tamaño pequeño ideal para una persona. Mismos sabores disponibles.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <Pizza />,
    products: [
      { name: "Jamon y Queso", price: "18.000", description: "Pequeña y deliciosa.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 3,
    x: "37.7%",
    y: "36.5%",
    title: "Pizzas Large",
    description: "Pizzas grandes para compartir.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <Pizza />,
    products: [
      { name: "Pollo", price: "45.000", description: "Jugosa y sabrosa.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 4,
    x: "2%",
    y: "65.9%",
    title: "Pizzas Personal",
    description: "Pizzas personales para uno.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <Pizza />,
    products: [
      { name: "Especial", price: "22.000", description: "Con todo lo mejor.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 5,
    x: "59.3%",
    y: "44.5%",
    title: "Perros Calientes",
    description: "Con salchichas, pollo, tocineta y más.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <HotDogIcon />,
    products: [
      { name: "Salvaje Especial", price: "30.000", description: "Cargado de sabor.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 6,
    x: "98%",
    y: "25%",
    title: "Hamburguesas",
    description: "Clásicas y especiales.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <HamburgerIcon />,
    products: [
      { name: "Doble Carne", price: "25.000", description: "Doble ración de sabor.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 7,
    x: "78.8%",
    y: "34.7%",
    title: "Arepas",
    description: "Variedad de sabores.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <ArepaIcon />,
    products: [
      { name: "Especial", price: "16.000", description: "Arepa rellena con todo.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 8,
    x: "97%",
    y: "46.3%",
    title: "Patacones",
    description: "Fritos de plátano con toppings.",
    images: ["/patacones.jpg"],
    icon: <PataconIcon />,
    products: [
      { name: "Especial", price: "25.000", description: "Con carne y pollo.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 9,
    x: "96.6%",
    y: "66%",
    title: "Asados",
    description: "Pechuga o cerdo a la brasa.",
    images: ["/asado.jpg"],
    icon: <BeefIcon />,
    products: [
      { name: "Pechuga", price: "25.000", description: "Jugosa y sazonada.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 10,
    x: "60.8%",
    y: "72.7%",
    title: "Salchipapas",
    description: "Con muchas salsas.",
    images: ["/salchipapas.jpg"],
    icon: <PapasIcon />,
    products: [
      { name: "Ranchera con Pollo", price: "30.000", description: "Con salchichas y pollo.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 11,
    x: "78.3%",
    y: "75.5%",
    title: "Picadas",
    description: "Para compartir en familia.",
    images: ["/foodOfTheWeek/picada.png"],
    products: [
      { name: "Familiar", price: "75.000", description: "Para varios comensales.", image: "/foodOfTheWeek/picada.png" }
    ]
  },
  {
    id: 12,
    x: "78.3%",
    y: "75.5%",
    title: "Maíz Desgranado",
    description: "Tierno y delicioso.",
    images: ["/foodOfTheWeek/picada.png"],
    products: [
      { name: "Especial", price: "45.000", description: "Con queso y mantequilla.", image: "/foodOfTheWeek/picada.png" }
    ]
  }
];

export default function MenuConModal() {
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);
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
    setCurrentImgIndex((i) => (i - 1 + selectedPin.images.length) % selectedPin.images.length);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-green-700 mt-10">MENÚ</h1>

      <div className="relative w-full mx-auto mt-10 overflow-x-hidden">
        <img src="/menu/menu.jfif" alt="Menú Rafa Express" className="w-full rounded-xl shadow-xl object-cover" />

        {pins.map((pin) => (
          <div key={pin.id} className="absolute" style={{ top: pin.y, left: pin.x }}>
            <div className="flex flex-col items-center group relative">
              {showClick && (
                <div
                  className="absolute bottom-full mb-2 text-xs bg-gray-800 text-white px-3 py-1 rounded-md shadow-lg max-w-[120px] text-center z-10"
                  style={{
                    transform: "translateX(-50%)",
                    left: "50%"
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
          <div className="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-green-300">
              <button
                onClick={closeModal}
                className="absolute z-50 top-3 right-3 text-white bg-red-600 p-2 rounded-full text-2xl shadow-xl border border-white hover:scale-110 transition"
              >
                <X size={18}/>
              </button>

              <div className="relative">
                <img
                  src={selectedPin.images[currentImgIndex]}
                  alt={selectedPin.title}
                  className="w-full h-64 object-cover rounded-xl mb-3"
                />
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-600 text-white p-1 rounded-full shadow hover:bg-green-700"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white p-1 rounded-full shadow hover:bg-green-700"
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-green-700">{selectedPin.title}</h2>
              <p className="text-gray-700 mt-2 mb-4">{selectedPin.description}</p>

              <ul className="space-y-3">
                {selectedPin.products.map((product, index) => (
                  <li key={index} className="border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md">
                    <div className="flex gap-4 items-center">
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.description}</p>
                        <p className="text-sm font-bold text-black">${product.price}</p>
                      </div>
                      <button
                        className="ml-auto bg-green-600 text-white px-4 py-1 rounded-lg shadow hover:bg-green-700 transition"
                        onClick={() => ''}
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

      
    </>
  );
}
