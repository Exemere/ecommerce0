import ProductCard from "./ProductCard";

const products = [
  { name: "Laptop Pro", price: 980, oldPrice: 1200, img: "/img/product01.png" },
  { name: "Smartphone X", price: 799, oldPrice: 899, img: "/img/product02.png" },
  { name: "Camera Pro", price: 650, img: "/img/product03.png" },
  { name: "Headphones", price: 120, img: "/img/product04.png" },
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
