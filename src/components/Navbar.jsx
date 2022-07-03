import React from "react";
import logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex md:justify-center  justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <ul className="text-[#242120] md:flex text-sm hidden list-none flex-row justify-between items-center flex-initial">
          {["ABOUT US", "STORIES", "CONTACT", "LOGIN"].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
          ))}
          <li className="bg-[#FF5C00] text-white py-2 px-7 mx-4 rounded cursor-pointer hover:bg-[#FF5C05] ">
            Sign Up
          </li>
        </ul>
      </div>
      <div className="w-full flex md:justify-center  justify-around items-center p-4 ">
        <ul className="text-[#242120] md:flex hidden text-sm list-none flex-row justify-between items-center flex-initial">
          {["MARKETPLACE", "WHOLESALE CENTER", "SELLER CENTER", "SERVICES", "INTERNSHIP", "EVENT"].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
          ))}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
