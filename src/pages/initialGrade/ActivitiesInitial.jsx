import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export const ActivitiesInitial = () => {
  const [categorySelected, setCategorySelected] = useState(false);

  const handleClick = () => {
    setCategorySelected(true);
  };

  return (
    <section className="my-32 container mx-auto px-4 md:w-[80%]">

      {/* Lista de botones de categorías de actividades */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <Link
          to="matematicas-initial"
          className="menu-button bg-blue-500 hover:bg-blue-600 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          onClick={handleClick}
        >
          Matemáticas
        </Link>
        <Link
          to="comunicacion-initial"
          className="menu-button bg-green-500 hover:bg-green-600 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          onClick={handleClick}
        >
          Comunicación
        </Link>
        <Link
          to="memoria-initial"
          className="menu-button bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          onClick={handleClick}
        >
          Memoria
        </Link>
        <Link
          to="concentracion-initial"
          className="menu-button bg-red-500 hover:bg-red-600 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          onClick={handleClick}
        >
          Concentración
        </Link>
      </div>

      {/* Subtítulo o contenido del Outlet */}
      <div className="mt-10">
        {!categorySelected && (
          <div className="border-2 border-black rounded-xl p-8 md:p-14 h-52 md:h-60 flex items-center shadow-xl bg-yellow-100">
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
