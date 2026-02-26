import { Product } from './types';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { AddToCartButton } from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <ProductImage src={product.image} alt={product.name} />
      
      <div className="p-4 flex flex-col flex-grow">
        <ProductInfo name={product.name} price={product.price} />
        
        {/* El mt-auto empuja el botón siempre al fondo de la tarjeta */}
        <div className="mt-auto">
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </article>
  );
}