import React from "react";
import { Flame, Utensils, Heart } from "lucide-react";
import CardInfo from "@/components/CardInfo";
const info= [
    {
        icon: <Flame className="w-12 h-12 mx-auto text-red-600" />,
        title: "Cocina con Fuego",
        description: "Cada plato es preparado con amor y dedicación, fusionando sabores tradicionales con un toque moderno."
    },
    {
        icon: <Utensils className="w-12 h-12 mx-auto text-teal-700" />,
        title: "Comida Rápida, con Alma",
        description: " Hamburguesas, pizzas y perros llenos de carácter, hechos al instante pero con cariño."
    },
    {
        icon: <Heart className="w-12 h-12 mx-auto text-pink-600" />,
        title: "Hecho con Cariño",
        description: " Somos una familia que cocina para otras familias. Todo lo que servimos viene con una sonrisa."
    }
    
]
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          <span className="text-teal-700">Rafa</span>
          <span className="text-red-600">Express</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          En <span className="text-teal-700 font-bold">Rafa</span> {''}
          <span className="text-red-600 font-bold">Express</span> cocinamos con pasión, rapidez y mucho sabor. Somos un restaurante que fusiona lo tradicional con la energía de lo urbano.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {info.map((item, index) => (
          <CardInfo
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}/>
        ))}

       
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 italic">
          ¡Ven y vive la experiencia frenética de <span className="text-teal-700">Rafa</span>
         {''} <span className="text-red-600">Express</span>!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
