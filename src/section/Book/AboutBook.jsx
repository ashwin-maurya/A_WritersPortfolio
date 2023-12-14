import React from "react";
import { cover1 } from "../../assets/images";

const AboutBook = () => {
  return (
    <div
      className="relative h-full w-full
     flex  p-16 max-sm:p-0 max-sm:mt-4 justify-start   max-sm:ml-4 max-md:justify-start  items-center"
    >
      <div className="  p-12 ml-20 max-md:pl-2 max-md:my-10 max-md:ml-0 bg-slate-200 max-md:pr-20 max-md:p-3  pr-64 ">
        <img
          src={cover1}
          alt="person"
          className="   max-sm:mr-2   max-sm:mb-1  max-md:h-[200px]   bg-black h-[600px] "
        />
      </div>

      {/* <div className="bg-slate-200 max-md:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
      <div className="bg-slate-200  h-72 top-72 w-72 max-md:hidden  rounded-full  absolute  right-32 "></div>
      <div className="bg-slate-200 h-48 top-[600px] w-48 max-md:hidden  rounded-full  absolute  right-4 "></div> */}
      <div
        className="text-[18px] z-30 absolute
       max-md:right-3 max-md:top-0 bg-white  top-10 right-20 text-justify  w-[40%] max-md:w-[65%] max-md:p-3 max-md:text-[11px]  max-md:leading-[15px] font-montserrat   max-sm:ml-8 max-md:mt-0     mt-24 h-auto p-14 max-  "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolorum
        iure nesciunt enim dignissimos cumque voluptatum eos, possimus odio
        error perferendis nihil atque laudantium rem quos esse cupiditate
        repellat minima. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Fugit non, dignissimos quisquam doloremque reprehenderit quod
        dolores iste impedit sed voluptas quasi culpa fuga delectus asperiores
        assumenda porro omnis, alias praesentium! Lorem ipsum dolor sit, amet
        elit. Fugit non, dignissimos quisquam doloremque reprehenderit quod
        dolores iste impedit sed voluptas quasi culpa fuga delectus asperiores
        assumenda porro omnis, alias praesentium! Lorem ipsum dolor sit, amet
      </div>
    </div>
  );
};

export default AboutBook;
