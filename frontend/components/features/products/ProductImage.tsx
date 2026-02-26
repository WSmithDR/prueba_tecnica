import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center p-4">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        /* Placeholder temporal si no hay imagen */
        <div className="w-24 h-24 bg-gray-300"></div>
      )}
    </div>
  );
}