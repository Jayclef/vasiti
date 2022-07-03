import React from "react";
import banner from "../../images/banner.png";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-full flex md:justify-center  flex-col relative justify-between items-center p-4 bg-[#25201D]">
      <div className="flex mf:flex-row flex-col-reverse item-start  mf:p-0 py-6 px-4">
        <div className="flex flex-1 justify-start mt-5 md:flex-col bg-[#ff5c0008] w-400 rounded-full flex-col md:mr-10">
          <div className="md:flex-[0.5] flex-initial relative justify-center  items-center">
            <img
              src={banner}
              alt="customer"
              className="w-150 flex justify-center left-0 right-0 items-center cursor-pointer"
            />
          </div>
        </div>
        <div className="flex text-left flex-1 items-center justify-start flex-col md:mr-10">
          <h1 className="text-lg sm:text-5xl text-white pt-10 text-center py-1">
            Be a member of our community 🎉
          </h1>

          <p className="text-left mt-5 text-[#fff]  font-light md:w-9/12 w-11/12 text-base">
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <div className="flex items-center mt-7 justify-center border-[1px] border-solid">
            <input
              type="email"
              className="my-2   w-full rounded-sm px-100 p-5 outline-none  bg-transparent text-white  text-sm"
              placeholder="Your Email Address"
            />
            <button
              type="button"
              className="text-[#242120] w-full rounded border-[1px] p-6 bg-[#fff] cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex mf:flex-row  md:justify-center  text-white justify-between gap-56 mt-7 mr-15  px-4">
        <div className="grid lg:grid-cols-6 md:grid-cols-2 :grid-cols-2 md:text-sm items-start gap-10 mf:p-0 py-6 px-4">


        <ul className=" flex-col">
          <li className="mt-5  text-xl">Company</li>
          <li className="mt-5 md:text-xs">About us</li>
          <li className="mt-5 md:text-xs">Term of Use</li>
          <li className="mt-5 md:text-xs">Privacy Policy</li>
          <li className="mt-5 md:text-xs">Press & Media</li>
        </ul>
        <ul className=" flex-col">
          <li className="mt-5 text-xl">Products</li>
          <li className="mt-5 md:text-xs">Marketplace</li>
          <li className="mt-5 md:text-xs">Magazine</li>
          <li className="mt-5 md:text-xs">Seller</li>
          <li className="mt-5 md:text-xs">Wholesale</li>
          <li className="mt-5 md:text-xs">Services</li>
        </ul>
        <ul className=" flex-col">
          <li className="mt-5  text-xl">Careers</li>
          <li className="mt-5 md:text-xs">Become a Campus Rep</li>
          <li className="mt-5 md:text-xs">Become a Vasiti Influencer</li>
          <li className="mt-5 md:text-xs">Become a Campus writer</li>
          <li className="mt-5 md:text-xs">Become an Affiliate</li>
        </ul>
        <ul className=" flex-col">
          <li className="mt-5  text-xl">Get in touch</li>
          <li className="mt-5 md:text-xs">Contact us</li>
          <li className="mt-5 md:text-xs">Partner with us</li>
          <li className="mt-5 md:text-xs">Advertise with us</li>
          <li className="mt-5 md:text-xs">Help/FAQs</li>
        </ul>
        <ul className=" flex-col">
          <li className="mt-5 text-xl">Join our community</li>
          <li className="mt-5 flex justify-around items-center">
            <BsFacebook fontSize={27} />
            <BsInstagram fontSize={27} />
            <BsTwitter fontSize={27} />
            <BsLinkedin fontSize={27} />
          </li>
          <li className="mt-5">Email Newsletter</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
