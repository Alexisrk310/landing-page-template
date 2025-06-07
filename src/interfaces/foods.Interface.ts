export interface ProductProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface PinProps {
  id: number;
  x: string;
  y: string;
  title: string;
  description: string;
  images: string[];
  icon?: React.ReactNode;
  products: ProductProps[];
}