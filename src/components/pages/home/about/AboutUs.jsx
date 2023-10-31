import image from "../../../../assets/images/about_us/person.jpg";
import image2 from "../../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-6 lg:gap-0 mt-16 lg:mt-32 mb-24 md:mb-20 lg:mb-48 font-Ubuntu"
    >
      <div className="flex-1 relative">
        <div className="w-[250px] md:w-[280px] lg:w-[350px] xl:w-[450px]">
          <img
            className="w-full h-full object-contain rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <img
          className="absolute w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px] top-28 left-28 md:left-40 md:top-40 lg:left-48 xl:top-52 xl:left-64 rounded-xl border-[8px] md:border-[10px] border-white"
          src={image2}
          alt=""
        />
      </div>
      <div className="flex-1 space-y-4 lg:space-y-7">
        <p className="text-xl font-bold text-[#FF3811]">About Us</p>
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
          We are qualified & of experience in this field
        </h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don&apos;t look even slightly
          believable.the majority have suffered alteration in some form, by
          injected humour, or randomized words which don&apos;t look even
          slightly believable.{" "}
        </p>
        <Link
          to={"/about"}
          className="btn btn-sm md:btn-md text-white hover:text-black dark:hover:text-gray-300 bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:bg-transparent font-Ubuntu font-bold md:text-lg normal-case"
        >
          Get More Info
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
