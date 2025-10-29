import CategoryCard from "./categories/CategoryCard";
import Hotdeals from "./products/Hotdeals";
import ProductCarousel from "./products/ProductCarousel";
import BannerSlider from "./slider/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Categories Section */}
      <section className="container mx-auto py-12 grid gap-6 md:grid-cols-3 ">
        <CategoryCard title="Laptops" image="/img/shop01.png" />
        <CategoryCard title="Accessories" image="/img/shop03.png" />
        <CategoryCard title="Cameras" image="/img/shop02.png" />
      </section>

      {/* Hotdeals Section */}
      <section className="container mx-auto py-12">
        <Hotdeals />
      </section>
      {/*Sliding Banners Section */}
      <section>
        <BannerSlider />
      </section>

      {/* Newsletter Section (placeholder for future use) */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get updates on new arrivals, special offers, and more.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 rounded-l-full border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-r-full hover:bg-red-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}


