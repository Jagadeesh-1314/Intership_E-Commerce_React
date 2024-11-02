import { Link } from 'react-router-dom';
import { Smartphone, Watch, Headphones, Camera, Laptop } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Smartphones',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80',
    link: '/products?category=smartphones',
  },
  {
    id: 2,
    name: 'Smartwatches',
    icon: Watch,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80',
    link: '/products?category=smartwatches',
  },
  {
    id: 3,
    name: 'Headphones',
    icon: Headphones,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80',
    link: '/products?category=headphones',
  },
  {
    id: 4,
    name: 'Cameras',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80',
    link: '/products?category=cameras',
  },
  {
    id: 5,
    name: 'Laptops',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80',
    link: '/products?category=laptops',
  },
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <category.icon className="w-8 h-8 mb-2" />
              <h3 className="text-lg font-semibold text-center">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}