interface ProductInfoProps {
  name: string;
  price: number;
}

export function ProductInfo({ name, price }: ProductInfoProps) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h3>
      <p className="text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
    </div>
  );
}