export function HeroSection() {
  return (
    <section className="relative h-[400px] w-full flex items-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight max-w-2xl leading-tight">
          EQUIPA TU NEGOCIO.<br/>POTENCIA TUS IDEAS.
        </h1>
      </div>
    </section>
  );
}