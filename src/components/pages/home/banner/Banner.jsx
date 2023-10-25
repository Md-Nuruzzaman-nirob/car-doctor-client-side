import { useState } from "react";
import banner from "../../../../assets/images/homeCarousel/1.jpg";
import banner2 from "../../../../assets/images/homeCarousel/2.jpg";
import banner3 from "../../../../assets/images/homeCarousel/3.jpg";
import banner4 from "../../../../assets/images/homeCarousel/4.jpg";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";

const images = [banner, banner2, banner3, banner4];

const bannerContent = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "Get your car serviced by our expert technicians at affordable prices.",
  },
  {
    title: "Quality Repairs and Maintenance",
    description:
      "We provide high-quality repairs and maintenance to keep your car in top condition.",
  },
  {
    title: "Very Fast and Reliable Service",
    description:
      "Experience fast and reliable service that you can trust for your car.",
  },
  {
    title: "Customer Satisfaction Guaranteed",
    description:
      "We are committed to ensuring customer satisfaction with every service we offer.",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + +images.length) % images.length);
  };

  return (
    <div className="relative font-Ubuntu">
      <button
        onClick={prevSlide}
        className="absolute w-8 h-8 md:w-12 md:h-12 bottom-0 md:bottom-5 right-[50%] md:right-28 lg:bottom-10 lg:right-40 flex items-center justify-center transform -translate-y-1/2 text-[#FF3811] hover:text-white bg-opacity-20 bg-white hover:bg-[#FF3811] z-10 rounded-full transition duration-300 ease-in-out"
      >
        <HiArrowSmallLeft className="w-5 h-5 md:h-8 md:w-8"></HiArrowSmallLeft>
      </button>
      <button
        onClick={nextSlide}
        className="absolute w-8 h-8 md:w-12 md:h-12 bottom-0 md:bottom-5 right-[40%] md:right-10 lg:bottom-10 lg:right-20 flex items-center justify-center transform -translate-y-1/2 text-[#FF3811] hover:text-white bg-opacity-20 bg-white hover:bg-[#FF3811] z-10 rounded-full transition duration-300 ease-in-out"
      >
        <HiArrowSmallRight className="w-5 h-5 md:h-8 md:w-8"></HiArrowSmallRight>
      </button>
      <div className="w-full overflow-hidden rounded-xl">
        <div
          className="flex"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            transition: "transform 0.8s ease",
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative bg-black">
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-full overflow-hidden opacity-60"
              />
              <div className="absolute top-5 md:top-1/4 lg:top-1/3 left-5 md:left-14 lg:left-20 text-white z-20">
                <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-10/12 md:w-8/12">
                  {bannerContent[index].title}
                </h3>
                <p className="mt-2 mb-3 md:mt-4 md:mb-5 lg:mb-8 text-xs md:text-xl font-light w-10/12">
                  {bannerContent[index].description}
                </p>
                <div className="flex items-center gap-5">
                  <button className="btn btn-sm md:btn-md text-white bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:bg-transparent font-Ubuntu font-bold md:text-lg normal-case">
                    Discover More
                  </button>

                  <button className="btn btn-sm md:btn-md text-white bg-transparent border-[#FF3811] hover:border-[#FF3811] hover:bg-[#FF3811] font-Ubuntu font-bold md:text-lg normal-case">
                    <a href="#aboutUs">Latest Project</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
