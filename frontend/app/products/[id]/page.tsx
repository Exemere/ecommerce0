"use client";

import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}

export default function ProductCard({ id, name, price, description, img }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-lg p-3 shadow-sm hover:shadow-lg transition bg-white group"
    >
      {/* Product Image */}
      <div className="relative">
        <Image
          src={img}
          alt={name}
          width={200}
          height={200}
          className="mx-auto transition-transform duration-300 group-hover:scale-105"
        />
        {/* Favorite icon (optional) */}
        <button
          className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={18} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Product Info */}
      <h4 className="mt-4 font-light text-black line-clamp-2">{description}</h4>

      <div className="mt-2 text-black font-bold">
        KSh {price.toLocaleString("en-KE")}
      </div>

      {/* Add to Cart Button */}
      <button
        className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
        onClick={(e) => {
          e.stopPropagation(); // prevent redirect
          // handle add to cart here
          console.log("Added to cart:", name);
        }}
      >
        <ShoppingCart size={18} /> Add to Cart
      </button>
    </div>
  );
}
