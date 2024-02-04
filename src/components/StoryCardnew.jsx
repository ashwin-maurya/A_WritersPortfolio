import React from "react";
import { useNavigate } from "react-router";
import { ArrowRight, ArrowRightBlack } from "../assets/icons";

const StoryCardnew = ({ ind }) => {
  const navigate = useNavigate();
  return (
    <section className="w-[80%] max-md:w-[95%] max-md:gap-8 my-16 max-md:my-8 flex items-center flex-col gap-12 ">
      <span
        className="text-[30px]     max-md:text-[22px]   uppercase text-gray-800 cursor-pointer font-Oswald max-md:leading-7    "
        onClick={() => {
          navigate(`/Story/${ind?.title.replace(/\s+/g, "-")}`);
        }}
      >
        {ind?.title}
      </span>{" "}
      <div
        key={2}
        className="max-md:flex-col   justify-between items-start   max-md:gap-3  gap-10  flex   "
      >
        <div
          className="max-md:w-full mr-10 cursor-pointer"
          onClick={() => {
            navigate(`/Story/${ind?.title.replace(/\s+/g, "-")}`);
          }}
        >
          <img loading="lazy" src={ind.cover2} alt="" className="w-[650px]" />
        </div>
        <div className="w-[60%]  max-md:w-full flex max-md:gap-4  flex-col gap-10 ">
          <div className="flex flex-col gap-3">
            <div className="max-md:mt-2 text-[23px] max-md:text-[20px]">
              <span>Published in </span>
              <a href={ind.link} target="_blank" rel="noopener noreferrer">
                {" "}
                <span className="font-Authorfont mx-0 italic">
                  {ind.published}
                </span>{" "}
              </a>
            </div>
            {/* <span
          className="text-[25px] 2xl:text-[30px] max-md:hidden   max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-7 underline max-md:mb-2"
          onClick={() => {
            navigate(`/Story/${ind?.title.replace(/\s+/g, "-")}`);
          }}
        >
          {ind?.title}
        </span>{" "} */}
            <span className="max-md:leading-6 leading-7  line-clamp-4 text-[25px] 2xl:text-[28px] max-md:text-[20px]   text-justify font-TimesNewRoman ">
              "{ind?.shortDescription}"
            </span>
          </div>
          <button className=" max-md:hidden gap-7 mt-0   bg-black max-md:p-[3px] p-[3px]  justify- items-center  max-w-[170px]  ">
            <span
              className="  border-[1px] border-white      flex justify-center items-center text-[20px] font-TimesNewRoman flex-row cursor-pointer text-white bg-black  p-1 gap-1 max-md:gap-1 max-md:p-1  max-sm:text-[19px]   max-md:border-[2px] "
              onClick={() => {
                navigate(`/Story/${ind.title.replace(/\s+/g, "-")}`);
              }}
            >
              <span>Read Here</span>
              <img
                loading="lazy"
                src={ArrowRight}
                className="w-8 px-1  max-md:pl-0 max-md:w-4  max-md:px-0 pl-2"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoryCardnew;
