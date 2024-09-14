import { ActivityCard } from "../../components";


export const MathGamesGrade2 = () => {
  // Array de objetos JSON con la información de los cards
  const games = [
    {
      title: "SUMA HASTA EL 10",
      description: "Aprende a sumar, en esta ciudad donde tendras que pasar desafios de sumas hasta el número 10.",
      image: "./../assets/img/grade1Imagenes/img14.png",
      link: "https://www.vedoque.com/juegos/matematicas/suma10/",
      border: true,
    },
    {
      title: "Resta Mágica",
      description: "Descubre el mundo de la resta.",
      image: "./../assets/img/homeImagenes/img11.png",
      link: "https://ejemplo.com/resta-magica",
      border: true,
    },
    {
      title: "Multiplicación Asombrosa",
      description: "Domina la multiplicación con facilidad.",
      image: "./../assets/img/homeImagenes/img12.png",
      link: "https://ejemplo.com/multiplicacion-asombrosa",
      border: true,
    },
    // Agrega más juegos si lo necesitas
  ];

  return (
    <>
      <h2 className="text-3xl md:text-2xl font-bold mb-6">MÁTEMATICAS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <ActivityCard
            key={index}
            title={game.title}
            description={game.description}
            image={game.image}
            link={game.link}
            border={game.border}
          />
        ))}
      </div>
    </>
  );
}
