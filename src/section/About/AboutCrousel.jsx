import React, { useEffect, useState } from "react";
import { crausoel } from "../../components/constants";
import { ArrowRight } from "../../assets/icons";

const AboutCrousel = () => {
  const [reviews, setReviews] = useState(crausoel);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mx-auto flex px-24 max-md:mt-20 bg-gray-900 flex-col my-6 max-md:my-3 max-md:py-3 py-10 max-sm:px-0">
      <p className="font-CooperHevitt my-6 max-md:my-2 font-semibold opacity-70 tracking-[5px] text-[30px] text-white max-md:text-center max-sm:text-[22px] ">
        READS BY A.M GAUTAM
      </p>

      <div className="flex max-md:flex-col max-md:gap-0 gap-10">
        <div
          className={`h-[350px] relative bg-black flex justify-center items-center max-md:w-[100%] max-md:h-[300px] group w-[600px] mx-auto text-center transition-all  transform ease-in-out duration-500 bg-cover bg-no-repeat bg-center `}
        >
          <img
            src={reviews[currentIndex]?.cover}
            alt=""
            className="w-full h-full object-top"
          />
        </div>
        <div
          className={`mx-7 max-sm:p-2 max-md:text-center w-[50%] max-sm:w-[100%] max-md:mx-0 flex flex-col gap-4 max-md:gap-0 transition-transform transform ease-in-out duration-500 translate-x-[${
            currentIndex === 0 ? "0%" : "-100%"
          }]`}
        >
          <div className="max-md:leading-7 max-md:my-2 ">
            <p className="text-[30px] text-white ">The Avacado Toast </p>
            <span className="italic max-sm:pl-2 text-[18px] font-[50] font-Oswald tracking-wider text-slate-300">
              -BY A.M GAUTAM
            </span>
          </div>
          <div className="font-montserrat max-md:mx-2 max-md:text-[12px]  h-[50%]  text-slate-400 text-justify">
            {reviews[currentIndex]?.description &&
            reviews[currentIndex]?.description.length > 400
              ? reviews[currentIndex]?.description.slice(0, 400) + "..."
              : reviews[currentIndex]?.description}
          </div>
          <div className=" max-sm:p-1 max-md:mt-6  max-md:m-2   w-auto max-w-[200px] flex justify-center items-center flex-row text-white   border-2 p-2  max-sm:text-[14px]   border-white">
            <span>READ MORE</span>
            <img src={ArrowRight} className="px-1 pl-2" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCrousel;
