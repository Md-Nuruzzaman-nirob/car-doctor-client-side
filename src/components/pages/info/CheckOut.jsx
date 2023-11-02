import { useEffect } from "react";
import bg from "../../../assets/images/checkout/checkout.png";
import { useLoaderData, useParams } from "react-router-dom";

const CheckOut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const services = useLoaderData();

  const filteredService = services?.find(
    (service) => service.service_id === id
  );

  const { img, title, price } = filteredService || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const addProduct = {
      firstName,
      lastName,
      phone,
      email,
      message,
      img,
      title,
      price,
    };

    fetch("https://car-doctor-server-seven-coral.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Order successfully");
      });
  };
  return (
    <div className="min-h-screen">
      <div className="relative h-[130px] md:h-[300px] bg-black rounded-xl">
        <img className="w-full h-full opacity-50 rounded-xl" src={bg} alt="" />
        <h3 className="absolute top-1/2 left-5 md:left-16 -translate-y-1/2 text-xl md:text-4xl text-white font-bold">
          Check Out
        </h3>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 border-[#FF3811] border-b-[30px] border-x-[15px]   md:border-b-[50px] md:border-x-[25px] border-x-transparent w-48 md:w-72"></div>
        <h3 className="absolute left-1/2 bottom-1 md:bottom-3 transform -translate-x-1/2 text-sm md:text-xl font-medium text-white">
          Home/Checkout
        </h3>
      </div>

      <div className="px-4 md:px-10 lg:px-16 xl:px-28 py-10 md:py-16 lg:py-20 bg-[#F3F3F3] dark:bg-black mb-16 md:mb-20 lg:mb-28 rounded-xl mt-32">
        <div className="text-5xl font-bold text-center mb-10">
          <p className="text-xl font-medium">order for :</p>
          <h3>{title}</h3>
        </div>
        <form onSubmit={handleSubmit} className="font-medium font-Ubuntu">
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#FF3811] focus-bg-[#feffff] outline-none dark:bg-gray-800 dark:text-[#feffff] dark:border-gray-800 dark:focus:border-[#feffff]"
                placeholder="First Name"
                required
              />
            </div>

            <div className="w-1/2 ml-2">
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#FF3811] focus-bg-[#feffff] outline-none dark:bg-gray-800 dark:text-[#feffff] dark:border-gray-800 dark:focus:border-[#feffff]"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#FF3811] focus-bg-[#feffff] outline-none dark:bg-gray-800 dark:text-[#feffff] dark:border-gray-800 dark:focus:border-[#feffff]"
                placeholder="Your Phone"
              />
            </div>
            <div className="w-1/2 ml-2">
              <input
                type="email"
                id="email"
                name="email"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#FF3811] focus-bg-[#feffff] outline-none dark:bg-gray-800 dark:text-[#feffff] dark:border-gray-800 dark:focus:border-[#feffff]"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              className="rounded-md w-full h-60 px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#FF3811] overflow-hidden outline-none dark:bg-gray-800 dark:text-[#feffff] dark:border-gray-800 dark:focus:border-[#feffff]"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-sm md:btn-md w-full text-white hover:text-black dark:hover:text-gray-300 bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:bg-transparent font-Ubuntu font-bold md:text-lg normal-case"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
