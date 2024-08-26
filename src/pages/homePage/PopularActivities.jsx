import { ActivityCard } from "../../components"

export const PopularActivities = () => {
  const activities = [
    {
      id: 1,
      title: 'Viste a la Princesa',
      description: 'Multiplica para lograr vestir a la princesa con todos sus vestidos.',
      image: '../../../src/assets/img/homeImagenes/img10.png',
      link: 'https://www.digipuzzle.net/minigames/decorate/topmodel/topmodel_multiplications.htm?language=spanish&linkback=../../../es/juegoseducativos/mates-multiplicaciones/index.htm'
    },
    {
      id: 2,
      title: 'Máquina de Calcular',
      description: 'Ejercita tu mente con sumas fáciles',
      image: '../../../src/assets/img/homeImagenes/img8.png',
      link: 'https://genmagic.net/visualflash.html?id=ser3c'
    },
    {
      id: 3,
      title: 'Crea tu Calabaza',
      description: 'Ejercita tu imaginación y crea a tu amiga calabaza a tu gusto.',
      image: '../../../src/assets/img/homeImagenes/img9.png',
      link: 'https://cdn.primarygames.com/HTML5/MakeAPumpkin/'
    },
    
    {
      id: 4,
      title: 'Puzzle de Animales y Fracciones',
      description: 'Practica y aprende fracciones jugando, solo jala la imagen a la fracción correcta para ir ganando puntos.',
      image: '../../../src/assets/img/homeImagenes/img11.png',
      link: 'https://www.digipuzzle.net/digipuzzle/animals/puzzles/tilesmath_fractions.htm?language=spanish&linkback=../../../es/juegoseducativos/mates-fracciones/index.htm'
    },
    {
      id: 5,
      title: 'Ordena Alfabeticamente',
      description: 'Ordena alfabéticamente una lista de palabras y practica el abecedario.',
      image: '../../../src/assets/img/homeImagenes/img12.png',
      link: 'https://genmagic.net/visualflash.html?id=ordalfa1c'
    },
    {
      id: 6,
      title: 'Juego de Puzzle',
      description: 'Mejora tus concentración jugando.',
      image: '../../../src/assets/img/homeImagenes/img7.png',
      link: 'https://genmagic.net/visualflash.html?id=tripuzzle1c'
    },
  ]

  return (
    <section className="relative mx-auto bg-pastel-orange-dark">
      <div className="container md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-left text-2xl font-bold mb-8">
          Actividades Más Populares
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map(activity => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
              image={activity.image}
              link={activity.link}
            />
          ))}
        </div>
      </div>
      
      {/* SVG de Olas */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffa337"
            fillOpacity="1"
            d="M0,64L24,101.3C48,139,96,213,144,224C192,235,240,181,288,144C336,107,384,85,432,80C480,75,528,85,576,122.7C624,160,672,224,720,240C768,256,816,224,864,218.7C912,213,960,235,1008,229.3C1056,224,1104,192,1152,197.3C1200,203,1248,245,1296,240C1344,235,1392,181,1416,154.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  )
}
