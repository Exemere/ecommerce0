"use client";

import ProductCard from "./ProductCard";
import { useMemo } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  img: string;
  views?: number;
  isFeatured?: boolean;
  createdAt?: string;
};
const allProducts: Product[] = [
  { id: 1, name: "Laptop Pro", description: "High-performance laptop", price: 980, category: "Laptops", img: "/img/product01.png", views: 120, isFeatured: true },
  { id: 2, name: "Smartphone X", description: "Latest smartphone model", price: 799, category: "Phones", img: "/img/product02.png", views: 300 },
  { id: 3, name: "Camera Pro", description: "Professional-grade camera", price: 650, category: "Cameras", img: "/img/product03.png", views: 280 },
  { id: 4, name: "Headphones", description: "Noise-cancelling headphones", price: 120, category: "Accessories", img: "/img/product04.png", views: 210 },
];

interface Props {
  currentProduct?: Product; // optional
  isLoggedIn?: boolean;
}

export default function Like({ currentProduct, isLoggedIn = false }: Props) {
  const suggestedProducts = useMemo(() => {
    // 1️⃣ Logged-in & has viewed a product
    if (isLoggedIn && currentProduct) {
      return allProducts
        .filter(
          (p) =>
            p.id !== currentProduct.id &&
            p.category === currentProduct.category &&
            p.price >= currentProduct.price * 0.6 &&
            p.price <= currentProduct.price * 1.4
        )
        .slice(0, 4);
    }

    // 2️⃣ Guest user currently viewing a product
    if (!isLoggedIn && currentProduct) {
      return allProducts
        .filter((p) => p.category === currentProduct.category && p.id !== currentProduct.id)
        .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
        .slice(0, 4);
    }

    // 3️⃣ New visitor, no product context
    if (!currentProduct) {
      const featured = allProducts.filter((p) => p.isFeatured).slice(0, 4);
      if (featured.length > 0) return featured;

      // fallback to random picks
      return [...allProducts].sort(() => 0.5 - Math.random()).slice(0, 4);
    }

    return [];
  }, [currentProduct, isLoggedIn]);

  return (
    <section className="container mx-auto py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">You May Also Like</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {suggestedProducts.length > 0 ? (
          suggestedProducts.map((p) => <ProductCard key={p.id} {...p} />)
        ) : (
          <p className="text-gray-500 text-sm col-span-full">
            No recommendations yet.
          </p>
        )}
      </div>
    </section>
  );
}
