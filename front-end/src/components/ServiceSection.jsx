import services from "../assets/data/servicesData";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-in">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
