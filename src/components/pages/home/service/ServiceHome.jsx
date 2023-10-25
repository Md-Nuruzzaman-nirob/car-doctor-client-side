import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";

const ServiceHome = ({ services }) => {
  return (
    <div className="">
      <div className="space-y-3 lg:space-y-5 text-center">
        <p className="text-xl font-bold text-[#FF3811]">Service</p>
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
          Our Service Area
        </h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

ServiceHome.propTypes = {
  services: PropTypes.array.isRequired,
};
export default ServiceHome;
