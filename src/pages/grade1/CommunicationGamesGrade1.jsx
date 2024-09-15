import { ActivityCard } from "../../components";
import { usePagination } from "../../hooks/usePagination"; // Ruta del hook
import { PaginationControls } from '../../components/PaginationControls'; // Importa el componente de paginación


export const CommunicationGamesGrade1 = () => {

  // Array de objetos JSON con la información de los cards
  const games = [
    {
      id: 1,
      title: "Ordena Silabas con el Señor Ratón",
      description: "Ordena las silabas que faltan y ayuda a que el señor ratón llegue a su destino, diviertete y practica tus habilidades con las palabras.",
      image: "./../assets/img/grade1Imagenes/img7.png",
      link: "https://arbolabcgames.top/L34AB/",
      border: true,
    },
    {
      id: 2,
      title: "Colorea por Letas",
      description: "Colorea diferentes dibujos utilizando los colores de la letra, practica tus habilidades de coloración y abecedario divirtiendote.",
      image: "./../assets/img/grade1Imagenes/img9.png",
      link: "https://www.cokitos.com/colorear-por-letras/play/",
      border: true,
    },
    {
      id: 3,
      title: "Busca Letras",
      description: "Encuentra las letras que se te pide y obtiene mas puntos que tus amigos, diviertete y aprendre el abecedario.",
      image: "./../assets/img/grade1Imagenes/img10.png",
      link: "https://www.cokitos.com/juego-buscar-letras-educativo/play/",
      border: true,
    },
    {
      id: 4,
      title: "Encuentra Animales y sus Iniciales",
      description: "Diviertete encontrando la pareja de los animales y sus iniciales, desarrolla tu memoria y concentración, desbloquea más niveles que tus compañeros.",
      image: "./../assets/img/grade1Imagenes/img11.png",
      link: "https://www.cokitos.com/iniciales-de-animales/play/",
      border: true,
    },
    {
      id: 5,
      title: "Une Puntos y descrubre el secreto",
      description: "Une los puntos siguiendo las letras en orden alfabético y descubre que personaje se esconde, hazlo más rápido que tus compañeros y demuestra tus habilidades.",
      image: "./../assets/img/grade1Imagenes/img12.png",
      link: "https://www.cokitos.com/letras-para-unir-con-puntos/play/",
      border: true,
    },
    {
      id: 6,
      title: "Vocales en las Nubes",
      description: "Usa las flechas del teclado para obtener todas las nubes con vocales, hazlo en el menor tiempo posible, al final se comparará con tus compañeros y se creará un ranking.",
      image: "./../assets/img/grade1Imagenes/img13.png",
      link: "https://www.cokitos.com/vocales-en-las-nubes-atrapa-la-vocal/play/",
      border: true,
    },
  ];

  const itemsPerPage = 6; // Número de juegos a mostrar por página
  const { currentItems, currentPage, maxPage, nextPage, prevPage } = usePagination(itemsPerPage, games);

  return (
    <>
      <h2 className="text-3xl md:text-2xl font-bold mb-6">COMUNICACIÓN</h2>

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
