
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import { AllGrade5 } from "./AllGrade5";

export const ActivitiesGrade5 = () => {
  
  const location = useLocation(); // Para obtener la ruta actual

  const categoriesList = [
    {
      id: 1,
      title: "Todo",
      link: "todo-grade5",
      bgColor: "bg-orange-500",
      bgColorHover: "bg-orange-600",
    },
    {
      id: 2,
      title: "Matemáticas",
      link: "matematicas-grade5",
      bgColor: "bg-blue-500",
      bgColorHover: "bg-blue-600",
    },
    {
      id: 3,
      title: "Comunicación",
      link: "comunicacion-grade5",
      bgColor: "bg-green-500",
      bgColorHover: "bg-green-600",
    },
    {
      id: 4,
      title: "Otros",
      link: "otros-grade5",
      bgColor: "bg-yellow-500",
      bgColorHover: "bg-yellow-600",
    },
    {
      id: 5,
      title: "Entretenimiento",
      link: "entretenimiento-grade5",
      bgColor: "bg-red-500",
      bgColorHover: "bg-red-600",
    },
  ];

  const isTodoRoute = location.pathname === "/grade-5" || location.pathname.includes("todo-grade5");

  return (
    <section className="my-32 container mx-auto px-4 md:w-[80%]">

      {/* Lista de botones de categorías de actividades */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {categoriesList.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className={` ${category.bgColor} hover:${category.bgColorHover} shadow-lg  hover:shadow-black/60 shadow-black/40 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105`}
            style={{ textDecoration: "none" }}
          >
            {category.title}
          </Link>
        ))}
      </div>


       {/* Mostrar AllGrade2 o el Outlet según la ruta */}
       <div className="mt-10">
        {isTodoRoute ? (
          // Mostrar TodoGrade1 si la ruta es "todo-grade1" o al iniciar en "/grade-1"
          <AllGrade5 />
        ) : (
          // Mostrar el Outlet si la ruta es cualquier otra
          <Outlet />
        )}
      </div>
    </section>
  );
}
