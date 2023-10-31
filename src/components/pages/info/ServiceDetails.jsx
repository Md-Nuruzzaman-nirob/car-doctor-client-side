import { Link, useLoaderData, useParams } from "react-router-dom";
import bg from "../../../assets/images/checkout/checkout.png";
import icon from "../../../assets/icons/Frame (8).svg";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const services = useLoaderData();

  const filteredService = services?.find(
    (service) => service.service_id === id
  );

  const { description, facility, img, title, price, service_id } =
    filteredService || {};

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
      <div className="grid md:grid-cols-7 lg:grid-cols-3 gap-16 md:gap-6 mt-32 mb-16">
        <div className="md:col-span-4 lg:col-span-2">
          <img className="w-full rounded-xl" src={img} alt="" />
          <h3 className="mt-12 mb-8 text-3xl font-bold">{title}</h3>
          <p className="my-8">{description}</p>
          <div className="grid lg:grid-cols-2 gap-6">
            {facility.map((info, index) => (
              <div
                key={index}
                className="bg-[#F3F3F3] border-t-2 border-[#FF3811] rounded-xl p-8 xl:p-10 dark:bg-gray-800"
              >
                <h3 className="text-xl font-bold mb-1">{info.name}</h3>
                <hr />
                <p className="font-medium mt-3">{info.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 mb-12">{description}</p>

          <div className="">
            <h3>3 Simple Steps to Process</h3>
            <p className="my-8">{description}</p>
          </div>
        </div>

        <div className="md:col-span-3 lg:col-span-1 space-y-7">
          <div className="bg-[#F3F3F3] dark:bg-gray-800 p-5 space-y-5 rounded-xl">
            <h3 className="text-3xl font-bold">Services</h3>
            <div className="flex items-center justify-between hover:text-white bg-white hover:bg-[#FF3811] px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out dark:bg-gray-700 dark:hover:bg-[#FF3811]">
              <h3>Full Car Repair</h3>
              <small className="">
                <BsArrowRight className="w-7 h-7"></BsArrowRight>
              </small>
            </div>
            <div className="flex items-center justify-between hover:text-white bg-white hover:bg-[#FF3811] px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out dark:bg-gray-700 dark:hover:bg-[#FF3811]">
              <h3>Engine Repair</h3>
              <small className="">
                <BsArrowRight className="w-7 h-7"></BsArrowRight>
              </small>
            </div>
            <div className="flex items-center justify-between hover:text-white bg-white hover:bg-[#FF3811] px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out dark:bg-gray-700 dark:hover:bg-[#FF3811]">
              <h3>Automatic Services</h3>
              <small className="">
                <BsArrowRight className="w-7 h-7"></BsArrowRight>
              </small>
            </div>
            <div className="flex items-center justify-between hover:text-white bg-white hover:bg-[#FF3811] px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out dark:bg-gray-700 dark:hover:bg-[#FF3811]">
              <h3>Engine Oil Change</h3>
              <small className="">
                <BsArrowRight className="w-7 h-7"></BsArrowRight>
              </small>
            </div>
            <div className="flex items-center justify-between hover:text-white bg-white hover:bg-[#FF3811] px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out dark:bg-gray-700 dark:hover:bg-[#FF3811]">
              <h3>Battery Charge</h3>
              <small className="">
                <BsArrowRight className="w-7 h-7"></BsArrowRight>
              </small>
            </div>
          </div>

          <div className="bg-black p-5 space-y-5 text-white rounded-xl">
            <h3 className="text-3xl font-bold">Download</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={icon} alt="" />
                <div className="">
                  <h3 className="text-lg font-medium">Our Brochure</h3>
                  <h3 className="opacity-60">Download</h3>
                </div>
              </div>
              <div>
                <button className="btn bg-transparent hover:bg-white/20 dark:hover:bg-white/20 border-none text-[#FF3811] transition duration-300 ease-in-out rounded-full">
                  {" "}
                  <BsArrowRight className="w-7 h-7"></BsArrowRight>
                </button>
              </div>
            </div>
          </div>
          <h3 className="my-7 text-3xl font-bold">Price : ${price}</h3>
          <Link to={`/Checkout/${service_id}`}>
            <button className="btn btn-sm md:btn-md w-full text-white hover:text-black dark:hover:text-gray-300 bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:bg-transparent font-Ubuntu font-bold md:text-lg normal-case my-7">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
