import { ProductCard } from './ProductCard';
import { Product } from './types';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-12 mb-20">
      <h2 className="text-[#0070f3] font-bold text-xl mb-6 uppercase tracking-wide">
        Productos Destacados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}