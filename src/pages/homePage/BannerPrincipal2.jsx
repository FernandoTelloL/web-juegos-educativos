export const BannerPrincipal2 = () => {
  return (
    <section>
      <div className="relative h-96 mt-10">
        {/* Imagen de fondo con capa negra semitransparente */}
        <img
          src="../../../src/assets/img/homeImagenes/img13.jpg"
          alt="Imagen educativa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Texto sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-4">La Magia de Aprender</h1>
          <p className="text-lg max-w-2xl">
            Descubre el mundo de conocimiento y diversión en nuestra escuela, donde los sueños se convierten en realidad para cada niño.
          </p>
        </div>
      </div>
    </section>
  );
}
