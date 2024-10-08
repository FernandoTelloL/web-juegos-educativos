import { ActivityCard } from "../../components"


export const MathGamesInitial = () => {
  return (
    <>
      <h2 className="text-3xl md:text-2xl font-bold mb-6">MÁTEMATICAS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActivityCard
          title="Suma Divertida"
          description="Aprende a sumar jugando."
          image="./../assets/img/homeImagenes/img10.png"
          link="https://ejemplo.com/suma-divertida"
          border={true}
        />

        <ActivityCard
          title="Resta Mágica"
          description="Descubre el mundo de la resta."
          image="./../assets/img/homeImagenes/img11.png"
          link="https://ejemplo.com/resta-magica"
          border={true}
        />

        <ActivityCard
          title="Resta Mágica"
          description="Descubre el mundo de la resta."
          image="./../assets/img/homeImagenes/img12.png"
          link="https://ejemplo.com/resta-magica"
          border={true}
        />
      </div>

    </>
  )
}
