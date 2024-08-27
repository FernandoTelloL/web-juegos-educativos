import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"


export const ActivitiesGrade1 = () => {
  return (
    <section className="my-32 container mx-auto px-4 md:w-[80%]">
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <Link to="matematicas" className="menu-button bg-blue-500 hover:bg-blue-400 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-colors duration-300">Matemáticas</Link>
        <Link to="comunicacion" className="menu-button bg-green-500 hover:bg-green-400 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-colors duration-300">Comunicación</Link>
        <Link to="memoria" className="menu-button bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-colors duration-300">Memoria</Link>
        <Link to="concentracion" className="menu-button bg-red-500 hover:bg-red-400 rounded-lg text-white py-3 px-6 text-lg font-semibold transition-colors duration-300">Concentración</Link>
      </div>

      {/* Aquí se mostrará el componente correspondiente al juego seleccionado */}
      <div className="mt-10">
        <Outlet />
      </div>
    </section>
  )
}