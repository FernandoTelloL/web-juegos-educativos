/* eslint-disable react/prop-types */

export const CuadroDestino = ({ color, esCorrecto, onDrop }) => {
  const colorTransparente = esCorrecto ? color : `rgba(${hexToRgb(color)}, 0.5)`;

  return (
    <div
      className={`w-24 h-24 m-2 rounded-lg border-4 ${esCorrecto ? 'border-green-500' : 'border-gray-300'}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      style={{ backgroundColor: colorTransparente }}
    >
    </div>
  );
};

// Helper function to convert color names to RGB
function hexToRgb(colorName) {
  const colors = {
    red: '255, 0, 0',
    blue: '0, 0, 255',
    green: '0, 128, 0',
    yellow: '255, 255, 0',
    purple: '128, 0, 128', // Agregado para purple
    orange: '255, 165, 0', // Agregado para orange
  };

  return colors[colorName];
}
