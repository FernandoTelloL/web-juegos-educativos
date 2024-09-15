import { ActivityCard } from "../../components"

export const PopularActivities = () => {
  const activities = [
    {
      id: 1,
      title: 'Viste a la Princesa',
      description: 'Multiplica para lograr vestir a la princesa con todos sus trajes, diviertete aprendiendo.',
      image: './assets/img/homeImagenes/img10.png',
      link: 'https://www.digipuzzle.net/minigames/decorate/topmodel/topmodel_multiplications.htm?language=spanish&linkback=../../../es/juegoseducativos/mates-multiplicaciones/index.htm'
    },
    {
      id: 2,
      title: 'Máquina de Calcular Sumas',
      description: 'Ejercita tu mente con sumas fáciles',
      image: './assets/img/homeImagenes/img8.png',
      link: 'https://genmagic.net/visualflash.html?id=ser3c'
    },
    {
      id: 3,
      title: 'Crea tu Calabaza',
      description: 'Ejercita tu imaginación y crea a tu amiga calabaza a tu gusto.',
      image: './assets/img/homeImagenes/img9.png',
      link: 'https://cdn.primarygames.com/HTML5/MakeAPumpkin/'
    },
    {
      id: 4,
      title: 'Puzzle de Animales y Fracciones',
      description: 'Practica y aprende fracciones jugando, solo jala la imagen a la fracción correcta para ir ganando puntos.',
      image: './assets/img/homeImagenes/img11.png',
      link: 'https://www.digipuzzle.net/digipuzzle/animals/puzzles/tilesmath_fractions.htm?language=spanish&linkback=../../../es/juegoseducativos/mates-fracciones/index.htm'
    },
    {
      id: 5,
      title: 'Ordena Alfabeticamente',
      description: 'Ordena alfabéticamente una lista de palabras y practica el abecedario.',
      image: './assets/img/homeImagenes/img12.png',
      link: 'https://genmagic.net/visualflash.html?id=ordalfa1c'
    },
    {
      id: 6,
      title: 'Juego de Puzzle',
      description: 'Mejora tus concentración jugando.',
      image: './assets/img/homeImagenes/img7.png',
      link: 'https://genmagic.net/visualflash.html?id=tripuzzle1c'
    },
    {
      id: 7,
      title: 'Pato Multiplicador',
      description: 'Resuelve las operaciones de multiplicación antes que termine el tiempo y logra que el pato recorra toda la ciudad y gane el premio.',
      image: './assets/img/homeImagenes/img14.png',
      link: 'https://www.educaenvivo.com/juegos-educativos-online/pato-multiplicador/'
    },
    {
      id: 8,
      title: 'La Carrera de las Ranas',
      description: 'Elige entre suma, resta, multiplicación y división para lograr que las ranas lleguen a la meta según la velocidad de tus respuestas.', 
      image: './assets/img/homeImagenes/img15.png',
      link: 'https://www.vedoque.com/juegos/matematicas/carreraranas/'
    },
    {
      id: 9,
      title: 'El Avión de las Palabras',
      description: 'Dirige el avión a las palabras que le corresponden ya sea aguda, grave o llana y esdrújula logrando que llegue a la meta según la velocidad de tus respuestas.',
      image: './assets/img/homeImagenes/img16.png',
      link: 'https://wordwall.net/es/resource/8869766/palabras-esdr%C3%BAjulas-llanas-y-agudas'
    },
  ]

  return (
    <section className="relative mx-auto bg-[#fcb900] pt-8 md:pt-14">
      <div className="container md:w-[80%] mx-auto px-4 py-8">
        <h2 className="text-left text-2xl font-bold mb-10">
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
