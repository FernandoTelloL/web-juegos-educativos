import { ActivityCard } from "../../components";
import { PaginationControls } from "../../components/PaginationControls";
import { usePagination } from "../../hooks/usePagination";


export const MathGamesGrade6 = () => {
 // Array de objetos JSON con la información de los cards
const games = [
  {
    id: 1,
    title: 'Viste a la Princesa',
    description: 'Multiplica para lograr vestir a la princesa con todos sus trajes, aprende jugando.',
    image: './../assets/img/grade2-imagenes/img26.png',
    link: 'https://www.digipuzzle.net/minigames/decorate/topmodel/topmodel_multiplications.htm?language=spanish&linkback=../../../es/juegoseducativos/mates-multiplicaciones/index.htm'
  },
  {
    id: 2,
    title: 'Máquina de Calcular Sumas',
    description: 'Ejercita tu mente con sumas fáciles, gana puntos y queda en el primer lugar de tu salón.',
    image: './../assets/img/grade2-imagenes/img27.png',
    link: 'https://genmagic.net/visualflash.html?id=ser3c'
  },
  {
    id: 3,
    title: "Ayuda a Don Sapo",
    description: "Don sapo quiere cruzar el camino pero necesita tu ayuda, usando sucesiones de números de 2 puedes ayudarlo a cruzar el camino.",
    image: "./../assets/img/grade2-imagenes/img29.png",
    link: "https://arbolabcgames.top/M57BC/",
    border: true,
  },
  {
    id: 4,
    title: 'Puzzle de Animales y Fracciones',
    description: 'Practica y aprende fracciones jugando, solo jala la imagen a la fracción correcta para ir ganando puntos.',
    image: './../assets/img/grade2-imagenes/img28.png',
    link: 'https://www.digipuzzle.net/digipuzzle/animals/puzzles/tilesmath_fractions.htm?language=spanish&linkback=../../../es/juegoseducativos/mates-fracciones/index.htm'
  },
  {
    id: 5,
    title: 'Pato Multiplicador',
    description: 'Resuelve las operaciones de multiplicación antes que termine el tiempo y logra que el pato recorra toda la ciudad y gane el premio.',
    image: './../assets/img/grade2-imagenes/img35.png',
    link: 'https://www.educaenvivo.com/juegos-educativos-online/pato-multiplicador/'
  },
  {
    id: 6,
    title: 'La Carrera de las Ranas',
    description: 'Elige entre suma, resta, multiplicación y división para lograr que las ranas lleguen a la meta según la velocidad de tus respuestas.', 
    image: './../assets/img/grade2-imagenes/img36.png',
    link: 'https://www.vedoque.com/juegos/matematicas/carreraranas/'
  },
  {
    id: 7,
    title: "Bingo de Sumas",
    description: "Juega este divertido bingo, logra alinear 3 estrellas y rescata a los peces usando las matemáticas y lograr pasar al siguiente bingo. Es un juego corto pero divertido.",
    image: "./../assets/img/grade2-imagenes/img30.png",
    link: "https://www.educaenvivo.com/juegos-educativos-online/bingo-sumas/",
    border: true,
  },
  {
    id: 8,
    title: "La Carrera de las Sumas",
    description: "Termina los niveles mucho más rapido que tus compañeros y demuestra tus habilidades de suma, mueve el auto con el click del ratón.", 
    image: "./../assets/img/grade2-imagenes/img38.png",
    link: "https://www.digipuzzle.net/minigames/mathracer/mathracer_additions.htm?language=spanish&linkback=../../es/juegoseducativos/mates-hasta-20/index.htm",
    border: true,
  },
  {
    id: 9,
    title: "Números Pares e Impares",
    description: "Juega a adivinar números pares e impares y obten el mayor número de puntos, revienta solo los globos correctos y aprende divirtiendote.",
    image: "./../assets/img/grade2-imagenes/img31.png",
    link: "https://www.educaenvivo.com/juegos-educativos-online/numeros-pares-e-impares/",
    border: true,
  },
  {
    id: 10,
    title: "Suma con Pinguinos",
    description: "Diviertete y practica tus habilidades de suma con los pinguinos. dales de comer acertando en los resultados, puedes elegir entre diferentes niveles.",
    image: "./../assets/img/grade2-imagenes/img32.png",
    link: "https://www.sheppardsoftware.com/math/addition/penguin-party-game/",
    border: true,
  },
  {
    id: 11,
    title: "Suma de Animales de la Primavera",
    description: "Ayudanos a saber cuantos animales de la primavera hay en tu zona, practica tus habilidades de suma y diviertete.",
    image: "./../assets/img/grade2-imagenes/img33.png",
    link: "https://www.cokitos.com/contar-en-primavera-con-los-animales/play/",
    border: true,
  },
  {
    id: 12,
    title: "Suma de Monedas",
    description: "Practica tus habilidades de suma, tendras que elegir las monedas correctas hasta obtener el monto requerido, tambien puedes borrar las monedas haciendo click sobre ellas.",
    image: "./../assets/img/grade2-imagenes/img34.png",
    link: "https://www.educaenvivo.com/juegos-educativos-online/juego-euros-online-primaria/",
    border: true,
  },
];

const itemsPerPage = 48; // Número de juegos a mostrar por página
const { currentItems, currentPage, maxPage, nextPage, prevPage } = usePagination(itemsPerPage, games);

return (
  <>
    <h2 className="text-3xl md:text-2xl font-bold mb-6">MÁTEMATICAS 6° GRADO</h2>

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
}
