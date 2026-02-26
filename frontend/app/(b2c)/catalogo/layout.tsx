export default function B2CLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Aquí irá tu Navbar B2C con el Carrito */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">GFS Equipment</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-600 font-medium">
              <li>Catálogo</li>
              <li>Nosotros</li>
              <li>Ingresar (B2B)</li>
              <li className="text-blue-600">Carrito (0)</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Contenido dinámico de las páginas (Catálogo, Checkout, etc.) */}
      <main className="flex-grow max-w-7xl mx-auto w-full p-4">
        {children}
      </main>

      {/* Footer Público */}
      <footer className="bg-gray-900 text-white p-6 text-center mt-auto">
        <p>© 2026 GFS Restaurant Equipment & More. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}