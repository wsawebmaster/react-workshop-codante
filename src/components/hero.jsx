function Hero() {
  return (
    <section className="min-h-screen bg-gray-100 py-40 text-gray-700" id="hero">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Encontre a Casa dos Seus Sonhos
            </h1>
            <p className="text-xl mb-8">
              Descubra o imóvel perfeito com a ReactImóveis
            </p>
            <button className="bg-emerald-400 hover:bg-emerald-300 text-white px-4 py-2 rounded-md">
              <a href="#imoveis">
                Ver imóveis
              </a>
            </button>
          </div>
          <div className="md:w-1/2 transform transition duration-300 hover:shadow-lg hover:shadow-emerald-200 hover:scale-105 cursor-pointer">
            <img
              src="/assets/hero.png"
              alt="Casa dos sonhos"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;