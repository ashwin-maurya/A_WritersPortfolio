import React from "react";
import { Download2 } from "../../assets/images";

const BookDownload = () => {
  return (
    <section className="flex  ml-56 max-md:ml-2 max-md:my-14 my-32 items-center relative">
      <div className="w-[600px] max-md:w-[250px]  p-22 z-30  ">
        <img loading="lazy" src={Download2} alt="" className="" />
      </div>

      <div className="right-[30%] p-24  max-md:gap-2 z-30 bg-slate-100 max-md:right-2  absolute  max-md:p-5  uppercase   gap-6   flex-col flex justify-center items-center">
        <div className="font-Oswald max-md:text-[20px]  text-[28px]">
          Get a sample of book
        </div>

        <span className="  border-[1px] border-white      flex justify-center items-center  text-[20px] font-TimesNewRoman flex-row cursor-pointer text-white bg-black  p-3 gap-1 max-md:gap-1 max-md:p-1  max-md:text-[15px] max-md:px-2 uppercase  max-md:border-[2px] ">
          <span>Download</span>
        </span>
      </div>
    </section>
  );
};

export default BookDownload;
