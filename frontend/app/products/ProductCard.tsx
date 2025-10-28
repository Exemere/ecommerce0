import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

interface Props {
  name: string;
  price: number;
  oldPrice?: number;
  img: string;
}

export default function ProductCard({ name, price, oldPrice, img }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Image src={img} alt={name} width={200} height={200} className="mx-auto" />
      <h3 className="mt-4 font-semibold">{name}</h3>
      <div className="mt-2 text-red-600 font-bold">
        ${price}
        {oldPrice && (
          <span className="text-gray-400 line-through ml-2">${oldPrice}</span>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded">
          <ShoppingCart size={18} /> Add to Cart
        </button>
        <button className="text-gray-500 hover:text-red-600">
          <Heart size={18} />
        </button>
      </div>
    </div>
  );
}
