

export const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white h-[250px] md:h-[200px]">
      <div className="container flex flex-col md:flex-row justify-center md:justify-between items-center w-[80%] h-full mx-auto">
        {/* Primera columna: Insignia del colegio, nombre y número */}
        <div className="flex items-center mb-4 mt-8 md:mt-0 md:mb-0 gap-3">
          <img
            src="./../assets/img/insignia-colegio.png" // Cambia esto por la ruta de la imagen de la insignia
            alt="Insignia del Colegio"
            className="w-20 h-auto object-cover"
          />
          <div className="text-center">
            <p className="text-base font-bold">I.E. EL PORVENIR - PATIVILCA</p>
            <p className="font-bold text-base">N° 20832</p>
          </div>
        </div>

        {/* Segunda columna: Texto sobre la página web educativa */}
        <div className="text-center md:text-left md:w-[60%] md:flex md:flex-col items-center mb-8 md:mb-0">
          <p className="text-base">Página web educativa desarrollada por el <span className="font-bold"> Aula de Innovación Pedagógica (AIP)</span></p>
          <p>2024</p>
        </div>
      </div>
    </footer>
  );
};
