import React from "react";
import { Fictionimg, nonFictionimg } from "../../assets/images";
import { useNavigate } from "react-router";

const ShowOption = () => {
  const navigate = useNavigate();
  return (
    <section className="my-20 max-md:my-20   ">
      <div className="text-center max-md:text-[29px] max-md:mx-10  text-[43px] font-Gamiliademo py-10 max-md:py-6 max-md:leading-9">
        What Would You Like To Read ?
      </div>
      <div className="flex gap-14 max-md:gap-4 max-md:mx-3 justify-center   items-center ">
        <div
          className="relative flex justify-center items-center bg-black "
          onClick={() => {
            navigate("/Work/Non-Fiction");
          }}
        >
          <img
            loading="lazy"
            src={nonFictionimg}
            alt=""
            className="w-[500px] opacity-60"
          />

          <p className="absolute tracking-wide text-white font-Gamiliademo lefttext-white text-[42px] max-md:text-[24px] z-50">
            Non-Fiction
          </p>
        </div>
        <div
          className="relative flex justify-center items-center  bg-black"
          onClick={() => {
            navigate("/Work/Fiction");
          }}
        >
          <img
            loading="lazy"
            src={Fictionimg}
            alt=""
            className="opacity-60 w-[500px]"
          />
          <p className="absolute tracking-wide text-white font-Gamiliademo text-[42px] max-md:text-[24px] z-50">
            Fiction
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowOption;
