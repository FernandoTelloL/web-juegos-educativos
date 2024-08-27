import Slider from 'react-slick';

const slides = [
  {
    src: '../../src/assets/img/img1.jpeg',
    title: 'El Poder de la Curiosidad Infantil',
    text: 'Los niños nos enseñan que la curiosidad es la llave que abre las puertas del conocimiento.',
    textoAlternativo: 'Los niños nos enseñan que la curiosidad es la llave que abre las puertas del conocimiento. Su capacidad de asombro es una poderosa herramienta de aprendizaje que los adultos no debemos olvidar.',
  },
  {
    src: '../../src/assets/img/img2.jpeg',
    title: 'Aprender Jugando, la Mejor Manera De Aprender',
    text: 'Jugar no es solo diversión, es una forma natural de aprender.',
    textoAlternativo: 'Jugar no es solo diversión; es una forma natural de aprender. A través del juego, los niños exploran, crean y descubren el mundo que los rodea, sentando las bases para el aprendizaje permanente.',
  },
  {
    src: '../../src/assets/img/img3.jpeg',
    title: 'Educar con Amor y Paciencia',
    text: 'La educación es más que libros y exámenes. Es guiar con amor y entender con paciencia.',
    textoAlternativo: 'La educación es más que libros y exámenes. Es guiar con amor, entender con paciencia, y sembrar las semillas del conocimiento en un suelo fértil de confianza y respeto.',
  },
  {
    src: '../../src/assets/img/img4.jpeg',
    title: 'El Juego: Un Puente hacia el Conocimiento',
    text: 'El juego es el puente que conecta la imaginación con la realidad y asi los niños aprenden cosas importantes para la vida.',
    textoAlternativo: 'El juego es el puente que conecta la imaginación con la realidad. A través de él, los niños no solo se divierten, sino que también desarrollan habilidades cruciales para la vida.',
  },
  {
    src: '../../src/assets/img/img5.jpeg',
    title: 'La Educación, un Viaje sin Fin',
    text: 'Aprender es un viaje que comienza en la infancia y nunca termina.',
    textoAlternativo: 'Aprender es un viaje que comienza en la infancia y nunca termina. Cada experiencia, cada juego, y cada lección son pasos que nos acercan a ser la mejor versión de nosotros mismos.',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: false,
};

export const HeroImage = () => {
  return (
    <div className="relative h-[300px] md:h-[500px] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full relative">
            <img
              src={slide.src}
              alt={`Hero Image ${index + 1}`}
              className="w-full object-cover h-[500px]"
            />
            {/* Capa negra semitransparente usando after */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-65 before:content-[''] flex items-start md:items-center justify-center">
              <div className="text-center z-10 flex flex-col justify-center items-center mt-8 md:mt-0">
                <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-4 w-[85%]">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white font-bold w-[80%] md:w-1/2">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
