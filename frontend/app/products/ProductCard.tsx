					 import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

interface Props {
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  img: string;
}

export default function ProductCard({ name, price, description, oldPrice, img }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Image src={img} alt={name} width={200} height={200} className="mx-auto" />
      <h3 className="mt-4 font-light text-black">{name}</h3>
      <h4 className="mt-4 font-light text-black">{description}</h4>
      <div className="mt-2 text-black font-bold">
         {oldPrice && (
          <span className="text-gray-900 line-through ml-2">Ksh {oldPrice}</span>
        )} <br />
        Ksh {price}
      </div>
    </div>
  );
}