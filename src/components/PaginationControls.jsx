/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const PaginationControls = ({ currentPage, maxPage, prevPage, nextPage }) => {
  return (
    <div className="mt-6 flex justify-between items-center">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaArrowLeft className="mr-2" />
        Anterior
      </button>

      <span>
        Página {currentPage} de {maxPage}
      </span>

      <button
        onClick={nextPage}
        disabled={currentPage === maxPage}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Siguiente
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};
