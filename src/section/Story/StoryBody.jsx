import React from "react";
import { goto } from "../../assets/icons";
import DOMPurify from "dompurify";

const StoryBody = ({ storydata }) => {
  return (
    <div className="relative  max-md:w-full w-[90%] mx-auto p-16 max-md:p-0 max-md:mt-8    justify-center items-center">
      <div className="flex gap-28  my-6   justify-center  max-md:gap-5 max-md:my-3 w-[90%]  mx-auto  ">
        <a href={storydata?.link} target="_blank" rel="noopener noreferrer">
          <div className="font-semibold flex justify-center items-center ">
            {" "}
            <span className="text-gray-600 mr-2 max-md:text-[15px]">
              Published in{" "}
            </span>{" "}
            <span className="uppercase text-[15px] max-md:text-[12px] hover:underline hover:text-blue-500 font-Oswald ">
              {storydata?.published}
            </span>
            <img loading="lazy" src={goto} className="w-4 mx-1 h-4" alt="" />
          </div>
        </a>

        <div className="font-semibold max-md:text-[12px]">
          <span className="text-gray-600 mr-2 max-md:mr-0">On</span>{" "}
          <span className="uppercase max-md:text-[11px]">
            {storydata?.Date}{" "}
          </span>
        </div>
      </div>
      <div
        className="
font-Gamiliademo  w-[90%] max-md:w-[90%] mx-auto text-center   text-[45px] max-md:text-[24px] max-md:leading-7 "
      >
        {storydata?.title}
      </div>

      <div className="mt-10 w-[70%] max-md:w-[100%] mx-auto  max-md:mt-6 flex flex-col justify-center items-center   ">
        <div className=" ">
          <img
            loading="lazy"
            src={storydata?.cover2}
            alt="person"
            className=" pb-1 pr-6   w-full z-10 max-md:pr-2 max-md:pb-[1px]    max-md:w-[80%]  mx-auto "
          />
        </div>

        <div
          className="text-[24px]  tracking-wide  mt-4 max-md:p-4  p-14   bg-white  text-justify max-lg:w-[100%] max-md:w-[100%]  max-md:leading-[22px] max-md:text-[20px]  select-text  font-TimesNewRoman        "
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(storydata?.description),
          }}
        ></div>
      </div>
    </div>
  );
};

export default StoryBody;
