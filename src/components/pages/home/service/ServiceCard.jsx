import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, price, img, _id } = service || {};
  console.log(img);
  console.log(service);
  return (
    <div className=" shadow-xl dark:shadow-sm dark:shadow-gray-300 p-5 rounded-xl">
      <img className="w-full h-[250px] rounded-xl" src={img} alt="" />
      <h3 className="text-2xl font-bold mt-5 mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#FF3811] mb-2">
          Price : ${price}
        </h3>
        <Link
          to={`/service/details/${_id}`}
          className="btn bg-transparent hover:bg-black/10 dark:hover:bg-white/10 border-none text-[#FF3811] transition duration-300 ease-in-out rounded-full"
        >
          <BsArrowRight className="w-7 h-7"></BsArrowRight>
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
