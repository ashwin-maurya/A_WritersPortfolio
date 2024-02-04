import React from "react";
import { Synopsis } from "../../assets/images";

const Synopsis1 = ({ bookdetails }) => {
  return (
    <section className="relative max-lg:mt-14 flex mt-14">
      <div className="flex justify-between max-lg:justify-center  max-lg:flex-col  items-center">
        <div className="w-[400px]    max-lg:py-0 py-20 max-lg:h-[250px] max-lg:w-full  max-lg:bg-black    max-md:blur-[0px]   h-full ">
          <img
            loading="lazy"
            src={Synopsis}
            className="w-full object-cover max-lg:opacity-[0.29]  h-full"
            alt="Synopsis Image"
          />
        </div>
        <div className=" z-30  text-[35px]  font-bold  max-md:text-[23px] absolute  text-center max-lg:left-[40%]  left-40 max-lg:top-[10%] font-CooperHevitt     border-b-[3px]  max-lg:border-b-[2px] tracking-widest  text-white border-white ">
          SYNOPSIS
        </div>
        <div className="z-20 xl:mr-72 lg:mr-32  text-black  max-lg:top-[84px] max-lg:bg-white max-md:mr-0 bg-white text-[18px]   w-[40%]   max-md:text-[17px] max-md:leading-[21px] font-Slab max-lg:py-6       max-lg:ml-0  max-sm:mt-0  max-lg:my-0  my-20 max-lg:w-full max-lg:p-12 max-md:p-6  p-10  text-justify  ">
          <span className="text-[30px] font-[500] font-VulturaRegular">
            {bookdetails?.description?.charAt(0)}
          </span>
          {bookdetails?.description?.substring(
            1,
            bookdetails?.description.length
          )}
        </div>
      </div>
      <div className="w-[500px] max-lg:hidden   bg-gray-300  absolute h-full right-0 top-0"></div>
    </section>
  );
};

export default Synopsis1;
