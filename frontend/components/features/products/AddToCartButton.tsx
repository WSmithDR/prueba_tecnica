"use client";

import { useState } from 'react';

export function AddToCartButton({ productId }: { productId: string }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      // Simulación de carga
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log(`Producto ${productId} agregado exitosamente`);
    } catch (error) {
      console.error("Error al agregar al carrito", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="w-full bg-[#0070f3] text-white py-2 px-4 font-semibold text-sm hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
    >
      {isAdding ? 'Agregando...' : 'Añadir al Carrito'}
    </button>
  );
}