import React from "react";
import { ArrowRight } from "../../assets/icons";
import { articles } from "../../components/constants";
import { useNavigate } from "react-router";
import { Articlehero } from "../../assets/images";
import { goto } from "../../assets/icons";
export default function MoreContent() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 py-20 px-12 max-sm:py-10 max-sm:px-8">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="max-sm:tracking-[6px] max-sm:text-[21px] tracking-[6px] font-semibold text-[40px] text-[#FAF8F0] font-Oswald textce uppercase">
            Articles By A.M. Gautam
          </h2>
        </div>
        <div className="flex justify-center 2xl:gap-10 max-md:gap-0   flex-wrap max-md:flex-col items-start w-full">
          {articles.map((art) => (
            <div
              key={art.id}
              className="flex flex-col m-10 max-sm:m-2 max-sm:justify-center max-sm:items-center max-md:flex-row max-sm:pb-5 max-w-[300px] max-md:max-w-full"
              onClick={() => {
                navigate(`/Article/${art.title.replace(/\s+/g, "-")}`);
              }}
            >
              <img
                alt="Art"
                src={Articlehero}
                className="h-64 w-64 max-md:w-50 max-md:h-50 max-sm:w-32 max-sm:h-32 object-cover"
              />
              <div className="w-full max-md:ml-4">
                <h3 className="mt-4 max-md:mt-0 text-lg 2xl:text-2xl max-md:text-base max-sm:text-base text-white sm:text-xl font-TimesNewRoman tracking-wider cursor-pointer hover:underline underline-offset-4 ">
                  {art.title}
                </h3>
                <div className="flex gap-2 items-center mt-2 max-md:flex-col max-md:items-start">
                  <a href={art?.link} target="_blank" rel="noopener noreferrer">
                    <div className="flex">
                      <span className="uppercase text-[13px] max-sm:text-[10px] 2xl:text-[18px] text-white max-md:text-[12px] hover:underline hover:text-blue-500 font-Oswald">
                        {art?.publication}{" "}
                      </span>
                      <img
                        src={goto}
                        className="w-3 2xl:w-5 mx-1 h-3 2xl:h-5 invert"
                        alt=""
                      />
                    </div>
                  </a>
                  <span className="text-white items-center max-md:hidden">
                    -
                  </span>
                  <h3 className=" text-sm text-gray-400 2xl:text-lg max-sm:text-[12px] font-CooperHevitt tracking-wider">
                    {art.Date}
                  </h3>
                </div>
                <div className="max-md:hidden max-sm:p-1 my-4 max-md:mt-4 max-md:m-2 max-md:max-w-[150px]  w-auto max-w-[200px] flex justify-center items-center flex-row text-white  text-sm 2xl:text-lg  border-[1px] p-2   max-sm:text-[14px]   border-white">
                  READ NOW
                  <img src={ArrowRight} className="w-8 px-1 pl-2" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
