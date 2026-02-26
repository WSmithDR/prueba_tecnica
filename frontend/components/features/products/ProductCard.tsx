// components/features/products/ProductCard.tsx
import { Product } from './types';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { AddToCartButton } from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white text-black p-5 flex flex-col justify-between hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200">
      <ProductImage src={product.image} alt={product.name} />
      
      <div className="flex flex-col flex-grow mt-4">
        <ProductInfo name={product.name} brand={product.brand} price={product.price} />
        
        <div className="mt-auto pt-4">
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </article>
  );
}