interface ProductInfoProps {
  name: string;
  brand: string;
  price: number;
}

export function ProductInfo({ name, brand, price }: ProductInfoProps) {
  return (
    <div className="mb-3">
      <h3 className="font-bold text-lg leading-tight mb-1 text-black line-clamp-2">
        {name}
      </h3>
      <p className="text-gray-500 text-xs mb-3">{brand}</p>
      <p className="text-[#0070f3] font-bold text-lg">
        ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
      </p>
    </div>
  );
}