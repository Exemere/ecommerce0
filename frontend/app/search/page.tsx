"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, ChangeEvent } from "react";

// Mock product data
const products = [
  { id: 1, name: "Laptop Pro", description: "High-performance laptop", price: 19180, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
  { id: 2, name: "Laptop Pro", description: "High-performance laptop", price: 11980, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
  { id: 3, name: "Laptop Pro", description: "High-performance laptop", price: 22980, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
  { id: 4, name: "Laptop Pro", description: "High-performance laptop", price: 45980, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
  { id: 5, name: "Laptop Pro", description: "High-performance laptop", price: 67980, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
  { id: 7, name: "Laptop Pro", description: "High-performance laptop", price: 43980, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
  { id: 8, name: "Laptop Pro", description: "High-performance laptop", price: 23680, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
  { id: 9, name: "Laptop Pro", description: "High-performance laptop", price: 31980, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
  { id: 10, name: "Laptop Pro", description: "High-performance laptop", price: 20980, oldPrice: 1200, img: "/img/product01.png", category: "Laptops" },
];
export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("query") || "").toLowerCase();

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(999999);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query);
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return matchesQuery && matchesCategory && matchesPrice;
    });
  }, [query, selectedCategory, minPrice, maxPrice]);

return (
  <div className="min-h-screen bg-white text-black container mx-auto px-6 py-10">
    <h1 className="text-2xl font-bold mb-6 p-2 rounded-lg shadow-md bg-white">
      Search Results for: <span className="text-black">{query}</span>
    </h1>

    {/* Main Layout */}
    <div className="flex flex-col md:flex-row gap-8">
      {/* Filters Sidebar */}
      <div className="md:w-64 bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSelectedCategory(e.target.value)
            }
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option>All</option>
            <option>Laptops</option>
            <option>Smartphones</option>
            <option>Cameras</option>
            <option>Accessories</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Price Range</label>
          <div className="flex gap-3 items-end">
            <div>
              <label className="block text-xs font-medium mb-1">Min</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMinPrice(Number(e.target.value))
                }
                className="border border-gray-300 rounded px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Max</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMaxPrice(Number(e.target.value))
                }
                className="border border-gray-300 rounded px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>
        </div>

        {/* Reset Filters Button */}
        <button
          onClick={() => {
            setSelectedCategory("All");
            setMinPrice(0);
            setMaxPrice(1500);
          }}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition mb-8 shadow-md"
        >
          Reset Filters
        </button>

        {/* 🔥 Suggested Additions Below Filters */}
        <div className="pt-4 space-y-4">
          {/* Sort Options */}
          <div>
            <label className="block text-sm font-semibold mb-2">Sort By</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          {/* Featured Products */}
          <div className="rounded-lg shadow-sm bg-gray-50 p-3">
            <h3 className="text-sm font-semibold mb-2">🔥 Popular Picks</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Laptop Pro</li>
              <li className="hover:underline cursor-pointer">Smartwatch</li>
              <li className="hover:underline cursor-pointer">Camera Pro</li>
            </ul>
          </div>

          {/* Promotional Banner */}
          <div className="bg-red-100 rounded-lg p-3 text-center text-sm font-medium shadow-inner">
            <p>💥 Flash Sale!</p>
            <p className="text-red-600">Up to 40% off accessories</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        {filteredProducts.length === 0 ? (
          <p className="text-black">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-light text-lg">{product.description}</h3>
                  <p className="text-black font-bold mt-2">
                  {product.price.toLocaleString("en-KE", {
                  style: "currency",
                  currency: "KES",
                  minimumFractionDigits: 0,})}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);


}
