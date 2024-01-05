import React from "react";
import {
  TheGreatestIndianStoriesEverTold,
  heroBannerImage,
} from "../../assets/images";
import "./hero.css";
import { ArrowRightBlack } from "../../assets/icons";
export default function Hero() {
  return (
    <>
      <div
        className={`relative bigger max-sm:min-h-[250px]  min-h-[500px] max-2xl:min-h-[380px]`}
      >
        <div className="w-full h-full group text-center relative overflow-hidden">
          <div className="transition-all ease-in-out duration-200 absolute bg-pink-200 top-0  w-[50%] max-sm:w-[60%] h-full ">
            <div className="w-full h-full flex justify-start items-center">
              <img
                src={TheGreatestIndianStoriesEverTold}
                className="h-[400px] ml-10 max-md:ml-5 max-sm:ml-0 2xl:h-[500px] max-xl:h-[350px] max-lg:h-[300px] max-md:h-[250px] max-sm:h-[230px] mr-10 max-md:mr-7 max-sm:mr-2"
                alt=""
              />
            </div>
          </div>
          <div className="bg-pink-100  transition-all ease-in-out duration-200 absolute top-0 right-0 z-[1] w-[80%] max-sm:w-[75%] h-full flex justify-end [clip-path:polygon(100%_100%,30%_100%,0%_0%,100%_0%)] ">
            <div
              className="absolute -z-50 h-full w-full flex justify-end bg-cover bg-no-repeat opacity-60"
              style={{
                backgroundImage: `url(${heroBannerImage})`,
              }}
            ></div>

            <div className="w-[75%] max-sm:w-[80%] h-full flex justify-center items-center flex-col space-y-2 p-3">
              <h3 className="font-black text-gray-800 text-6xl 2xl:text-7xl max-xl:text-5xl max-lg:text-3xl max-md:text-xl max-sm:text-[20px] uppercase book-cover max-sm:font-extrabold">
                The Greatest Indian Stories Ever Told
              </h3>
              <div>
                <span className="md:text-lg inline text-right max-sm:text-center max-sm:leading-4 text-gray-800 text-base font-CooperHevitt max-sm:text-[10px] line-clamp-4 max-md:line-clamp-3 ">
                  The Greatest Indian Stories Ever Told is a selection of some
                  of the finest literary short fiction written by Indian writers
                  since the genre came into being in the country in the late
                  nineteenth century. Including early masters of the form,
                  contemporary stars, as well as brilliant writers who came of
                  age in the twenty-first century, this anthology takes in its
                  sweep stories from the various regions, languages, and
                  literatures of India.
                </span>
              </div>

              <div className="flex gap-5 pt-5 max-sm:pt-0">
                <div className="max-sm:p-1 max-md:mt-2  max-md:m-0   w-auto max-w-[200px] flex justify-center items-center flex-row text-black px-2 py-1 border-2 p2 gap-2 max-md:gap-1 max-sm:text-[12px]   border-black">
                  <span>READ MORE</span>
                  <img
                    src={ArrowRightBlack}
                    className="w-8 px-1 max-md:pl-0 max-md:w-5 max-sm:w-4 max-md:px-0 pl-2"
                    alt=""
                  />
                </div>
                <div className="max-sm:p-1 max-sm:hidden max-md:mt-2  max-md:m-0 py-1  w-auto max-w-[200px] flex justify-center items-center flex-row text-black px-2  border-2 p2 gap-2 max-md:gap-1 max-sm:text-[12px]   border-black">
                  <span>BUY NOW</span>
                  <img
                    src={ArrowRightBlack}
                    className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
