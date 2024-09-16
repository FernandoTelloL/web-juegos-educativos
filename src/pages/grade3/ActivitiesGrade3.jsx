import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export const ActivitiesGrade3 = () => {
  const [categorySelected, setCategorySelected] = useState(false);

  const categoriesList = [
    {
      id: 1,
      title: "Matemáticas",
      link: "matematicas-grade2",
      bgColor: "bg-blue-500",
      bgColorHover: "bg-blue-600",
    },
    {
      id: 2,
      title: "Comunicación",
      link: "comunicacion-grade2",
      bgColor: "bg-green-500",
      bgColorHover: "bg-green-600",
    },
    {
      id: 3,
      title: "Otros",
      link: "otros-grade1",
      bgColor: "bg-yellow-500",
      bgColorHover: "bg-yellow-600",
    },
    {
      id: 4,
      title: "Entretenimiento",
      link: "entretenimiento-grade1",
      bgColor: "bg-red-500",
      bgColorHover: "bg-red-600",
    },
  ];

  const handleClick = () => {
    setCategorySelected(true);
  };

  return (
    <section className="my-32 container mx-auto px-4 md:w-[80%]">

      {/* Lista de botones de categorías de actividades */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {categoriesList.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className={`menu-button ${category.bgColor} hover:${category.bgColorHover} rounded-lg text-white py-3 px-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105`}
            onClick={handleClick}
            style={{ textDecoration: "none" }}
            >
              {category.title}
            </Link>
        ))}
      </div>


      {/* Subtítulo o contenido del Outlet */}
      <div className="mt-10">
        {!categorySelected && (
          <div className="border-2 border-black rounded-xl p-8 md:p-14 h-52 md:h-60 flex items-center shadow-xl bg-blue-100">
            <h2 className="text-xl md:text-3xl text-center font-bold">
              POR FAVOR ELIJA UNA CATEGORIA PARA VISUALIZAR LAS ACTIVIDADES EDUCATIVAS
            </h2>
          </div>
        )}
        <Outlet />
      </div>
    </section>
  );
}
