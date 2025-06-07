import React from "react";
import { BeefIcon, HamburgerIcon, Pizza } from "lucide-react";
import HotDogIcon from "@/components/HotDogIcon";
import ArepaIcon from "@/components/ArepaIcon";
import PataconIcon from "@/components/PataconIcon";
import PapasIcon from "@/components/PapasIcon";

export const pins = [
  // PIZZAS
  {
    id: 1,
    x: "1%",
    y: "32.7%",
    title: "Pizzas Extra Large",
    description:
      "Variedades como jamón y queso, hawaiana, pollo y champiñones, etc.",
    images: ["/foodOfTheWeek/picada.png", "/pizza2.jpg"],
    icon: <Pizza />,
    products: [
      {
        name: "Jamón y Queso",
        price: 50000,
        description:
          "Clásica pizza con abundante queso derretido y finas lonjas de jamón sobre una base crujiente.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Hawaiana",
        price: 55000,
        description:
          "Deliciosa combinación de jamón y piña sobre una base de queso mozzarella fundido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Hawaiana ½ Jamón",
        price: 55000,
        description:
          "Mitad hawaiana con jamón y piña, mitad clásica de jamón y queso. Perfecta para indecisos.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pollo",
        price: 60000,
        description:
          "Pizza con trozos jugosos de pechuga de pollo, cubierta con queso derretido y especias suaves.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Pollo ½ Jamón",
        price: 55000,
        description:
          "Una mitad con pollo sazonado y otra con jamón tradicional, ideal para compartir sabores.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pollo y Champiñones",
        price: 65000,
        description:
          "Deliciosa combinación de pollo tierno y champiñones frescos sobre una base de queso fundido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Especial",
        price: 70000,
        description:
          "Nuestra pizza especial con jamón, salami, pimentón, cebolla y maíz dulce, llena de sabor.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Especial con Maíz",
        price: 75000,
        description:
          "Versión mejorada de la especial, con extra de maíz dulce que realza el sabor de cada ingrediente.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Salami",
        price: 55000,
        description:
          "Pizza con rodajas de salami picante y queso mozzarella, ideal para los amantes de sabores intensos.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pepperoni",
        price: 55000,
        description:
          "Clásica pizza americana con abundante pepperoni crocante y queso fundido en su punto.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Jamón con Maíz",
        price: 55000,
        description:
          "Deliciosa fusión de jamón ahumado con granos de maíz dulce sobre una capa cremosa de queso.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
    ],
  },
  {
    id: 2,
    x: "21%",
    y: "41%",
    title: "Pizzas Small",
    description:
      "Tamaño pequeño ideal para una persona. Mismos sabores disponibles.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <Pizza />,
    products: [
      {
        name: "Jamón y Queso",
        price: 32000,
        description:
          "Clásica pizza con abundante queso derretido y finas lonjas de jamón sobre una base crujiente.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Hawaiana",
        price: 36000,
        description:
          "Deliciosa combinación de jamón y piña sobre una base de queso mozzarella fundido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Hawaiana ½ Jamón",
        price: 34000,
        description:
          "Mitad hawaiana con jamón y piña, mitad clásica de jamón y queso. Perfecta para indecisos.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pollo",
        price: 45000,
        description:
          "Pizza con trozos jugosos de pechuga de pollo, cubierta con queso derretido y especias suaves.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Pollo ½ Hawaiana",
        price: 45000,
        description:
          "Una mitad con pollo sazonado y otra con jamón y piña, ideal para compartir sabores.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Pollo ½ Jamón",
        price: 35000,
        description:
          "Mitad con pollo jugoso y mitad con jamón tradicional, sobre una base de queso fundido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pollo y Champiñones",
        price: 50000,
        description:
          "Deliciosa combinación de pollo tierno y champiñones frescos sobre una base de queso fundido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Especial",
        price: 55000,
        description:
          "Nuestra pizza especial con jamón, salami, pimentón, cebolla y maíz dulce, llena de sabor.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Especial con Maíz",
        price: 60000,
        description:
          "Versión mejorada de la especial, con extra de maíz dulce que realza el sabor de cada ingrediente.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Salami",
        price: 38000,
        description:
          "Pizza con rodajas de salami picante y queso mozzarella, ideal para los amantes de sabores intensos.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pepperoni",
        price: 48000,
        description:
          "Clásica pizza americana con abundante pepperoni crocante y queso fundido en su punto.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Jamón con Maíz",
        price: 42000,
        description:
          "Deliciosa fusión de jamón ahumado con granos de maíz dulce sobre una capa cremosa de queso.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
    ],
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
      {
        name: "Jamón y Queso",
        price: 18000,
        description:
          "Una combinación clásica de jamón y queso derretido sobre una base crujiente.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Hawaiana",
        price: 22000,
        description:
          "La mezcla perfecta de jamón y piña sobre una capa de queso fundido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Hawaiana ½ Jamón",
        price: 20000,
        description:
          "Mitad con jamón y piña, mitad con solo jamón. Ideal para compartir gustos.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pollo",
        price: 30000,
        description:
          "Trozos jugosos de pollo sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Pollo ½ Hawaiana",
        price: 30000,
        description:
          "Mitad con pollo y la otra mitad con jamón y piña. ¡Para todos los gustos!",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Pollo ½ Jamón",
        price: 30000,
        description:
          "Mitad con pollo y la otra mitad con jamón. Una combinación deliciosa.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pollo y Champiñones",
        price: 33000,
        description:
          "Combinación de pollo y champiñones sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Especial",
        price: 37000,
        description:
          "Una mezcla de ingredientes especiales sobre una base crujiente.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Especial con Maíz",
        price: 37000,
        description: "Nuestra pizza especial con un toque de maíz dulce.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Salami",
        price: 25000,
        description:
          "Rodajas de salami picante sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pepperoni",
        price: 25000,
        description: "Rodajas de pepperoni sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Jamón con Maíz",
        price: 25000,
        description: "Jamón y maíz dulce sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
    ],
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
      {
        name: "Jamón y Queso",
        price: 16000,
        description:
          "Una combinación clásica de jamón y queso derretido sobre una base crujiente.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Hawaiana",
        price: 18000,
        description:
          "La mezcla perfecta de jamón y piña sobre una capa de queso fundido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Hawaiana ½ Jamón",
        price: 17000,
        description:
          "Mitad con jamón y piña, mitad con solo jamón. Ideal para compartir gustos.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pollo",
        price: 20000,
        description:
          "Trozos jugosos de pollo sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Pollo ½ Hawaiana",
        price: 20000,
        description:
          "Mitad con pollo y la otra mitad con jamón y piña. ¡Para todos los gustos!",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "½ Pollo ½ Jamón",
        price: 20000,
        description:
          "Mitad con pollo y la otra mitad con jamón. Una combinación deliciosa.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pollo y Champiñones",
        price: 22000,
        description:
          "Combinación de pollo y champiñones sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Especial",
        price: 23000,
        description:
          "Una mezcla de ingredientes especiales sobre una base crujiente.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Especial con Maíz",
        price: 25000,
        description: "Nuestra pizza especial con un toque de maíz dulce.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Salami",
        price: 20000,
        description:
          "Rodajas de salami picante sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Pepperoni",
        price: 20000,
        description: "Rodajas de pepperoni sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
      {
        name: "Jamón con Maíz",
        price: 18000,
        description: "Jamón y maíz dulce sobre una capa de queso derretido.",
        image:
          "https://www.semana.com/resizer/dRqPnA3y--9HkjIcgQEHcjIwjV8=/arc-anglerfish-arc2-prod-semana/public/V65H6NID3FBLVGRHYB7J2OFROE.jpg",
      },
    ],
  },

  // PERROS
  {
    id: 5,
    x: "59.3%",
    y: "44.5%",
    title: "Perros Calientes",
    description: "Con salchichas, pollo, tocineta y más.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <HotDogIcon />,
    products: [
      {
        name: "Salvaje Especial",
        price: 30000,
        description:
          "Una combinación única de ingredientes frescos y sabrosos, ideal para los amantes de los sabores intensos.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
      {
        name: "Ranchero Salvaje",
        price: 25000,
        description:
          "Sabor campestre con toques auténticos que te transportan al campo colombiano.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
      {
        name: "Suizo Salvaje",
        price: 22000,
        description:
          "Una fusión de sabores suizos con un toque salvaje que sorprenderá tu paladar.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
      {
        name: "Chori Salvaje",
        price: 22000,
        description:
          "El clásico chorizo con un giro salvaje que le da un sabor único y delicioso.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
      {
        name: "Suizo",
        price: 18000,
        description:
          "Sabor suave y cremoso con una mezcla de quesos suizos que derretirán tu corazón.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
      {
        name: "Choriperro",
        price: 18000,
        description:
          "La combinación perfecta entre chorizo y perro caliente, una explosión de sabor.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
      {
        name: "Ranchero",
        price: 16000,
        description:
          "Sabor auténtico del campo con ingredientes frescos y naturales.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
      {
        name: "Super Americano",
        price: 12000,
        description:
          "Un perro caliente al estilo americano con todos los ingredientes clásicos.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
      {
        name: "Sencillo",
        price: 10000,
        description:
          "La opción perfecta para los que buscan un sabor clásico sin complicaciones.",
        image:
          "https://alqueria.com.co/sites/default/files/perros-calientes-con-suero-costeno-alqueria.jpg",
      },
    ],
  },

  // SALCHIPAPAS
  {
    id: 6,
    x: "60.8%",
    y: "72.7%",
    title: "Salchipapas",
    description: "Con muchas salsas.",
    images: ["/salchipapas.jpg"],
    icon: <PapasIcon />,
    products: [
      {
        name: "Suiza con Pollo Esmechado",
        price: 28000,
        description:
          "Deliciosa salchipapa con salchicha suiza y jugoso pollo esmechado, coronada con salsas cremosas y queso rallado.",
        image:
          "https://files.rcnradio.com/public/styles/4_3/public/2024-12/Salchipapacostena.jpg?itok=kmudwhS1",
      },
      {
        name: "Ranchera con Pollo Esmechado",
        price: 30000,
        description:
          "Una combinación de salchicha ranchera y pollo esmechado, acompañada de papas crujientes y salsas al gusto.",
        image:
          "https://files.rcnradio.com/public/styles/4_3/public/2024-12/Salchipapacostena.jpg?itok=kmudwhS1",
      },
      {
        name: "Suiza",
        price: 24000,
        description:
          "Salchicha suiza servida sobre una cama de papas fritas, con salsas y queso rallado.",
        image:
          "https://files.rcnradio.com/public/styles/4_3/public/2024-12/Salchipapacostena.jpg?itok=kmudwhS1",
      },
      {
        name: "Ranchera",
        price: 24000,
        description:
          "Salchicha ranchera acompañada de papas fritas, salsas y queso rallado.",
        image:
          "https://files.rcnradio.com/public/styles/4_3/public/2024-12/Salchipapacostena.jpg?itok=kmudwhS1",
      },
      {
        name: "Sencilla",
        price: 16000,
        description:
          "La clásica salchipapa con salchicha y papas fritas, ideal para los amantes de lo tradicional.",
        image:
          "https://files.rcnradio.com/public/styles/4_3/public/2024-12/Salchipapacostena.jpg?itok=kmudwhS1",
      },
    ],
  },

  // AREPAS
  {
    id: 7,
    x: "78.8%",
    y: "34.7%",
    title: "Arepas",
    description: "Variedad de sabores.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <ArepaIcon />,
    products: [
      {
        name: "Especial",
        price: 16000,
        description:
          "Arepa rellena con una deliciosa combinación de ingredientes frescos y sabrosos, ideal para satisfacer tu apetito.",
        image:
          "https://polloseldorado.co/wp-content/uploads/2024/03/Arepa-de-Pollo.jpg",
      },
      {
        name: "Ranchera",
        price: 15000,
        description:
          "Arepa rellena con salchicha ranchera, acompañada de papas fritas y salsas al gusto, para una experiencia única.",
        image:
          "https://polloseldorado.co/wp-content/uploads/2024/03/Arepa-de-Pollo.jpg",
      },
      {
        name: "Suiza",
        price: 15000,
        description:
          "Arepa rellena con salchicha suiza, combinada con ingredientes frescos y salsas cremosas, para un sabor inigualable.",
        image:
          "https://polloseldorado.co/wp-content/uploads/2024/03/Arepa-de-Pollo.jpg",
      },
      {
        name: "Carne y Pollo",
        price: 14000,
        description:
          "Arepa rellena con una mezcla jugosa de carne y pollo, acompañada de papas fritas y salsas al gusto.",
        image:
          "https://polloseldorado.co/wp-content/uploads/2024/03/Arepa-de-Pollo.jpg",
      },
      {
        name: "Arepa Burguer",
        price: 14000,
        description:
          "Arepa rellena con una jugosa hamburguesa, acompañada de ingredientes frescos y salsas al gusto.",
        image:
          "https://polloseldorado.co/wp-content/uploads/2024/03/Arepa-de-Pollo.jpg",
      },
      {
        name: "Choributt",
        price: 12000,
        description:
          "Arepa rellena con chorizo y una deliciosa mezcla de ingredientes, para una experiencia de sabor única.",
        image:
          "https://polloseldorado.co/wp-content/uploads/2024/03/Arepa-de-Pollo.jpg",
      },
      {
        name: "Sencilla",
        price: 11000,
        description:
          "La clásica arepa rellena con salchicha y acompañada de papas fritas, para disfrutar de un sabor tradicional.",
        image:
          "https://polloseldorado.co/wp-content/uploads/2024/03/Arepa-de-Pollo.jpg",
      },
    ],
  },

  // MAÍZ DESGRANADO
  {
    id: 8,
    x: "78.3%",
    y: "75.5%",
    title: "Maíz Desgranado",
    description: "Tierno y delicioso.",
    images: ["/foodOfTheWeek/picada.png"],
    products: [
      {
        name: "Especial",
        price: 45000,
        description:
          "Una combinación única de salchichas suizas, rancheras y carne, acompañada de papas fritas crujientes y salsas al gusto.",
        image: "https://i.ytimg.com/vi/xLKP8jSM9OA/maxresdefault.jpg",
      },
      {
        name: "Carne y Pollo",
        price: 30000,
        description:
          "Deliciosa mezcla de carne y pollo, servida sobre una cama de papas fritas y acompañada de salsas cremosas.",
        image: "https://i.ytimg.com/vi/xLKP8jSM9OA/maxresdefault.jpg",
      },
      {
        name: "Suizo",
        price: 30000,
        description:
          "Salchicha suiza combinada con papas fritas y salsas al gusto, para una experiencia de sabor única.",
        image: "https://i.ytimg.com/vi/xLKP8jSM9OA/maxresdefault.jpg",
      },
      {
        name: "Ranchero",
        price: 25000,
        description:
          "Salchicha ranchera acompañada de papas fritas, salsas y queso rallado, para disfrutar de un sabor tradicional.",
        image: "https://i.ytimg.com/vi/xLKP8jSM9OA/maxresdefault.jpg",
      },
      {
        name: "Choributt",
        price: 20000,
        description:
          "Combinación de chorizo y salchicha, servida sobre papas fritas y acompañada de salsas al gusto.",
        image: "https://i.ytimg.com/vi/xLKP8jSM9OA/maxresdefault.jpg",
      },
      {
        name: "Sencillo",
        price: 20000,
        description:
          "La clásica salchipapa con salchicha y papas fritas, ideal para los amantes de lo tradicional.",
        image: "https://i.ytimg.com/vi/xLKP8jSM9OA/maxresdefault.jpg",
      },
    ],
  },

  // PICADAS
  {
    id: 9,
    x: "78.3%",
    y: "75.5%",
    title: "Picadas",
    description: "Para compartir en familia.",
    images: ["/foodOfTheWeek/picada.png"],
    products: [
      {
        name: "Familiar",
        price: 75000,
        description: "",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/15/a2/e7/12/la-marimonda-del-mono.jpg",
      },
      {
        name: "Jumbo",
        price: 55000,
        description: "",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/15/a2/e7/12/la-marimonda-del-mono.jpg",
      },
      {
        name: "Especial",
        price: 40000,
        description: "",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/15/a2/e7/12/la-marimonda-del-mono.jpg",
      },
      {
        name: "Trifasica",
        price: 35000,
        description: "",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/15/a2/e7/12/la-marimonda-del-mono.jpg",
      },
      {
        name: "Choributt",
        price: 25000,
        description: "",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/15/a2/e7/12/la-marimonda-del-mono.jpg",
      },
    ],
  },

  // HAMBURGUESAS
  {
    id: 10,
    x: "98%",
    y: "25%",
    title: "Hamburguesas",
    description: "Clásicas y especiales.",
    images: ["/foodOfTheWeek/picada.png"],
    icon: <HamburgerIcon />,
    products: [
      {
        name: "Carne y Pollo",
        price: 27000,
        description:
          "Una deliciosa combinación de carne y pollo desmechados, acompañados de papas fritas crujientes y salsas al gusto.",
        image:
          "https://www.elespectador.com/resizer/v2/ZQUGSWWM2BBZXHEPBPMRIWX46U.jpg?auth=fba19f13a18b1a314f32e083e9d0727fbbe153571721015b63a21613680c519e&width=920&height=613&smart=true&quality=60",
      },
      {
        name: "Doble Carne",
        price: 25000,
        description:
          "Para los amantes de la carne, esta salchipapa ofrece una generosa porción de carne acompañada de papas fritas y salsas al gusto.",
        image:
          "https://www.elespectador.com/resizer/v2/ZQUGSWWM2BBZXHEPBPMRIWX46U.jpg?auth=fba19f13a18b1a314f32e083e9d0727fbbe153571721015b63a21613680c519e&width=920&height=613&smart=true&quality=60",
      },
      {
        name: "Ranchera",
        price: 20000,
        description:
          "Salchichas tipo ranchera acompañadas de papas fritas, salsas y queso rallado, para disfrutar de un sabor tradicional.",
        image:
          "https://www.elespectador.com/resizer/v2/ZQUGSWWM2BBZXHEPBPMRIWX46U.jpg?auth=fba19f13a18b1a314f32e083e9d0727fbbe153571721015b63a21613680c519e&width=920&height=613&smart=true&quality=60",
      },
      {
        name: "Pollo",
        price: 20000,
        description:
          "Deliciosa salchipapa con trozos de pollo acompañados de papas fritas y salsas al gusto.",
        image:
          "https://www.elespectador.com/resizer/v2/ZQUGSWWM2BBZXHEPBPMRIWX46U.jpg?auth=fba19f13a18b1a314f32e083e9d0727fbbe153571721015b63a21613680c519e&width=920&height=613&smart=true&quality=60",
      },
      {
        name: "Sencilla",
        price: 16000,
        description:
          "La clásica salchipapa con salchicha y papas fritas, ideal para los amantes de lo tradicional.",
        image:
          "https://www.elespectador.com/resizer/v2/ZQUGSWWM2BBZXHEPBPMRIWX46U.jpg?auth=fba19f13a18b1a314f32e083e9d0727fbbe153571721015b63a21613680c519e&width=920&height=613&smart=true&quality=60",
      },
    ],
  },

  // PATACONES
  {
    id: 11,
    x: "97%",
    y: "46.3%",
    title: "Patacones",
    description: "Fritos de plátano con toppings.",
    images: ["/patacones.jpg"],
    icon: <PataconIcon />,
    products: [
      {
        name: "Especial",
        price: 25000,
        description:
          "Una deliciosa combinación de salchichas, carne desmechada, papas fritas crujientes y salsas al gusto.",
        image: "https://i.ytimg.com/vi/5jkXZMgV9XE/maxresdefault.jpg",
      },
      {
        name: "Carne y Pollo",
        price: 22000,
        description:
          "La mezcla perfecta entre carne y pollo desmechados, acompañados de papas fritas y salsas al gusto.",
        image: "https://i.ytimg.com/vi/5jkXZMgV9XE/maxresdefault.jpg",
      },
      {
        name: "Trifásico",
        price: 22000,
        description:
          "Una explosión de sabores con salchicha, chorizo y carne, acompañados de papas fritas y salsas al gusto.",
        image: "https://i.ytimg.com/vi/5jkXZMgV9XE/maxresdefault.jpg",
      },
      {
        name: "Choributt",
        price: 20000,
        description:
          "Una combinación irresistible de chorizo y butifarra, acompañados de papas fritas y salsas al gusto.",
        image: "https://i.ytimg.com/vi/5jkXZMgV9XE/maxresdefault.jpg",
      },
      {
        name: "Sencillo",
        price: 16000,
        description:
          "La clásica salchipapa con salchicha y papas fritas, ideal para los amantes de lo tradicional.",
        image: "https://i.ytimg.com/vi/5jkXZMgV9XE/maxresdefault.jpg",
      },
    ],
  },

  // ASADOS
  {
    id: 12,
    x: "96.6%",
    y: "66%",
    title: "Asados",
    description: "Pechuga o cerdo a la brasa.",
    images: ["/asado.jpg"],
    icon: <BeefIcon />,
    products: [
      {
        name: "Pechuga",
        price: 25000,
        description:
          "Pechuga de pollo asada a la perfección, jugosa y acompañada de papas fritas, ensalada fresca y arroz.",
        image:
          "https://colanta.com/aprende-de/wp-content/uploads/2019/03/Tipos-de-asados1.jpg",
      },
      {
        name: "Cerdo",
        price: 25000,
        description:
          "Delicioso cerdo asado, tierno y sabroso, servido con papas fritas, ensalada fresca y arroz.",
        image:
          "https://colanta.com/aprende-de/wp-content/uploads/2019/03/Tipos-de-asados1.jpg",
      },
    ],
  },
];
