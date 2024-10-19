import { ActivityCard } from "../../components";
import { PaginationControls } from "../../components/PaginationControls";
import { usePagination } from "../../hooks/usePagination";


export const EntertainmentGrade2 = () => {
  
  // Array de objetos JSON con la información de los cards
  const games = [
    {
      id: 1,
      title: "Crea tu Calabaza",
      description: "Ejercita tu imaginación y crea a tu amiga calabaza a tu gusto.",
      image: "./../assets/img/grade1Imagenes/img20.png",
      link: "https://cdn.primarygames.com/HTML5/MakeAPumpkin/",
      border: true,
    },
    {
      id: 2,
      title: "Rebasa los obstáculos",
      description: "Utiliza solo las flechas para atras y adelante y barra espaciadora para maniobrar tu auto y lograr evadir los obstáculos. Anímate a desarrollar tus habilidades de coordinación entre el ojo y la mano.", 
      image: "./../assets/img/grade1Imagenes/img21.png",
      link: "https://www.digisnacks.net/games/famobi/endless_truck.htm?language=english&linkback=../../index.htm",
      border: true,
    },
    {
      id: 3,
      title: "Colorea Como Quieras",
      description: "Es momento de hacer estallar tu imaginación, colorea las imagenes a tu gusto y diviertete.",
      image: "./../assets/img/grade1Imagenes/img22.png",
      link: "https://www.digipuzzle.net//minigames/draw/kindergarten_snack.htm?language=english&linkback=http://www.digisnacks.net/creativity/index.htm",
      border: true,
    },
    {
      id: 4,
      title: "LLeva a la Madre con su Hijo",
      description: "Haz click sobre la madre y arrástrala hasta el hijo, completa todas las imágenes y pasa al siguiente nivel. Este juego te permite desarrollar tus habilidades de memoria y concentración.",
      image: "./../assets/img/grade1Imagenes/img23.png",
      link: "https://www.digipuzzle.net/digipuzzle/animals/puzzles/linkpuzzle_animals_young_old.htm?language=spanish&linkback=../../../es/juegoseducativos/primavera/index.htm",
      border: true,
    },
    {
      id: 5,
      title: "Ordena las Letras en el Bus",
      description: 'Ordena las palabras den las diferentes ventanas de los buses, desarrolla tu imaginación y habilidades con las palabras.', 
      image: "./../assets/img/grade1Imagenes/img24.png",
      link: 'https://www.vedoque.com/juegos/letras/autobus-palabras/',
      border: true,
    },
    {
      id: 6,
      title: "Ordena los Números y Descubre al Dinosaurio",
      description: "Utiliza tus habilidades matemáticas para ordenar los números rápidamente y descrubre que dinosaurio esta escondido.", 
      image: "./../assets/img/grade1Imagenes/img25.png",
      link: "https://www.digipuzzle.net/minigames/rows/number_rows.htm?language=spanish&linkback=../../es/juegoseducativos/infantil/index.htm",
      border: true,
    },
  ];

  const itemsPerPage = 48; // Número de juegos a mostrar por página
  const { currentItems, currentPage, maxPage, nextPage, prevPage } = usePagination(itemsPerPage, games);

  return (
    <>
      <h2 className="text-3xl md:text-2xl font-bold mb-6">ENTRETENIMIENTO 2 GRADO</h2>

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
