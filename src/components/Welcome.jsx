import React from "react";
import testimonial from "../../images/Testimonial.png";

const Welcome = () => {
  return (
    <div className="w-full flex md:justify-center  justify-between items-center p-4">
      <div className="flex mf:flex-row flex-col item-start justify-between mf:p-0 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-black text-gradient py-1">
            Amazing Experiences from Our Wonderful Customers
          </h1>
          <p className="text-left mt-5 text-[#494949] font-light md:w-9/12 w-11/12 text-base">
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className="flex flex-1 justify-start  h-max bg-[#FFF8F5] w-400 rounded-full flex-col md:mr-10">
          <div className="md:flex-[0.5] flex-initial justify-center  items-center">
            <img
              src={testimonial}
              alt="customer"
              className="w-150 flex justify-center items-center cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
