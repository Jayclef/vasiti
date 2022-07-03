import React from 'react'
import atmcard from "../../images/atmcard.png"

const FeaturedTwo = () => {
  return (
    <div className="w-full h-full flex md:justify-center  justify-between items-center p-4 bg-[#FFF8F5]">
      <div className="flex mf:flex-row flex-col-reverse item-start  mf:p-0 py-6 px-4">
        <div className="flex text-left flex-1 items-center justify-start flex-col md:mr-10">
          <h2 className=" sm:text-5xl text-black pt-10 text-center py-1">
            Josiah’s Experience
          </h2>
          <button className="bg-transparent flex border-[#FF5C00] justify-start items-start border-solid border-2 text-[#FF5C00] mt-7 px-7 mx-4 rounded  cursor-pointer">
            Vendor
          </button>
          <p className="text-left mt-5 text-[black]  font-light md:w-9/12 w-11/12 text-base">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <h2 className=" mt-7 sm:text-5xl tracking-wide text-[#FF5C00] pt-10 text-center py-1">
            SHARE YOUR OWN STORY!
            <hr className="h-0 border-solid border-[#FF5C00]" />
          </h2>
        </div>
        <div className="flex flex-1 justify-start mt-5 md:flex-col bg-[#ff5c0008] w-400 rounded-full flex-col md:mr-10">
          <div className="md:flex-[0.5] flex-initial justify-center  items-center">
            <img
              src={atmcard}
              alt="customer"
              className="w-150 flex justify-center items-center cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedTwo