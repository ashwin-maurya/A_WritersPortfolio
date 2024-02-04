import DOMPurify from "dompurify";
import React from "react";
import { goto } from "../../assets/icons";

const ArticleBody = ({ articledata }) => {
  return (
    <div className="relative max-md:w-full w-[90%] mx-auto p-16 max-sm:p-0 max-md:mt-8   justify-center items-center">
      <div
        className="
font-Gamiliademo  w-[90%] max-md:w-[90%] mx-auto  text-[45px] max-md:text-[24px] max-md:leading-7 "
      >
        {articledata?.title}
      </div>
      <div className="flex gap-12 my-2 max-md:flex-row max-md:gap-0 max-md:my-3 w-[90%] mx-auto  ">
        <a href={articledata?.link} target="_blank" rel="noopener noreferrer">
          <div className="font-semibold flex">
            {" "}
            <span className="text-gray-600 mr-2 max-md:text-[12px]">
              Published in{" "}
            </span>{" "}
            <span className="uppercase text-[15px] max-md:text-[12px] hover:underline hover:text-blue-500 font-Oswald">
              {articledata?.publication}{" "}
            </span>
            <img
              loading="lazy"
              src={goto}
              className="w-4 mx-1 h-4"
              alt="Go to Button Logo"
            />
          </div>
        </a>

        <div className="font-semibold max-md:text-[12px] max-md:ml-2">
          <span className="text-gray-600 mr-2 max-md:mr-0">On</span>{" "}
          <span className="uppercase max-md:text-[11px]">5 Dec </span>
        </div>
      </div>
      <div className="mt-10 max-md:mt-6 max-md:w-[95%] mx-auto   max-md:p-0 p-10  bg-white ">
        <div className="float-left ">
          <img
            loading="lazy"
            src={articledata?.cover}
            alt="person"
            className=" pb-1 pr-6  z-10 max-md:pr-3 max-md:pb-[1px]    max-md:w-[230px] w-[600px]  "
          />
        </div>

        <div
          className="text-[21px] tracking-wide     text-justify max-lg:w-[100%] max-md:w-[100%]  max-md:leading-[22px] max-md:text-[20px]   font-TimesNewRoman        "
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(articledata?.description),
          }}
        ></div>
      </div>
    </div>
  );
};

export default ArticleBody;
