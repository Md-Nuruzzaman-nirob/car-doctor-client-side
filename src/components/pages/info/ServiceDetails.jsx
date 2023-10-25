import { useLoaderData, useParams } from "react-router-dom";
import bg from "../../../assets/images/checkout/checkout.png";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();

  const filteredService = services?.find((service) => service._id === id);

  const {} = filteredService || {};
  console.log(filteredService);
  return (
    <div className="min-h-screen">
      <div className="relative h-[130px] md:h-[300px] bg-black rounded-xl">
        <img className="w-full h-full opacity-50 rounded-xl" src={bg} alt="" />
        <h3 className="absolute top-1/2 left-5 md:left-16 -translate-y-1/2 text-xl md:text-4xl text-white font-bold">
          Service Details
        </h3>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 border-[#FF3811] border-b-[30px] border-x-[15px]   md:border-b-[50px] md:border-x-[25px] border-x-transparent w-48 md:w-72"></div>
        <h3 className="absolute left-1/2 bottom-1 md:bottom-3 transform -translate-x-1/2 text-sm md:text-xl font-medium text-white">
          Home/Service Details
        </h3>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ServiceDetails;
