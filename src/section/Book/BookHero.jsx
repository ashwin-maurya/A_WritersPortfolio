import React from "react";
import { Bookhero } from "../../assets/images";

const BookHero = () => {
  return (
    <div className="h-72   relative flex  bg-black justify-center max-sm:h-52 items-end ">
      <img
        src={Bookhero}
        alt="AboutTopImg"
        className="object-cover max-md:object-bottom w-full h-full opacity-30 "
      />
      <p className="absolute bottom-2 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[40px]  ">
        {" "}
        BOOK
      </p>
    </div>
  );
};

export default BookHero;
