"use client";
import Image from "next/image";
interface CategoryCardProps {
  title: string;
  image: string;
}
export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="relative w-[380px] h-[260px] overflow-hidden rounded-lg bg-amber-100">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-90"
      />

      {/* Red diagonal overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#d10000_50%,transparent_50%)]"></div>

      {/* Text content */}
      <div className="absolute top-[30%] left-[10%] text-white z-10">
        <h2 className="text-xl font-bold leading-tight">{title}</h2>
        <button className="mt-3 flex items-center gap-2 text-sm font-medium hover:underline">
          SHOP NOW <span className="text-lg">➜</span>
        </button>
      </div>
    </div>
  );
}
