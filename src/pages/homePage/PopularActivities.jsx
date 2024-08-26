import { ActivityCard } from "../../components"

export const PopularActivities = () => {
  const activities = [
    {
      id: 1,
      title: 'Juego de Matemáticas',
      description: 'Mejora tus habilidades matemáticas jugando.',
      image: 'ruta/a/imagen1.jpg',
      link: '/juego-matematicas'
    },
    {
      id: 2,
      title: 'Aventura de Ciencia',
      description: 'Explora el mundo de la ciencia.',
      image: 'ruta/a/imagen2.jpg',
      link: '/aventura-ciencia'
    },
    {
      id: 3,
      title: 'Juego de Palabras',
      description: 'Amplía tu vocabulario mientras juegas.',
      image: 'ruta/a/imagen3.jpg',
      link: '/juego-palabras'
    },
    {
      id: 4,
      title: 'Música Divertida',
      description: 'Aprende música de forma divertida.',
      image: 'ruta/a/imagen4.jpg',
      link: '/musica-divertida'
    },
    {
      id: 5,
      title: 'Historia Interactiva',
      description: 'Viaja en el tiempo y descubre la historia.',
      image: 'ruta/a/imagen5.jpg',
      link: '/historia-interactiva'
    },
    {
      id: 6,
      title: 'Juego de Geografía',
      description: 'Conoce el mundo jugando.',
      image: 'ruta/a/imagen6.jpg',
      link: '/juego-geografia'
    }
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
