import React from "react";
import { Aboutimg } from "../../assets/images";
export default function AboutHero() {
  return (
    <>
      <div className="h-80 max-lg:h-60 relative flex  bg-black justify-center max-sm:h-52 items-end ">
        <img
          loading="lazy"
          src={Aboutimg}
          alt="AboutTopImg"
          className="object-cover object-bottom w-full h-full opacity-60"
        />
        <p className="absolute bottom-10 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[50px]  ">
          {" "}
          AUTHOR BIOGRAPHY
        </p>
      </div>
    </>
  );
}
