import { useState, useEffect, useReducer, useRef } from "react";
import { BanknoteArrowDown, BugPlay } from "lucide-react";

import { pins } from "@/data/foods/foodsData";
import MenuItem from "@/components/MenuItem";
import type { PinProps } from "@/interfaces/foods.Interface";

export default function MenuPage() {
  const [selectedPin, setSelectedPin] = useState<PinProps | null>(null);
  const scrollMenu = useRef<HTMLDivElement>(null);
  function scrollToBottom(seccionRef: any) {
    seccionRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <button
        onClick={() => scrollToBottom(scrollMenu)}
        className="absolute right-0 mr-3 md:mr-10 text-black bg-teal-500 hover:bg-teal-600 px-3 py-0 md:px-5 md:py-1 rounded-full font-medium cursor-pointer"
      >
        Pedir algo <BanknoteArrowDown className="inline-block" />
      </button>
      <div className="relative w-full mx-auto mt-10 overflow-x-hidden">
        <img
          src="/menu/menu.jfif"
          alt="Menú Rafa Express"
          className="w-full rounded-xl shadow-xl object-cover"
        />
        <div ref={scrollMenu} className="mt-9">
          <h1 className="text-5xl font-bold tracking-tight text-center">
            <span className="text-teal-700">Me</span>
            <span className="text-red-600">nú</span>
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Explora nuestras deliciosas categorías
          </p>
          <MenuItem data={pins} />
        </div>
      </div>
    </>
  );
}
