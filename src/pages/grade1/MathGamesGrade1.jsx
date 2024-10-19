import { ActivityCard } from "../../components";
import { usePagination } from "../../hooks/usePagination"; // Ruta del hook
import { PaginationControls } from '../../components/PaginationControls'; // Importa el componente de paginación

export const MathGamesGrade1 = () => {
  // Array de objetos JSON con la información de los cards
  const games = [
    {
      id: 1,
      title: "Ayuda a Don Sapo",
      description: "Don sapo quiere cruzar el camino pero necesita tu ayuda, usando sucesiones de números de 2 puedes ayudarlo a cruzar el camino.",
      image: "./../assets/img/grade1Imagenes/img6.png",
      link: "https://arbolabcgames.top/M57BC/",
      border: true,
    },
    {
      id: 2,
      title: "Bingo de Sumas",
      description: "Juega este divertido bingo, logra alinear 3 estrellas y rescata a los peces usando las matemáticas y lograr pasar al siguiente bingo. Es un juego corto pero divertido.",
      image: "./../assets/img/grade1Imagenes/img2.png",
      link: "https://www.educaenvivo.com/juegos-educativos-online/bingo-sumas/",
      border: true,
    },
    {
      id: 3,
      title: "Números Pares e Impares",
      description: "Juega a adivinar números pares e impares y obten el mayor número de puntos, revienta solo los globos correctos y aprende divirtiendote.",
      image: "./../assets/img/grade1Imagenes/img3.png",
      link: "https://www.educaenvivo.com/juegos-educativos-online/numeros-pares-e-impares/",
      border: true,
    },
    {
      id: 4,
      title: "Suma con Pinguinos",
      description: "Diviertete y practica tus habilidades de suma con los pinguinos. dales de comer acertando en los resultados, puedes elegir entre diferentes niveles.",
      image: "./../assets/img/grade1Imagenes/img4.png",
      link: "https://www.sheppardsoftware.com/math/addition/penguin-party-game/",
      border: true,
    },
    {
      id: 5,
      title: "Suma de Animales de la Primavera",
      description: "Ayudanos a saber cuantos animales de la primavera hay en tu zona, practica tus habilidades de suma y diviertete.",
      image: "./../assets/img/grade1Imagenes/img5.png",
      link: "https://www.cokitos.com/contar-en-primavera-con-los-animales/play/",
      border: true,
    },
    {
      id: 6,
      title: "Suma de Monedas",
      description: "Practica tus habilidades de suma, tendras que elegir las monedas correctas hasta obtener el monto requerido, tambien puedes borrar las monedas haciendo click sobre ellas.",
      image: "./../assets/img/grade1Imagenes/img1.png",
      link: "https://www.educaenvivo.com/juegos-educativos-online/juego-euros-online-primaria/",
      border: true,
    },
  ];

  const itemsPerPage = 48; // Número de juegos a mostrar por página
  const { currentItems, currentPage, maxPage, nextPage, prevPage } = usePagination(itemsPerPage, games);

  return (
    <>
      <h2 className="text-3xl md:text-2xl font-bold mb-6">MÁTEMATICAS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {currentItems.map((game) => (
          <ActivityCard
            key={game.id}
            title={game.title}
            description={game.description}
            image={game.image}
            link={game.link}
            border={game.border}
          />
        ))}
      </div>

      {/* Componente de paginación reutilizable */}
      <PaginationControls
        currentPage={currentPage}
        maxPage={maxPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};
