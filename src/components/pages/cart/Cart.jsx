import { useLoaderData } from "react-router-dom";
import bg from "../../../assets/images/checkout/checkout.png";

const Cart = () => {
  const ordersData = useLoaderData();

  return (
    <div className="min-h-screen">
      <div className="relative h-[130px] md:h-[300px] bg-black rounded-xl">
        <img className="w-full h-full opacity-50 rounded-xl" src={bg} alt="" />
        <h3 className="absolute top-1/2 left-5 md:left-16 -translate-y-1/2 text-xl md:text-4xl text-white font-bold">
          Cart Details
        </h3>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 border-[#FF3811] border-b-[30px] border-x-[15px]   md:border-b-[50px] md:border-x-[25px] border-x-transparent w-28  md:w-48"></div>
        <h3 className="absolute left-1/2 bottom-1 md:bottom-3 transform -translate-x-1/2 text-sm md:text-xl font-medium text-white">
          Cart
        </h3>
      </div>
      <div className="overflow-x-auto my-20">
        <table className="table pl-0 pr-0 ml-0 mr-0 mx-0 px-0">
          <tbody>
            {ordersData.map((singleData) => (
              <tr key={singleData._id} className="">
                <th>
                  <label>
                    <button className="btn btn-circle btn-outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask w-36 h-36 rounded-xl">
                        <img src={singleData?.img} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{singleData.title}</h3>
                      <p className="text-sm opacity-50">United States</p>
                    </div>
                  </div>
                </td>
                <td className="text-lg lg:text-xl font-bold">
                  Price : {singleData.price}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
