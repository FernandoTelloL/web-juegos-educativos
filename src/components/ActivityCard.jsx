/* eslint-disable react/prop-types */
export const ActivityCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      className="group block rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 bg-white"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  )
}
