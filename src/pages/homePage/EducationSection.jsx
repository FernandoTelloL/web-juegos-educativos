import { FaBook, FaChalkboardTeacher, FaGamepad } from 'react-icons/fa';

export const EducationSection = () => {
  return (
    <section className="">

      {/* SVG de Olas en la parte superior */}
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#fcb900" fillOpacity="1" d="M0,64L24,101.3C48,139,96,213,144,224C192,235,240,181,288,144C336,107,384,85,432,80C480,75,528,85,576,122.7C624,160,672,224,720,240C768,256,816,224,864,218.7C912,213,960,235,1008,229.3C1056,224,1104,192,1152,197.3C1200,203,1248,245,1296,240C1344,235,1392,181,1416,154.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center container px-2 md:w-[80%] mx-auto mt-11 mb-12">

        {/* Primer ítem */}
        <div className="flex flex-col items-center mt-8">
          <div className="bg-blue-500 text-white p-4 rounded-full">
            <FaBook size={40} />
          </div>
          <h2 className="text-xl font-bold mt-4">Aprender es Divertido</h2>
          <p className="mt-2 text-lg md:text-normal w-[70%] text-gray-600">
            Fomentamos el aprendizaje a través del juego, haciendo que los niños disfruten cada momento en la escuela.
          </p>
        </div>

        {/* Segundo ítem */}
        <div className="flex flex-col items-center mt-8">
          <div className="bg-green-500 text-white p-4 rounded-full">
            <FaChalkboardTeacher size={40} />
          </div>
          <h2 className="text-xl font-bold mt-4">Educación de Calidad</h2>
          <p className="mt-2 text-lg md:text-normal w-[70%] text-gray-600">
            Nuestros maestros están comprometidos con brindar la mejor educación a cada estudiante.
          </p>
        </div>

        {/* Tercer ítem */}
        <div className="flex flex-col items-center mt-8">
          <div className="bg-red-500 text-white p-4 rounded-full">
            <FaGamepad size={40} />
          </div>
          <h2 className="text-xl font-bold mt-4">Aprender Jugando</h2>
          <p className="mt-2 text-lg md:text-normal w-[70%] text-gray-600">
            Creemos en el poder del juego como una herramienta educativa para desarrollar habilidades clave.
          </p>
        </div>

      </div>
    </section>
  );
}
