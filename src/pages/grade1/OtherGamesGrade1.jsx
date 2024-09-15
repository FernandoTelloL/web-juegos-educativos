import { ActivityCard } from "../../components";
import { PaginationControls } from "../../components/PaginationControls";
import { usePagination } from "../../hooks/usePagination";

export const OtherGamesGrade1 = () => {

  // Array de objetos JSON con la información de los cards
  const games = [
    {
      id: 1,
      title: "Escribe las Vocales que Faltan",
      description: "Escribe las vocales que faltan y escribe correctamente los nombres de los animales, practica tus habilidades de escritura y diviertete.",
      image: "./../assets/img/grade1Imagenes/img14.png",
      link: "https://genmagic.net/visualflash.html?id=vd1c",
      border: true,
    },
    {
      id: 2,
      title: "Encuentra las Letras Escondidas",
      description: "Encuentra las letras que estan escondidas en la imagen, hazlo más rapido que tus compañeros y diviertete.",
      image: "./../assets/img/grade1Imagenes/img15.png",
      link: "https://www.cokitos.com/buscar-letras-escondidas-con-animales/play/",
      border: true,
    },
    {
      id: 3,
      title: "Encuentra huesos con Fido",
      description: "Ayuda a Fido a atrapar todos los huesos y seguir avanzando de nivel, tambien tienes que ordenar las silabas de unas palabras para que Fido pueda seguir en su búsqueda.",
      image: "./../assets/img/grade1Imagenes/img16.png",
      link: "https://arbolabcgames.top/F37A/",
      border: true,
    },
    {
      id: 4,
      title: "Atrapa al Topo",
      description: "Un juego rapido en donde debes hacer click únicamente en los topos que tienen una vocal, al final se premiará a los alumnos que tengan más puntos.",
      image: "./../assets/img/grade1Imagenes/img17.png",
      link: "https://www.cokitos.com/golpea-las-vocales-con-los-topos/play/",
      border: true,
    },
    {
      id: 5,
      title: "Puzzle Mágico",
      description: 'Mejora tus concentración jugando a armar este puzzle de forma rápida y divertida. Asi desarrollarás tus habilidades de memoria y concentración.', 
      image: "./../assets/img/grade1Imagenes/img18.png",
      link: 'https://genmagic.net/visualflash.html?id=tripuzzle1c',
      border: true,
    },
    {
      id: 6,
      title: "Completa el Rompecabezas",
      description: "Usa tus conocimientos en el abecedario para poder armar el rompecabezas, eligiendo las letras correctas en los espacios restantes.", 
      image: "./../assets/img/grade1Imagenes/img19.png",
      link: "https://www.digipuzzle.net/digipuzzle/animals/puzzles/tilesmath_alphabet.htm?language=spanish&linkback=../../../es/juegoseducativos/alfabeto/index.htm",
      border: true,
    },
  ];

  const itemsPerPage = 6; // Número de juegos a mostrar por página
  const { currentItems, currentPage, maxPage, nextPage, prevPage } = usePagination(itemsPerPage, games);

  return (
    <>
      <h2 className="text-3xl md:text-2xl font-bold mb-6">OTROS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
