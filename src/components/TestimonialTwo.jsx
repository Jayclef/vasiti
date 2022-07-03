import React from "react";
import femi from "../../images/femi.png";
import ofor from "../../images/ofor.png";
import fisayo from "../../images/fisayo.png";
import ibeh from "../../images/ibeh.png";
import oluchi from "../../images/oluchi.png";
import badmus from "../../images/badmus.png";

const featuresData = [
  {
    img: "../../images/femi.png",
    name: "Temi Obadofin",

    status: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/ofor.png",
    name: "Promise Ejiofor",

    status: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/fisayo.png",
    name: "Feyisola Arinola",

    status: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/ibeh.png",
    name: "Karen Ibeh",

    status: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/oluchi.png",
    name: "Oluchi Uzo",

    status: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    img: "../../images/badmus.png",
    name: "Amos Okafor",

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
              <button className="bg-[#F0FFEE] flex status  border-2 text-[#049A01] mt-7 px-7 mx-4 rounded cursor-pointer">
                {item.status}
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
