import Slider from 'react-slick';

const slides = [
  {
    src: '../../src/assets/img/img1.jpeg',
    title: 'Título 1',
    text: 'Este es el párrafo para la imagen 1.',
  },
  {
    src: '../../src/assets/img/img2.jpeg',
    title: 'Título 2',
    text: 'Este es el párrafo para la imagen 2.',
  },
  {
    src: '../../src/assets/img/img3.jpeg',
    title: 'Título 3',
    text: 'Este es el párrafo para la imagen 3.',
  },
  {
    src: '../../src/assets/img/img4.jpeg',
    title: 'Título 4',
    text: 'Este es el párrafo para la imagen 4.',
  },
  {
    src: '../../src/assets/img/img5.jpeg',
    title: 'Título 5',
    text: 'Este es el párrafo para la imagen 5.',
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
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-50 before:content-[''] flex items-center justify-center">
              <div className="text-center z-10">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white">
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
