export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p>Electro is your trusted e-commerce platform for gadgets and accessories.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>Laptops</li>
            <li>Smartphones</li>
            <li>Cameras</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>View Cart</li>
            <li>Wishlist</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p>1734 Stonecoal Road</p>
          <p>+021-95-51-84</p>
          <p>email@email.com</p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Electro. All rights reserved.
      </div>
    </footer>
  );
}
