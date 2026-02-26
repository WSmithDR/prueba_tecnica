import { HeroSection } from '@/components/features/home/HeroSection';
import { ProductGrid } from '@/components/features/products/ProductGrid';
import { Product } from '@/components/features/products/types';
import productsData from '@/mocks/products.json'; 

const mockProducts: Product[] = productsData as Product[];

export default function CatalogoPage() {
  return (
    <div className="w-full bg-[#0a0f16]">
      <HeroSection />
      
      <ProductGrid products={mockProducts} />
    </div>
  );
}