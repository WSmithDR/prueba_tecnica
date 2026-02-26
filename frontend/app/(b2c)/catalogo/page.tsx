export default function CatalogoPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-800">Catálogo de Equipamiento</h2>
        {/* Aquí irán los filtros avanzados más adelante */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Filtros
        </button>
      </div>

      {/* Grid de productos temporal */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition">
            <div className="h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400">
              Imagen del Producto
            </div>
            <h3 className="font-semibold text-lg">Freidora Industrial {item}</h3>
            <p className="text-gray-500 text-sm mb-2">Marca Ejemplo</p>
            <p className="text-blue-600 font-bold text-xl">$1,299.00</p>
            <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition">
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}