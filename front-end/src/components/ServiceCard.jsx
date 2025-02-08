import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 flex flex-col h-full">
      <div className="mb-4 flex-grow">
        <img
          src={service.image} // Display the image
          alt={service.title}
          className="w-full h-40 object-contain rounded-md" // Use object-contain to keep the image readable
        />
      </div>
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-gray-700">{service.description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;
