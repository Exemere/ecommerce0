import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

interface Props {
  name: string;
  description: string;
  price: number;
  img: string;
}

export default function ProductCard({ name, price, description, img }: Props) {
  return (
    <div className="border rounded-lg p-2 shadow hover:shadow-lg transition bg-white">
      <Image src={img} alt={name} width={200} height={200} className="mx-auto" />
      <h4 className="mt-4 font-light text-black">{description}</h4>
      <div className="mt-2 text-black font-bold">
        Ksh {price}
      </div>
    </div>
  );
}