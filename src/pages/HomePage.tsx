import HeroSlider from '../components/home/HeroSlider';
import CategorySection from '../components/home/CategorySection';
import LatestProducts from '../components/home/LatestProducts';
import Features from '../components/home/Features';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSlider />
      <CategorySection />
      <LatestProducts />
      <Features />
    </div>
  );
}