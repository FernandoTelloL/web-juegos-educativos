import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { CuadroColor } from './CuadroColor';
import { CuadroDestino } from './CuadroDestino';
import { FaRedo } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import correctoSonido from '../assets/sounds/juegoAsociacionColores/correcto.mp3';
import incorrectoSonido from '../assets/sounds/juegoAsociacionColores/incorrecto.mp3';
import winSonido from '../assets/sounds/juegoAsociacionColores/win.mp3';

export const JuegoAsociacionColores = () => {
  const [nivel, setNivel] = useState(1);
  const [colorSeleccionado, setColorSeleccionado] = useState(null);
  const [correcto, setCorrecto] = useState({});
  const [visibles, setVisibles] = useState([]);
  const [mostrarConfetti, setMostrarConfetti] = useState(false);
  const [cuadrosDestinoDesordenados, setCuadrosDestinoDesordenados] = useState([]);

  const obtenerColoresPorNivel = () => {
    switch (nivel) {
      case 1:
        return ['red', 'blue'];
      case 2:
        return ['red', 'blue', 'green', 'yellow'];
      case 3:
        return ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
      default:
        return ['red', 'blue'];
    }
  };

  const colores = obtenerColoresPorNivel();

  useEffect(() => {
    resetearJuego();
  }, [nivel]);

  const resetearJuego = () => {
    setVisibles(colores); // Asegura que todos los colores sean visibles al inicio
    setCorrecto({});
    setMostrarConfetti(false);

    // Desordenar los cuadros de destino
    setCuadrosDestinoDesordenados(colores.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    if (Object.keys(correcto).length === colores.length && Object.values(correcto).every((valor) => valor === true)) {
      // Si todos los cuadros están correctos
      setMostrarConfetti(true);
      reproducirSonido(winSonido);
    }
  }, [correcto]);

  const traduccionColores = {
    red: 'rojo',
    blue: 'azul',
    green: 'verde',
    yellow: 'amarillo',
    purple: 'morado',
    orange: 'naranja'
  };

  const manejarClickColor = (color) => {
    setColorSeleccionado(color);
  };

  const manejarDrop = (color) => {
    if (colorSeleccionado === color) {
      setCorrecto((prev) => ({ ...prev, [color]: true }));
      setVisibles((prev) => prev.filter((c) => c !== color)); // Elimina el color correctamente colocado
      reproducirSonido(correctoSonido);
    } else {
      reproducirSonido(incorrectoSonido);
    }
  };

  const reproducirSonido = (sonido) => {
    const audio = new Audio(sonido);
    audio.play();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Juego de Asociación de Colores</h1>
      <div className="flex mt-4">
        <button onClick={() => setNivel(1)} className="bg-blue-500 text-white px-4 py-2 m-2 rounded-lg transform transition-transform duration-300 hover:scale-105">
          Nivel 1
        </button>
        <button onClick={() => setNivel(2)} className="bg-blue-500 text-white px-4 py-2 m-2 rounded-lg transform transition-transform duration-300 hover:scale-105">
          Nivel 2
        </button>
        <button onClick={() => setNivel(3)} className="bg-blue-500 text-white px-4 py-2 m-2 rounded-lg transform transition-transform duration-300 hover:scale-105">
          Nivel 3
        </button>
        <button onClick={resetearJuego} className="bg-red-500 text-white px-4 py-2 m-2 rounded-lg transform transition-transform duration-300 hover:scale-105 flex items-center">
          <FaRedo className="mr-2" /> Reset
        </button>
      </div>

      <div className="flex">
        {visibles.map((color) => (
          <CuadroColor key={color} color={color} onClick={manejarClickColor} />
        ))}
      </div>
      <div className="flex mt-4 justify-center w-full">
        {cuadrosDestinoDesordenados.map((color) => (
          <CuadroDestino
            key={color}
            color={color}
            esCorrecto={correcto[color]}
            onDrop={() => manejarDrop(color)}
          />
        ))}
      </div>

      <div className="mt-4">
        {colorSeleccionado ? (
          <p className="text-lg">
            Seleccionaste: <span className="font-bold" style={{ color: colorSeleccionado }}>
              {traduccionColores[colorSeleccionado]}
            </span>
          </p>
        ) : (
          <p className="text-lg">Selecciona un color</p>
        )}
      </div>

      {mostrarConfetti && <Confetti />}
    </div>
  );
};
