import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop Pro", description: "High-performance laptop", price: 980, oldPrice: 1200, img: "/img/product01.png" },
  { id: 2, name: "Smartphone X", description: "Latest smartphone model", price: 799, oldPrice: 899, img: "/img/product02.png" },
  { id: 3, name: "Camera Pro", description: "Professional-grade camera", price: 650, img: "/img/product03.png" },
  { id: 4, name: "Headphones", description: "Noise-cancelling headphones", price: 120, img: "/img/product04.png" },
];

export default function ProductCarousel() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
