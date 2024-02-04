import React from "react";
import { ArrowRightBlack, Cart } from "../../assets/icons";
import { useNavigate } from "react-router";

const Books = ({ BookData }) => {
  const navigate = useNavigate();

  return (
    <article>
      <div className=" flex flex-col mx-28 max-md:gap-24  gap-36  max-md:mx-0 justify-center  items-center max-md:my-6  ">
        {BookData?.map((singleBook, index) => (
          <div
            key={2}
            className={`max-md:flex-col    max-md:justify-center max-md:items-center   flex justify-center items-start ${
              index % 2 == 1 && "flex-row-reverse"
            }    w-full     `}
          >
            <div
              className="w-[60%] flex justify-center items-center max-md:flex max-md:flex-col max-md:justify-center  max-md:items-center max-md:w-full "
              onClick={() => {
                navigate(`/Book/${singleBook?.title.replace(/\s+/g, "-")}`);
              }}
            >
              <span
                className="text-[30px]    max-md:block hidden  text-center   max-md:text-[22px]   uppercase  text-gray-800 font-Oswald cursor-pointer  max-md:leading-7 max-md:mb-10 "
                onClick={() => {
                  navigate(`/Book/${singleBook?.title.replace(/\s+/g, "-")}`);
                }}
              >
                {singleBook?.title}
              </span>{" "}
              <img
                loading="lazy"
                src={singleBook?.cover}
                alt={singleBook?.title}
                className="2xl:w-[400px] cursor-pointer w-[350px] max-md:w-[250px]"
              />
            </div>
            <div className="w-[70%] mt-7 max-md:mt-0  max-md:flex max-md:justify-center max-md:items-center  max-md:w-full flex max-md:gap-2  flex-col gap-4">
              <span
                className="2xl:text-[38px] text-[34px]  max-md:hidden   max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-7 max-md:mb-2"
                onClick={() => {
                  navigate(`/Book/${singleBook?.title.replace(/\s+/g, "-")}`);
                }}
              >
                {singleBook?.title}
              </span>{" "}
              <div className="text-justify max-md:text-[19px] font-TimesNewRoman line-clamp-5 2xl:text-[25px] text-[20px] max-md:leading-none leading-7 text-gray-900 w-[90%] max-md:w-[85%] max-md:mt-6">
                {singleBook.description}
              </div>
              <div className="flex gap-7 2xl:mt-5 mt-0 max-md:mt-2 max-md:gap-1">
                <div
                  className=" max-sm:p-1 max-md:mt-2  max-md:m-1   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-md:gap-1 max-sm:text-[14px] cursor-pointer  max-md:border-[2px] border-black"
                  onClick={() => {
                    navigate(`/Book/${singleBook.title.replace(/\s+/g, "-")}`);
                  }}
                >
                  <span>READ MORE</span>
                  <img
                    loading="lazy"
                    src={ArrowRightBlack}
                    className="w-8 px-1  max-md:pl-0 max-md:w-4  max-md:px-0 pl-2"
                    alt="arrow right"
                  />
                </div>
                <a href={singleBook.orderLink} target="_blank">
                  <div className=" max-sm:p-1 max-md:mt-2  max-md:m-1   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-md:gap-2 max-sm:text-[14px] max-md:border-[2px]  border-black">
                    <span>GET A COPY HERE</span>
                    <img
                      loading="lazy"
                      src={Cart}
                      className=" w-7 max-md:pl-0 max-md:w-4 max-md:px-0  px-1 pl-2"
                      alt="Add to cart"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Books;
