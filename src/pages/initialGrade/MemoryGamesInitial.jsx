import { ActivityCard } from "../../components"

export const MemoryGamesInitial = () => {
  return (
    <>
      <h2 className="text-3xl md:text-2xl font-bold mb-6">MEMORIA</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActivityCard
          title="Suma Divertida"
          description="Aprende a sumar jugando."
          image="../../../src/assets/img/homeImagenes/img7.png"
          link="https://ejemplo.com/suma-divertida"
          border={true}
        />

        <ActivityCard
          title="Resta Mágica"
          description="Descubre el mundo de la resta."
          image="../../../src/assets/img/homeImagenes/img8.png"
          link="https://ejemplo.com/resta-magica"
          border={true}
        />

        <ActivityCard
          title="Resta Mágica"
          description="Descubre el mundo de la resta."
          image="../../../src/assets/img/homeImagenes/img9.png"
          link="https://ejemplo.com/resta-magica"
          border={true}
        />
      </div>

    </>
  )
}
