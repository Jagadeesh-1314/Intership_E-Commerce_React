import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Store } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ModernShop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-indigo-600">Products</Link>
            <Link to="/categories" className="text-gray-600 hover:text-indigo-600">Categories</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
            
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-600 hover:text-indigo-600">
              <Search className="h-5 w-5" />
            </button>
            
            <Link to="/cart" className="relative text-gray-600 hover:text-indigo-600">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/products" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Products</Link>
            <Link to="/categories" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Categories</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</Link>
            <Link to="/cart" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Cart</Link>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}