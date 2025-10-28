"use client";

import Link from "next/link";
import { ShoppingCart, Heart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Electro
        </Link>

        {/* Search */}
        <div className="flex items-center bg-amber-50 rounded-full overflow-hidden w-100 mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 text-black bg-transparent outline-none"
          />
          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 h-full rounded-full">
            <Search size={18} /> Search
          </button>
        </div>


        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link href="/wishlist" className="flex items-center gap-2">
            <Heart size={20} /> Wishlist
          </Link>
          <Link href="/cart" className="flex items-center gap-2">
            <ShoppingCart size={20} /> Cart (3)
          </Link>
          <Link href="/account" className="flex items-center gap-2">
            <User size={20} /> Account
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800">
        <ul className="container mx-auto flex gap-6 py-3 px-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/deals">Hot Deals</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          <li><Link href="/laptops">Laptops</Link></li>
          <li><Link href="/smartphones">Smartphones</Link></li>
          <li><Link href="/cameras">Cameras</Link></li>
          <li><Link href="/accessories">Accessories</Link></li>
        </ul>
      </nav>
    </header>
  );
}
