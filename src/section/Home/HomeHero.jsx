import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ArrowRightBlack } from "../../assets/icons";
import HomeHeroCards from "./HomeHeroCards";
import { works } from "../../components/constants";
import {
  TheGreatestIndianStoriesEverTold,
  heroBannerImage,
  caseIndia,
} from "../../assets/images";
import { useNavigate } from "react-router-dom";
export default function HomeHero() {
  const slidesContainerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const updateSlideWidth = () => {
      setSlideWidth(
        slidesContainerRef.current
          ? slidesContainerRef.current.children[0].clientWidth
          : 0
      );
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  useEffect(() => {
    const autoSlide = () => {
      if (slidesContainerRef.current) {
        slidesContainerRef.current.scrollLeft += slideWidth * direction;

        const isNearLastSlide =
          slidesContainerRef.current.scrollLeft +
            slidesContainerRef.current.offsetWidth >=
          slidesContainerRef.current.scrollWidth - 10;

        const isNearFirstSlide = slidesContainerRef.current.scrollLeft <= 10;

        if (isNearLastSlide) {
          setDirection(-1);
        } else if (isNearFirstSlide) {
          setDirection(1);
        }
      }
    };

    const autoSlideInterval = setInterval(autoSlide, 10000);

    return () => clearInterval(autoSlideInterval);
  }, [slideWidth, direction]);
  const shortStories = works.filter((work) => work.type === "Short Story");

  return (
    <>
      <div
        id="app"
        className="mx-auto my-36 max-md:my-12 px-8 max-md:px-0 transition-all duration-500 ease-linear"
      >
        <div className="relative">
          <div
            ref={slidesContainerRef}
            className="slides-container z-[999] h-[400px] 2xl:h-[500px] max-sm:h-[350px] flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-4 max-sm:space-x-0 rounded max-md:rounded-none scroll-smooth no-scrollbar"
          >
            <div
              className="relative w-[1000px] max-xl:w-[900px] max-lg:w-[700px] 2xl:w-[1200px] max-sm:w-full rounded max-md:rounded-none h-full flex-shrink-0 snap-center overflow-hidden cursor-pointer"
              onClick={() => {
                navigate(`/Book/The-Greatest-Indian-Stories-Ever-Told`);
              }}
            >
              <div className="transition-all ease-in-out duration-200 absolute bg-pink-200 top-0  w-[50%] max-sm:w-[60%] h-full ">
                <div className="w-full h-full flex justify-start items-center">
                  <img
                    src={TheGreatestIndianStoriesEverTold}
                    className="h-[380px] ml-5 max-md:ml-5 max-sm:ml-0 2xl:h-[450px] max-xl:h-[350px] max-lg:h-[330px] max-md:h-[300px] max-sm:h-[220px] mr-10 max-md:mr-7 max-sm:mr-2 z-50"
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

                <div className="w-[75%] max-sm:w-[90%] h-full flex justify-center items-center flex-col space-y-2 p-3 max-sm:p-0">
                  <h3 className="font-extrabold text-center text-gray-800 text-5xl 2xl:text-6xl max-xl:text-4xl max-lg:text-2xl max-md:text-xl uppercase book-cover max-sm:font-extrabold mb-5 max-sm:mb-2 max-sm:text-[30px] drop-shadow-[0_5px_5px_rgba(231, 0, 188, 0.5)]">
                    The Greatest Indian Stories Ever Told
                  </h3>
                  <span className="md:text-lg inline text-center max-sm:text-center max-sm:leading-4 text-gray-800 text-base font-CooperHevitt max-sm:text-[13px] max-sm:w-[75%] ">
                    The Greatest Indian Stories Ever Told is a selection of some
                    of the finest literary short fiction written by Indian
                    writers since the genre came into being in the country in
                    the late nineteenth century.
                  </span>

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
            {/* New card */}
            <div
              className="relative w-[1000px] max-xl:w-[900px] max-lg:w-[700px] 2xl:w-[1200px] max-sm:w-full rounded max-md:rounded-none h-full flex-shrink-0 snap-center overflow-hidden cursor-pointer"
              onClick={() => {
                navigate(
                  `/Book/A-Case-of-Indian-Marvels:-Dazzling-Stories-from-the-Country’s-Finest-New-Writers`
                );
              }}
            >
              <div className="transition-all ease-in-out duration-200 absolute bg-blue-950 max-sm:bg-[#161240] top-0  w-[50%] max-sm:w-[60%] h-full ">
                <div className="w-full h-full flex justify-start items-center">
                  <img
                    src={caseIndia}
                    className="h-[350px] ml-5 max-md:ml-5 max-sm:ml-0 2xl:h-[430px] max-xl:h-[350px] max-lg:h-[330px] max-md:h-[280px] max-sm:h-[220px] mr-10 max-md:mr-7 max-sm:mr-2 z-50"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-blue-950  transition-all ease-in-out duration-200 absolute top-0 right-0 z-[1] w-[80%] max-sm:w-[75%] h-full flex justify-end [clip-path:polygon(100%_100%,30%_100%,0%_0%,100%_0%)] ">
                <div
                  className="absolute -z-50 h-full w-full flex justify-end bg-cover bg-no-repeat opacity-50"
                  style={{
                    backgroundImage: `url(https://c0.wallpaperflare.com/preview/447/78/512/indonesia-raja-ampat-regency-ocean-dark-sky.jpg)`,
                  }}
                ></div>

                <div className="w-[85%] max-sm:w-[90%] h-full flex justify-center items-center flex-col space-y-2 p-3 max-sm:p-0">
                  <h3 className="font-Gamiliademo text-center text-yellow-500 text-5xl 2xl:text-6xl max-xl:text-4xl max-lg:text-2xl max-md:text-xl uppercase mb-5 max-sm:mb-2 max-sm:text-[30px] drop-shadow-[0_5px_5px_rgba(231, 0, 188, 0.5)]">
                    A Case of Indian Marvels
                  </h3>
                  <span className="md:text-lg inline text-center max-sm:text-center max-sm:leading-4 text-white text-base font-CooperHevitt max-sm:text-[13px]  max-sm:w-[75%] w-[90%]">
                    A Case of Indian Marvels is the first major anthology of
                    short stories by India’s most exciting new writers. The book
                    pulls together the very best work of authors belonging to
                    the millennial generation and Generation Z .
                  </span>

                  <div className="flex gap-5 pt-5 max-sm:pt-0">
                    <div className="max-sm:p-1 max-md:mt-2  max-md:m-0   w-auto max-w-[200px] flex justify-center items-center flex-row text-white px-2 py-1 border-2 p2 gap-2 max-md:gap-1 max-sm:text-[12px]   border-white">
                      <span>READ MORE</span>
                      <img
                        src={ArrowRight}
                        className="w-8 px-1 max-md:pl-0 max-md:w-5 max-sm:w-4 max-md:px-0 pl-2"
                        alt=""
                      />
                    </div>
                    <div className="max-sm:p-1 max-sm:hidden max-md:mt-2  max-md:m-0 py-1  w-auto max-w-[200px] flex justify-center items-center flex-row text-white px-2  border-2 p2 gap-2 max-md:gap-1 max-sm:text-[12px]   border-white">
                      <span>BUY NOW</span>
                      <img
                        src={ArrowRight}
                        className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {shortStories.map((story, index) => (
              <HomeHeroCards key={index} story={story} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
