import icon1 from "../../../../assets/icons/001-timetable@3x.png";
import icon2 from "../../../../assets/icons/Group 34@2x.png";
import icon3 from "../../../../assets/icons/Group 35@2x.png";

const ContactUs = () => {
  return (
    <div className="my-16 lg:my-32 h-80 md:h-60 lg:h-72 flex flex-col md:flex-row items-center justify-around bg-black text-white rounded-xl font-Ubuntu">
      <div className="flex items-center gap-3">
        <img className="w-8 h-8 lg:w-10 lg:h-10" src={icon1} alt="" />
        <div>
          <p className="text-xs lg:text-base font-medium">
            We are open monday-friday
          </p>
          <hr className="mb-2" />
          <h1 className="text-lg lg:text-2xl font-bold">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img className="w-8 h-8 lg:w-10 lg:h-10" src={icon2} alt="" />
        <div>
          <p className="text-xs lg:text-base font-medium">Have a question?</p>
          <hr className="mb-2" />
          <h1 className="text-lg lg:text-2xl font-bold hover:underline">
            +2546 251 2658
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img className="w-8 h-8 lg:w-10 lg:h-10" src={icon3} alt="" />
        <div>
          <p className="text-xs lg:text-base font-medium">
            Need a repair? our address
          </p>
          <hr className="mb-2" />
          <h1 className="text-lg lg:text-2xl font-bold">
            Liza Street, New York
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
