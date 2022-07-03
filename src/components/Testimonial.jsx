import React from "react";
import kay from "../../images/kay.png";
import tona from "../../images/tona.png";
import fayemi from "../../images/fayemi.png";
import chisom from "../../images/chisom.png";
import adeyemi from "../../images/adeyemi.png";
import okeke from "../../images/okeke.png";

const featuresData = [
  {
    img: "../../images/kay.png",
    name: "Joseph Ike",
    location: "In Ikeja",
    status: "CUSTOMER",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/tona.png",
    name: "Adetola Fashina",
    location: "In Ibadan",
    status: "CUSTOMER",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/fayemi.png",
    name: "Emmanuel Fayemi",
    location: "In Akoka",
    status: "CUSTOMER",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/chisom.png",
    name: "Chisom Obilor",
    location: "In Magodo",
    status: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/adeyemi.png",
    name: "Adunoluwa Adeyemi",
    location: "In Iwo Road",
    status: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/okeke.png",
    name: "Chidi Okeke",
    location: "In Shomolu",
    status: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full flex   md:justify-center justify-between items-center p-4">
      <div className=" grid lg:grid-cols-3 gap-10   mf:p-0 py-6 px-4">
        {featuresData.map((item, index) => (
          <div className="justify-between  mt-10" key={index}>
            <img
              src={item.img}
              alt="customer"
              className="w-100 flex justify-center items-center"
            />

            <p className="text-sm text-left sm:text-5xl text-[#474747] pt-10 py-1">
              {item.name}
            </p>
            <div className="w-full flex text-left justify-around text-xs ">
              <p className=" mt-5 text-[#535353] font-light md:w-9/12 w-11/12 text-base">
                {item.location}
              </p>
              <button className="bg-[#EEF8FF] flex status  border-2 text-[#0D019A]  mt-7 px-7 mx-4 rounded cursor-pointer">
                {item.status == "CUSTOMER"
                  ? "text-[#0D019A]"
                  : "text-[#049A01]"}
              </button>
            </div>
            <p className="mt-10 w-72 h-60 text-[#474747]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
