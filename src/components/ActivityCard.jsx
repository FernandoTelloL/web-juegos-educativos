/* eslint-disable react/prop-types */
export const ActivityCard = ({ title, description, image, link, border = false }) => {
  return (
    <a
      target="_blank"
      href={link}
      className={`group block rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-110 bg-white p-4 ${border ? 'border border-gray-400' : 'border-none'}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="my-3">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </a>
  );
};
