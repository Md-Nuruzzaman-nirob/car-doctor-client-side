import { Link } from "react-router-dom";
import logo from "../../assets/icons/Group 1@2x.png";

const Footer = () => {
  return (
    <div className="footer max-w-7xl px-5 md:px-10 xl:px-0 xl:mx-auto py-28 bg-black text-white font-Ubuntu font-medium text-base">
      <aside>
        <div className="flex flex-col items-center gap-1">
          <img className="w-28 h-16" src={logo} alt="" />
          <h3 className="text-2xl">Car Doctor</h3>
        </div>

        <p>Providing reliable services since 2002</p>
      </aside>
      <nav>
        <header className="footer-title  text-lg">Services</header>
        <a className="link link-hover hover:text-[#FF3811]">
          Electrical System
        </a>
        <a className="link link-hover hover:text-[#FF3811]">
          Engine Diagnostics
        </a>
        <a className="link link-hover hover:text-[#FF3811]">Auto Car Repair</a>
      </nav>
      <nav>
        <header className="footer-title text-lg">Company</header>
        <a href="#aboutUs" className="link link-hover hover:text-[#FF3811]">
          Why Car Doctor
        </a>
        <Link to={"/about"} className="link link-hover hover:text-[#FF3811]">
          About us
        </Link>
        <Link to={"/contact"} className="link link-hover hover:text-[#FF3811]">
          Contact
        </Link>
      </nav>
      <nav>
        <header className="footer-title  text-lg">Support</header>
        <a className="link link-hover hover:text-[#FF3811]">Support Center</a>
        <a className="link link-hover hover:text-[#FF3811]">Feedback</a>
        <a className="link link-hover hover:text-[#FF3811]">Accessability</a>
      </nav>
    </div>
  );
};

export default Footer;
