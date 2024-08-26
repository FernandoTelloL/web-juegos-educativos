export const BannerPrincipal2 = () => {
  return (
    <section className="relative">
      {/* Banner con imagen de fondo */}
      <div className="relative h-[42rem] overflow-hidden">
        {/* Imagen de fondo con capa negra semitransparente */}
        <img
          src="../../../src/assets/img/homeImagenes/img13.jpg"
          alt="Imagen educativa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Texto sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-4">La Magia de Aprender</h1>
          <p className="text-lg max-w-2xl">
            Descubre el mundo de conocimiento y diversión en nuestra escuela, donde los sueños se convierten en realidad para cada niño.
          </p>
        </div>
      </div>

      {/* Forma ondulada en la parte superior */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 160" 
          className="w-full h-auto"
        >
          <path
            fill="#fff"
            d="M0,80L48,90.7C96,101,192,123,288,138.7C384,155,480,165,576,153.3C672,142,768,109,864,93.3C960,80,1056,80,1152,88C1248,96,1344,112,1392,120L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
}
