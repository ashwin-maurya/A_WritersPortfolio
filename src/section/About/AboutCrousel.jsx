import React, { useEffect, useState } from "react";
import { works } from "../../components/constants";
import { ArrowRight } from "../../assets/icons";
import { useNavigate } from "react-router";

const AboutCrousel = () => {
  const [reviews, setReviews] = useState(works);
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [reviews?.cover]);

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="mx-auto flex px-24 max-lg:px-10 max-md:bg-slate-100 bg-white justify-center items-center flex-col my-0 max-sm:mt-20 max-md:py-6  py-16 max-sm:px-0">
      <p className="font-Oswald mb-6  max-md:mb-3   font- tracking-[5px]  text-[40px] max-md:pl-0 text-gray-800 max-md:text-center  max-sm:text-[22px] ">
        WORKS BY A.M. GAUTAM
      </p>

      <p
        className="text-[30px] max-md:block hidden 2xl:text-[35px] max-md:text-center 
             max-md:leading-7 max-md:my-6  text-black font-Gamiliademo  "
      >
        {reviews[currentIndex]?.title}
      </p>
      <div className=" flex max-md:flex-col justify-center  max-md:gap-3 max-md:my-0  max-md:py-0 py-8  gap-28">
        <div className=" mx-auto    ">
          {reviews[currentIndex].type == "Book" && (
            <div
              className="h-[400px] relative  flex  justify-center items-center w-[300px] max-w-[300px] max-md:w-[200px]     max-md:h-[300px] max-md:max-w-full mx-auto text-center"
              onClick={() => {
                navigate(
                  `/Book/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }}
            >
              <img
                src={reviews[currentIndex]?.cover}
                alt=""
                className=" transition ease-in-out group3 w-full h-full object-top     m-auto mb-1 "
              />
            </div>
          )}

          {reviews[currentIndex].type == "Article" && (
            <div
              className="h-[400px] relative  flex  justify-center items-center w-[400px] max-w-[600px]     max-md:w-[300px]   max-md:h-[300px] max-md:max-w-full mx-auto text-center"
              onClick={() => {
                navigate(
                  `/Article/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }}
            >
              <img
                src={reviews[currentIndex].cover}
                alt=""
                className=" transition ease-in-out group3 w-full h-full object-top     m-auto mb-1 "
              />
            </div>
          )}

          {reviews[currentIndex]?.type === "Short Story" && (
            <section
              key={2}
              className="relative"
              onClick={() => {
                navigate(
                  `/Story/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }}
            >
              <div
                className="z-50  shadow-black bg-black max-md:shadow-md  max-md:shadow-gray-600  shadow-md"
                onClick={() => {
                  navigate(
                    `/Article/${reviews[currentIndex].title.replace(
                      /\s+/g,
                      "-"
                    )}`
                  );
                }}
              >
                <img
                  src={reviews[currentIndex]?.cover}
                  alt=""
                  className=" w-[500px]   max-md:w-full  opacity-70"
                />
              </div>
            </section>
          )}
        </div>
        <div className="mx-7 max-lg:mx-0 max-sm:p-1  items-start justify-evenly  w-[50%] max-md:w-[100%] flex flex-col max-md:py-5 gap-9 max-  max-md:gap-0 ">
          <div className="flex flex-col max-md:gap-0 gap-5">
            <p
              className="text-[30px] max-md:hidden 2xl:text-[35px] max-md:text-center 
             max-md:leading-7 max-md:my-3  text-black font-Gamiliademo  "
            >
              {reviews[currentIndex]?.title}
            </p>
            <div className="font-montserrat max-md:mx-3 max-md:mt-3 h-auto 2xl:text-[18px] text-slate-600 text-justify ">
              {reviews[currentIndex]?.description}
            </div>
          </div>
          <button
            className=" gap-7 mt-0 max-md:hidden     max-md:p-[3px] p-[3px]  justify- items-center  max-w-[170px]  "
            onClick={() => {
              if (reviews[currentIndex].type === "Book") {
                navigate(
                  `/Book/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }
              if (reviews[currentIndex].type === "Story") {
                navigate(
                  `/Story/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }
              if (reviews[currentIndex].type === "Article") {
                navigate(
                  `/Article/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }
            }}
          >
            <span className="bg-black text-white max-md:p-2 min-w-[250px] py-4 px-10 text-[20px] max-md:text-[16px]  flex justify-center items-center text-center font-serif">
              <span>Read Here</span>
              <img
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

export default AboutCrousel;
