import ProductCard from "./ProductCard";
import FlashSaleTimer from "../ui/Timer";

const products = [
  { name: "Laptop Pro", description: "High-performance laptop", price: 980, oldPrice: 1200, img: "/img/product01.png" },
  { name: "Smartphone X", description: "Latest smartphone model", price: 799, oldPrice: 899, img: "/img/product02.png" },
  { name: "Camera Pro", description: "Professional-grade camera", price: 650, img: "/img/product03.png" },
  { name: "Headphones", description: "Noise-cancelling headphones", price: 120, img: "/img/product04.png" },
  { name: "Smartwatch", description: "Feature-packed smartwatch", price: 220, oldPrice: 300, img: "/img/product05.png" },
  { name: "Tablet Air", description: "Lightweight and powerful tablet", price: 499, oldPrice: 650, img: "/img/product06.png" },
];

export default function HotDealsSection() {
  return (
    <div className="p-5 md:p-10 bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Hot Deals</h2>

        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <FlashSaleTimer />

          <button className="text-white bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-full text-sm font-medium transition">
            View More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
