import React from "react";
import { RandomPerson } from "../../assets/images";

export default function AboutAuthor() {
  return (
    <>
      <div className="relative  p-16 max-sm:p-0 max-md:mt-8  max-sm:ml-4  justify-center items-center">
        <div className="float-left ">
          <img
            src={RandomPerson}
            alt="person"
            className=" pb-4 pr-6 z-10 max-sm:pr-2 max-sm:pb-1 max-xl:h-[550px] max-lg:h-[500px] max-md:h-[400px]  max-sm:h-[260px] h-[600px]  "
          />
        </div>
        <div className="text-black flex font-Authorfont transform translate-y-10 -translate-x-40 max-xl:-translate-x-30 max-lg:-translate-x-20  max-md:-translate-x-10 max-sm:-translate-x-0 text-center justify-center text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl tracking-wide my-6 max-md:m-0 mt-0 max-md:ml-5  ">
          <span>A</span>.M&nbsp;
          <span>G</span>autam
        </div>

        <div className="bg-slate-200 -z-50 max-lg:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
        <div className="bg-slate-200 -z-50  h-72 top-72 w-72 max-lg:hidden  rounded-full  absolute  right-32 "></div>
        <div className="bg-slate-200 -z-50 h-48 top-[600px] w-48 max-lg:hidden  rounded-full  absolute  right-4 "></div>
        <div className="text-[18px]  text-justify bg-white w-[60%] max-lg:w-[80%] max-md:w-[80%] max-sm:w-[85%] max-sm:p-2 max-sm:leading-[17px] max-md:text-[16px] max-sm:text-[15px] font-montserrat   max-sm:ml-8 max-sm:mt-14  ml-24 mt-24  p-14  max-sm:pt-5   ">
          <span className="text-[35px]  ml-3 mr-1 font-serif ">L</span>
          orem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolorum
          iure nesciunt enim dignissimos cumque voluptatum eos, possimus odio
          error perferendis nihil atque laudantium rem quos esse cupiditate
          repellat minima. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Fugit non, dignissimos quisquam doloremque reprehenderit quod
          dolores iste impedit sed voluptas quasi culpa fuga delectus asperiores
          assumenda porro omnis, alias praesentium! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Maiores, quae doloremque voluptatum unde
          exercitationem voluptate, error laboriosam minima fuga soluta ullam
          culpa accusamus necessitatibus, nihil ducimus voluptatem praesentium
          inventore. Quibusdam. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Illo dolorum iure nesciunt enim dignissimos cumque
          voluptatum eos, possimus odio error perferendis nihil atque laudantium
          rem quos esse cupiditate repellat minima. Lorem ipsum dolor sit, amet
        </div>
      </div>
    </>
  );
}