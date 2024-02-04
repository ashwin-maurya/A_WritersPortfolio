import DOMPurify from "dompurify";
import React from "react";
import { useNavigate } from "react-router";

const ArticleCard = ({ art }) => {
  const navigate = useNavigate();
  return (
    <div key={2} className="max-md:flex-col flex w-full">
      <div
        className="max-md:w-full max-md:mr-0 mr-10"
        onClick={() => {
          navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
        }}
      >
        <span
          className="text-[30px] max-md:block hidden max-md:text-[21px] underline   uppercase text-gray-800 font-Oswald max-md:leading-7 max-md:mb-4 decoration-1 underline-offset-4 cursor-pointer  "
          onClick={() => {
            navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
          }}
        >
          {art?.title}
        </span>{" "}
        <img
          loading="lazy"
          src={art.cover}
          alt={art?.title}
          className="cursor-pointer w-[650px]"
        />
      </div>
      <div className="w-[60%] max-md:w-full flex max-md:gap-0  flex-col gap-4">
        <div className="max-md:mt-2 text-[23px] max-md:text-[22px]">
          <span>Published in </span>
          <a href={art.link} target="_blank" rel="noopener noreferrer">
            {" "}
            <span className="font-Authorfont mx-0 italic">
              {art.publication}
            </span>{" "}
          </a>
        </div>
        <span
          className="text-[25px] 2xl:text-[30px] max-md:hidden   max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-7 underline decoration-1 underline-offset-4 cursor-pointer max-md:mb-2"
          onClick={() => {
            navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
          }}
        >
          {art?.title}
        </span>{" "}
        <span
          className=" leading-7 max-md:mt-1 line-clamp-4 text-[25px] 2xl:text-[28px] text-justify max-md:text-[20px] max-md:leading-5 font-TimesNewRoman "
          onClick={() => {
            navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
          }}
        >
          "{art?.shortDescription}"
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
