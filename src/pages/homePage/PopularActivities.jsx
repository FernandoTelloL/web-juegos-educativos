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
    <section className="mx-auto bg-pastel-orange-dark">
      <div className="container md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
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
    </section>
  )
}
