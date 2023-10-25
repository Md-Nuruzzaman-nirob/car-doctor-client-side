import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/Group 1@2x.png";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showThemeTooltip, setShowThemeTooltip] = useState(false);
  const [showSearchTooltip, setShowSearchTooltip] = useState(false);
  const [showCartTooltip, setShowCartTooltip] = useState(false);

  // theme mode
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <nav className="flex items-center justify-between font-Ubuntu py-8 lg:py-10 xl:py-12">
      <div className="flex flex-col items-center gap-1">
        <img className="w-14 h-8 lg:w-[100px] lg:h-12" src={logo} alt="" />
        <h3 className="text-sm lg:text-xl font-bold">Car Doctor</h3>
      </div>

      {/*  */}
      <ul className="hidden lg:flex items-center gap-7 font-medium text-lg ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF3811] underline"
              : " hover:text-[#FF3811] transition duration-500 ease-in-out"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF3811] underline"
              : " hover:text-[#FF3811] transition duration-500 ease-in-out"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF3811] underline"
              : " hover:text-[#FF3811] transition duration-500 ease-in-out"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF3811] underline"
              : " hover:text-[#FF3811] transition duration-500 ease-in-out"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF3811] underline"
              : "hover:text-[#FF3811] transition duration-500 ease-in-out"
          }
        >
          Contact
        </NavLink>
      </ul>
      {/*  */}
      <div className="flex items-center gap-7">
        <div className="flex items-center">
          <button
            onMouseEnter={() => setShowSearchTooltip(true)}
            onMouseLeave={() => setShowSearchTooltip(false)}
            className="relative"
          >
            <FcSearch className="w-7 h-7"></FcSearch>
            {showSearchTooltip && (
              <small className="hidden lg:block absolute top-10 left-0 font-Ubuntu font-medium">
                Search
              </small>
            )}
          </button>
        </div>
        <button
          onClick={() => setTheme(!theme)}
          onMouseEnter={() => setShowThemeTooltip(true)}
          onMouseLeave={() => setShowThemeTooltip(false)}
          className="relative"
        >
          {theme ? (
            <>
              <MdModeNight className="w-7 h-7"></MdModeNight>
              <p>
                {showThemeTooltip && (
                  <small className="hidden lg:block absolute top-10 left-0 font-Ubuntu font-medium">
                    Dark
                  </small>
                )}
              </p>
            </>
          ) : (
            <>
              <MdLightMode className="w-7 h-7"></MdLightMode>
              <p>
                {showThemeTooltip && (
                  <small className="hidden lg:block absolute top-10 left-0 font-Ubuntu font-medium">
                    Light
                  </small>
                )}
              </p>
            </>
          )}
        </button>

        <Link
          to={"/cart"}
          onMouseEnter={() => setShowCartTooltip(true)}
          onMouseLeave={() => setShowCartTooltip(false)}
          className="relative"
        >
          <FaCartFlatbedSuitcase className="w-7 h-7"></FaCartFlatbedSuitcase>
          {showCartTooltip && (
            <small className="hidden lg:block absolute top-10 left-0 font-Ubuntu font-medium">
              Cart
            </small>
          )}
        </Link>

        <button className="hidden lg:block btn text-lg text-[#FF3811] hover:text-white border border-[#FF3811] hover:border-[#FF3811] bg-transparent hover:bg-[#FF3811] font-Ubuntu normal-case">
          Appointment
        </button>
        <div className="flex items-center lg:hidden">
          <button onClick={() => setMenu(true)}>
            <AiOutlineMenu className="w-7 h-7"></AiOutlineMenu>
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 dark:border-white dark:border dark:border-r-0 transition-transform transform ${
            menu ? "translate-x-0" : "translate-x-full"
          } duration-700 ease-in-out z-50`}
        >
          <button
            onClick={() => setMenu(false)}
            className="text-white dark:text-gray-300 relative"
          >
            {" "}
            <AiOutlineClose className="absolute top-5 -right-56 w-10 h-10"></AiOutlineClose>
          </button>
          <hr className="mt-20 ml-10" />
          <div className="mx-10 mt-10">
            <ul className="flex flex-col gap-5 text-white font-Ubuntu font-medium text-xl">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] underline"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] underline"
                    : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] underline"
                    : ""
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] underline"
                    : ""
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] underline"
                    : ""
                }
              >
                Contact
              </NavLink>
              <button className="btn btn-sm w-full text-base text-white border border-[#FF3811] hover:border-[#FF3811] bg-transparent hover:bg-[#FF3811] font-Ubuntu normal-case">
                Appointment
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
