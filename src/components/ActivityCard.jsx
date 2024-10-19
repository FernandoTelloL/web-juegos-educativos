import { useHoverSound } from "../hooks/useHoverSound";

/* eslint-disable react/prop-types */
export const ActivityCard = ({ title, description, image, link, border = false }) => {

  const hoverSound = useHoverSound('../../assets/sounds/retro-laser.mp3');

  return (
    <a
      target="_blank"
      href={link}
      className={`p-1 group block rounded-lg overflow-hidden relative transform transition-transform duration-300 hover:scale-110 bg-white ${border ? 'border border-gray-400' : 'border-none'} shadow-lg shadow-black/40 hover:shadow-lg hover:shadow-black/40 `}
      onMouseEnter={hoverSound}
      rel="noopener noreferrer"
    >
      {/* Imagen de fondo */}
      <div className="rounded-lg w-full h-48 sm:h-40 lg:h-32 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-70" style={{ backgroundImage: `url(${image})` }}>
      </div>
      {/* Título debajo de la imagen */}
      <div className="text-center flex justify-center items-center p-1">
        <h3 className="text-xs font-extrabold text-gray-900 mt-2">{title}</h3>
      </div>
      {/* Descripción que aparece al hacer hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white  font-bold text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2 text-center">
        <p>{description}</p>
      </div>
    </a>
  );
};
