
import { ActivityCard } from "../../components";
import { usePagination } from "../../hooks/usePagination"; // Ruta del hook
import { PaginationControls } from '../../components/PaginationControls'; // Importa el componente de paginación

export const AllGrade4 = () => {
  // Array de objetos JSON con la información de los cards
  const games = [
    {
      id: 1,
      title: "Ayuda a Don Sapo",
      description:
        "Don sapo quiere cruzar el camino pero necesita tu ayuda, usando sucesiones de números de 2 puedes ayudarlo a cruzar el camino.",
      image: "./../assets/img/grade1Imagenes/img6.png",
      link: "https://arbolabcgames.top/M57BC/",
      border: true,
    },
    {
      id: 2,
      title: "Bingo de Sumas",
      description:
        "Juega este divertido bingo, logra alinear 3 estrellas y rescata a los peces usando las matemáticas y lograr pasar al siguiente bingo. Es un juego corto pero divertido.",
      image: "./../assets/img/grade1Imagenes/img2.png",
      link: "https://www.educaenvivo.com/juegos-educativos-online/bingo-sumas/",
      border: true,
    },
    {
      id: 3,
      title: "Crea tu Calabaza",
      description: "Ejercita tu imaginación y crea a tu amiga calabaza a tu gusto.",
      image: "./../assets/img/grade1Imagenes/img20.png",
      link: "https://cdn.primarygames.com/HTML5/MakeAPumpkin/",
      border: true,
    },
    {
      id: 4,
      title: "Suma con Pinguinos",
      description:
        "Diviertete y practica tus habilidades de suma con los pinguinos. dales de comer acertando en los resultados, puedes elegir entre diferentes niveles.",
      image: "./../assets/img/grade1Imagenes/img4.png",
      link: "https://www.sheppardsoftware.com/math/addition/penguin-party-game/",
      border: true,
    },
    {
      id: 5,
      title: "Suma de Animales de la Primavera",
      description:
        "Ayudanos a saber cuantos animales de la primavera hay en tu zona, practica tus habilidades de suma y diviertete.",
      image: "./../assets/img/grade1Imagenes/img5.png",
      link: "https://www.cokitos.com/contar-en-primavera-con-los-animales/play/",
      border: true,
    },
    {
      id: 6,
      title: "Suma de Monedas",
      description:
        "Practica tus habilidades de suma, tendras que elegir las monedas correctas hasta obtener el monto requerido, tambien puedes borrar las monedas haciendo click sobre ellas.",
      image: "./../assets/img/grade1Imagenes/img1.png",
      link: "https://www.educaenvivo.com/juegos-educativos-online/juego-euros-online-primaria/",
      border: true,
    },
    {
      id: 7,
      title: "Números Pares e Impares",
      description: "Juega a adivinar números pares e impares y obten el mayor número de puntos, revienta solo los globos correctos y aprende divirtiendote.",
      image: "./../assets/img/grade1Imagenes/img3.png",
      link: "https://www.educaenvivo.com/juegos-educativos-online/numeros-pares-e-impares/",
      border: true,
    },
    {
      id: 8,
      title: "Suma con Pinguinos",
      description: "Diviertete y practica tus habilidades de suma con los pinguinos. dales de comer acertando en los resultados, puedes elegir entre diferentes niveles.",
      image: "./../assets/img/grade1Imagenes/img4.png",
      link: "https://www.sheppardsoftware.com/math/addition/penguin-party-game/",
      border: true,
    },
    {
      id: 9,
      title: "Suma de Animales de la Primavera",
      description: "Ayudanos a saber cuantos animales de la primavera hay en tu zona, practica tus habilidades de suma y diviertete.",
      image: "./../assets/img/grade1Imagenes/img5.png",
      link: "https://www.cokitos.com/contar-en-primavera-con-los-animales/play/",
      border: true,
    },
    {
      id: 10,
      title: "Suma de Monedas",
      description: "Practica tus habilidades de suma, tendras que elegir las monedas correctas hasta obtener el monto requerido, tambien puedes borrar las monedas haciendo click sobre ellas.",
      image: "./../assets/img/grade1Imagenes/img1.png",
      link: "https://www.educaenvivo.com/juegos-educativos-online/juego-euros-online-primaria/",
      border: true,
    },
    {
      id: 11,
      title: "Escribe las Vocales que Faltan",
      description: "Escribe las vocales que faltan y escribe correctamente los nombres de los animales, practica tus habilidades de escritura y diviertete.",
      image: "./../assets/img/grade1Imagenes/img14.png",
      link: "https://genmagic.net/visualflash.html?id=vd1c",
      border: true,
    },
    {
      id: 12,
      title: "Encuentra las Letras Escondidas",
      description: "Encuentra las letras que estan escondidas en la imagen, hazlo más rapido que tus compañeros y diviertete.",
      image: "./../assets/img/grade1Imagenes/img15.png",
      link: "https://www.cokitos.com/buscar-letras-escondidas-con-animales/play/",
      border: true,
    },
    {
      id: 13,
      title: "Encuentra huesos con Fido",
      description: "Ayuda a Fido a atrapar todos los huesos y seguir avanzando de nivel, tambien tienes que ordenar las silabas de unas palabras para que Fido pueda seguir en su búsqueda.",
      image: "./../assets/img/grade1Imagenes/img16.png",
      link: "https://arbolabcgames.top/F37A/",
      border: true,
    },
    {
      id: 14,
      title: "Atrapa al Topo",
      description: "Un juego rapido en donde debes hacer click únicamente en los topos que tienen una vocal, al final se premiará a los alumnos que tengan más puntos.",
      image: "./../assets/img/grade1Imagenes/img17.png",
      link: "https://www.cokitos.com/golpea-las-vocales-con-los-topos/play/",
      border: true,
    },
    {
      id: 15,
      title: "Puzzle Mágico",
      description: 'Mejora tus concentración jugando a armar este puzzle de forma rápida y divertida. Asi desarrollarás tus habilidades de memoria y concentración.', 
      image: "./../assets/img/grade1Imagenes/img18.png",
      link: 'https://genmagic.net/visualflash.html?id=tripuzzle1c',
      border: true,
    },
    {
      id: 16,
      title: "Completa el Rompecabezas",
      description: "Usa tus conocimientos en el abecedario para poder armar el rompecabezas, eligiendo las letras correctas en los espacios restantes.", 
      image: "./../assets/img/grade1Imagenes/img19.png",
      link: "https://www.digipuzzle.net/digipuzzle/animals/puzzles/tilesmath_alphabet.htm?language=spanish&linkback=../../../es/juegoseducativos/alfabeto/index.htm",
      border: true,
    },
    {
      id: 17,
      title: "Escoge las Palabras Según sus Sílabas",
      description: "Selecciona las palabras que tengan la cantidad indicada de silabas, utiliza el click y acumula más puntos que tus compañeros.",
      image: "./../assets/img/grade2-imagenes/img39.png",
      link: "https://www.mundoprimaria.com/juegos-educativos/jueg-len-grm-13",
      border: true,
    },
    {
      id: 18,
      title: "Ordena Silabas con el Señor Ratón",
      description: "Ordena las silabas que faltan y ayuda a que el señor ratón llegue a su destino, diviertete y practica tus habilidades con las palabras.",
      image: "./../assets/img/grade1Imagenes/img7.png",
      link: "https://arbolabcgames.top/L34AB/",
      border: true,
    },
    {
      id: 19,
      title: "Colorea por Letas",
      description: "Colorea diferentes dibujos utilizando los colores de la letra, practica tus habilidades de coloración y abecedario divirtiendote.",
      image: "./../assets/img/grade1Imagenes/img9.png",
      link: "https://www.cokitos.com/colorear-por-letras/play/",
      border: true,
    },
    {
      id: 20,
      title: "Busca Letras",
      description: "Encuentra las letras que se te pide y obtiene mas puntos que tus amigos, diviertete y aprendre el abecedario.",
      image: "./../assets/img/grade1Imagenes/img10.png",
      link: "https://www.cokitos.com/juego-buscar-letras-educativo/play/",
      border: true,
    },
    {
      id: 21,
      title: "Encuentra Animales y sus Iniciales",
      description: "Diviertete encontrando la pareja de los animales y sus iniciales, desarrolla tu memoria y concentración, desbloquea más niveles que tus compañeros.",
      image: "./../assets/img/grade1Imagenes/img11.png",
      link: "https://www.cokitos.com/iniciales-de-animales/play/",
      border: true,
    },
    {
      id: 22,
      title: "Une Puntos y descrubre el secreto",
      description: "Une los puntos siguiendo las letras en orden alfabético y descubre que personaje se esconde, hazlo más rápido que tus compañeros y demuestra tus habilidades.",
      image: "./../assets/img/grade1Imagenes/img12.png",
      link: "https://www.cokitos.com/letras-para-unir-con-puntos/play/",
      border: true,
    },
    {
      id: 23,
      title: "Vocales en las Nubes",
      description: "Usa las flechas del teclado para obtener todas las nubes con vocales, hazlo en el menor tiempo posible, al final se comparará con tus compañeros y se creará un ranking.",
      image: "./../assets/img/grade1Imagenes/img13.png",
      link: "https://www.cokitos.com/vocales-en-las-nubes-atrapa-la-vocal/play/",
      border: true,
    },
    {
      id: 24,
      title: "Números Pares e Impares",
      description:
        "Juega a adivinar números pares e impares y obten el mayor número de puntos, revienta solo los globos correctos y aprende divirtiendote.",
      image: "./../assets/img/grade1Imagenes/img3.png",
      link: "https://www.educaenvivo.com/juegos-educativos-online/numeros-pares-e-impares/",
      border: true,
    },
    {
      id: 25,
      title: "Rebasa los obstáculos",
      description: "Utiliza solo las flechas para atras y adelante y barra espaciadora para maniobrar tu auto y lograr evadir los obstáculos. Anímate a desarrollar tus habilidades de coordinación entre el ojo y la mano.", 
      image: "./../assets/img/grade1Imagenes/img21.png",
      link: "https://www.digisnacks.net/games/famobi/endless_truck.htm?language=english&linkback=../../index.htm",
      border: true,
    },
    {
      id: 26,
      title: "Colorea Como Quieras",
      description: "Es momento de hacer estallar tu imaginación, colorea las imagenes a tu gusto y diviertete.",
      image: "./../assets/img/grade1Imagenes/img22.png",
      link: "https://www.digipuzzle.net//minigames/draw/kindergarten_snack.htm?language=english&linkback=http://www.digisnacks.net/creativity/index.htm",
      border: true,
    },
    {
      id: 27,
      title: "LLeva a la Madre con su Hijo",
      description: "Haz click sobre la madre y arrástrala hasta el hijo, completa todas las imágenes y pasa al siguiente nivel. Este juego te permite desarrollar tus habilidades de memoria y concentración.",
      image: "./../assets/img/grade1Imagenes/img23.png",
      link: "https://www.digipuzzle.net/digipuzzle/animals/puzzles/linkpuzzle_animals_young_old.htm?language=spanish&linkback=../../../es/juegoseducativos/primavera/index.htm",
      border: true,
    },
    {
      id: 28,
      title: "Ordena las Letras en el Bus",
      description: 'Ordena las palabras den las diferentes ventanas de los buses, desarrolla tu imaginación y habilidades con las palabras.', 
      image: "./../assets/img/grade1Imagenes/img24.png",
      link: 'https://www.vedoque.com/juegos/letras/autobus-palabras/',
      border: true,
    },
    {
      id: 29,
      title: "Ordena los Números y Descubre al Dinosaurio",
      description: "Utiliza tus habilidades matemáticas para ordenar los números rápidamente y descrubre que dinosaurio esta escondido.", 
      image: "./../assets/img/grade1Imagenes/img25.png",
      link: "https://www.digipuzzle.net/minigames/rows/number_rows.htm?language=spanish&linkback=../../es/juegoseducativos/infantil/index.htm",
      border: true,
    },
  ];

  const itemsPerPage = 48; // Número de juegos a mostrar por página
  const { currentItems, currentPage, maxPage, nextPage, prevPage } =
    usePagination(itemsPerPage, games);

  return (
    <>
      <h2 className="text-3xl md:text-2xl font-bold mb-6">TODAS LAS CATEGORÍAS 4° GRADO</h2>

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
