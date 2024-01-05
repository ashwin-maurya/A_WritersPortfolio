import React from "react";
import "./HomeHeroCards.css";
import { ArrowRight } from "../../assets/icons";
import { useNavigate } from "react-router";

const HomeHeroCards = ({ story }) => {
  const maxCharacters = window.innerWidth <= 600 ? 150 : 350;
  const navigate = useNavigate();

  return (
    <div className="relative w-[1000px] max-xl:w-[900px] max-lg:w-[700px] 2xl:w-[1200px] max-sm:w-full rounded max-md:rounded-none h-full flex-shrink-0 snap-center scroll-smooth overflow-hidden">
      <div className="w-full bg-black h-full flex flex-row group text-center scroll-smooth relative  overflow-hidden">
        <div
          className={`bg-gray-800 transition-all ease-in-out duration-200 opacity-80 max-sm:opacity-70 z-[1] w-[80%] h-full  [clip-path:polygon(0%_0%,65%_0%,100%_100%,0%_100%)]`}
        >
          <div className="w-[74%] max-sm:w-[80%] h-full flex justify-center items-center flex-col text-left space-y-2 p-3 ">
            <div className="ml-10 max-sm:ml-0">
              <span className="bg-white px-2 py-1 max-sm:pb-[5px] max-sm:pt-1 uppercase font-Oswald text-xs text-black font-bold my-2 tracking-widest">
                short story
              </span>
              <h3 className="font-black font-Gamiliademo tracking-wider text-white 2xl:text-4xl text-4xl max-lg:text-3xl max-md:text-3xl my-8 max-sm:mb-1">
                {story?.title}
              </h3>

              <p className=" text-gray-50 text-base 2xl:text-lg mt-5 max-sm:text-[14px] font-montserrat tracking-wide">
                {story?.description.length > maxCharacters
                  ? story?.description.substring(0, maxCharacters) + "..."
                  : story?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="transition-all ease-in-out duration-200 absolute bg-gray-200 top-0 right-0 w-[55%] h-full">
          <div
            className="w-full h-full flex justify-end items-center inside-shadow bg-center bg-no-repeat bg object-center -z-50 bg-cover"
            style={{
              backgroundImage: `url(${story?.cover})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroCards;
