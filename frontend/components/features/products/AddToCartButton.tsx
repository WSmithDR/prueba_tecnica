"use client";

import { useState } from 'react';

export function AddToCartButton({ productId }: { productId: string }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    try {
      // Aquí iría tu lógica real: fetch a tu API de carrito, mutación, etc.
      // Simulamos una espera de 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
    >
      {isAdding ? 'Agregando...' : 'Agregar al carrito'}
    </button>
  );
}