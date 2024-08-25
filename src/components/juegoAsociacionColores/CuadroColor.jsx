/* eslint-disable react/prop-types */


export const CuadroColor = ({ color, onClick }) => {
  return (
    <div
      className={`w-24 h-24 m-2 cursor-pointer rounded-lg transform transition-transform duration-300 hover:scale-110`}
      style={{
        backgroundColor: color,
        opacity: 1, // Esto se mantendrá para cuadros no colocados
      }}
      draggable
      onDragStart={() => onClick(color)}
    >
    </div>
  );
};
