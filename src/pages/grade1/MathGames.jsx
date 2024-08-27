import { ActivityCard } from "../../components";


export const MathGames = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ActivityCard 
        title="Suma Divertida"
        description="Aprende a sumar jugando."
        image="/path/to/image1.jpg"
        link="https://ejemplo.com/suma-divertida"
      />
      <ActivityCard 
        title="Resta Mágica"
        description="Descubre el mundo de la resta."
        image="/path/to/image2.jpg"
        link="https://ejemplo.com/resta-magica"
      />
      {/* Agrega más juegos aquí */}
    </div>
  );
};
