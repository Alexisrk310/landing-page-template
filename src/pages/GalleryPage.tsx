import React from "react";

const images = [
  {
    title: "Hamburguesa Clásica",
    description: "Jugosa, hecha al instante con todo el cariño de casa.",
    imageUrl: "/foods/hamburg.png",
    color: "text-green-700",
  },
  {
    title: "Pizza Urbana",
    description: "Fusionamos lo clásico con lo urbano en cada porción.",
    imageUrl: "/foods/pizza.png",
    color: "text-red-600",
  },
  {
    title: "Perro Explosivo",
    description: "Sabor vibrante, cocinado con fuego y tradición.",
    imageUrl: "/foods/salchipapa.png",
    color: "text-teal-700",
  },
  {
    title: "Hamburguesa Clásica",
    description: "Jugosa, hecha al instante con todo el cariño de casa.",
    imageUrl: "/foods/hamburg.png",
    color: "text-green-700",
  },
  {
    title: "Pizza Urbana",
    description: "Fusionamos lo clásico con lo urbano en cada porción.",
    imageUrl: "/foods/pizza.png",
    color: "text-red-600",
  },
  {
    title: "Perro Explosivo",
    description: "Sabor vibrante, cocinado con fuego y tradición.",
    imageUrl: "/foods/salchipapa.png",
    color: "text-teal-700",
  },
  {
    title: "Hamburguesa Clásica",
    description: "Jugosa, hecha al instante con todo el cariño de casa.",
    imageUrl: "/foods/hamburg.png",
    color: "text-green-700",
  },
  {
    title: "Pizza Urbana",
    description: "Fusionamos lo clásico con lo urbano en cada porción.",
    imageUrl: "/foods/pizza.png",
    color: "text-red-600",
  },
  {
    title: "Perro Explosivo",
    description: "Sabor vibrante, cocinado con fuego y tradición.",
    imageUrl: "/foods/salchipapa.png",
    color: "text-teal-700",
  },
];




const GalleryPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Título principal */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">
          <span className="text-green-700">Gal</span>
          <span className="text-red-600">ería</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Explora la esencia de nuestro sabor en cada imagen
        </p>
      </section>

      {/* Galería */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className={`text-lg font-semibold ${item.color}`}>
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

     
    </div>
  );
};

export default GalleryPage;
