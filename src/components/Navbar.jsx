import logo from "/images/shared/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "whitespace-nowrap h-full flex items-center border-b-2"
      : "whitespace-nowrap h-full flex items-center hover:-translate-y-1 transition-all";

  const menuLinkClass = ({ isActive }) =>
    isActive
      ? "whitespace-nowrap h-full flex items-center w-full border-r-4 border-white"
      : "whitespace-nowrap h-full flex items-center w-full border-white hover:-translate-x-1 transition-all";

  return (
    <div className="flex w-full items-center relative">
      <NavLink
        to="/"
        className="basis-1/2 sm:basis-[15%] pl-8 sm:pl-4 flex sm:place-content-center"
      >
        <img src={logo} alt="Logo" className="sm:w-12 lg:w-8 aspect-auto" />
      </NavLink>
      <div className="basis-[30%] hidden lg:block"></div>
      <div className="basis-1/2 sm:basis-[85%] lg:basis-[55%] flex h-full">
        <button
          onClick={toggleMenu}
          className="text-3xl text-light-blue justify-self-end w-full block relative sm:hidden"
        >
          <RxHamburgerMenu className="absolute right-7 top-1/2 -translate-y-1/2" />
        </button>
        <ul className="w-full text-white hidden sm:flex flex-row justify-end ml-5 pl-16 lg:pl-10 pr-10 sm:gap-12 lg:gap-5 items-center bg-white bg-opacity-5 backdrop-blur-lg h-28 lg:h-20 font-barlow-condensed tracking-widest font-extralight text-xl lg:text-base uppercase">
          <li className="h-full">
            <NavLink to="/" className={navLinkClass}>
              <span className="font-bold pr-2 lg:pr-1.5 hidden lg:inline">
                00
              </span>
              Home
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink to="/destination" className={navLinkClass}>
              <span className="font-bold pr-2 lg:pr-1.5">01</span> Destination
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink to="/crew" className={navLinkClass}>
              <span className="font-bold pr-2 lg:pr-1.5">02</span> Crew
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink to="/technology" className={navLinkClass}>
              <span className="font-bold pr-2 lg:pr-1.5">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        name="hamburger-menu"
        className={`w-3/4 absolute h-screen transition-all ease-linear right-0 -top-10 bg-white bg-opacity-5 backdrop-blur-xl pt-10 tracking-widest ${
          isOpen ? "opacity-100 z-10" : "opacity-0 -z-10"
        }`}
        onClick={toggleMenu}
      >
        <button
          onClick={toggleMenu}
          className="w-full flex place-content-end pr-7 pt-2"
        >
          <FaX className="text-2xl" />
        </button>
        <ul className="text-white flex flex-col gap-5 uppercase font-barlow-condensed font-extralight mt-24 ml-7 text-xl">
          <li className="h-full w-full">
            <NavLink to="/" className={menuLinkClass}>
              <span className="font-bold pr-2 lg:pr-1.5">00</span>
              Home
            </NavLink>
          </li>
          <li className="h-full w-full">
            <NavLink to="/destination" className={menuLinkClass}>
              <span className="font-bold pr-2 lg:pr-1.5">01</span> Destination
            </NavLink>
          </li>
          <li className="h-full w-full">
            <NavLink to="/crew" className={menuLinkClass}>
              <span className="font-bold pr-2 lg:pr-1.5">02</span> Crew
            </NavLink>
          </li>
          <li className="h-full w-full">
            <NavLink to="/technology" className={menuLinkClass}>
              <span className="font-bold pr-2 lg:pr-1.5">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
