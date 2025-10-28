import CategoryCard from "./categories/CategoryCard";
import ProductCarousel from "./products/ProductCarousel";

export default function Home() {
  return (
    <div>
      {/* Categories */}
      <section className="container mx-auto py-12 grid md:grid-cols-3 gap-6">
        <CategoryCard title="Laptops" img="/img/shop01.png" />
        <CategoryCard title="Accessories" img="/img/shop03.png" />
        <CategoryCard title="Cameras" img="/img/shop02.png" />
      </section>

      {/* New Products */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">New Products</h2>
        <ProductCarousel />
      </section>

      {/* Newsletter */}
   
    </div>
  );
}

