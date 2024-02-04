import React from "react";

const AboutBook = ({ bookdetails }) => {
  return (
    <>
      <div className=" text-[56px] tracking-wider font-Gamiliademo text-center max-md:my-9 max-md:text-[30px] max-md:w-[90%]  mx-auto max-md:leading-9 mt-24">
        {bookdetails?.title.split(":")[0].trim()}
      </div>
      <div className="relative  max-lg:hidden  p-16 max-sm:p-0 max-md:mt-8  max-sm:ml-4  justify-center items-center">
        <div className=" bg-slate-200  md:pl-10  lg:pl-16 lg:ml-14 p-6 pl-36 xl:ml-36    w-[50%]   ">
          <img
            loading="lazy"
            src={bookdetails?.cover}
            alt="person"
            className="  max-sm:pr-2  max-sm:pb-1 2xl:h-[450px] h-[400px]   "
          />
        </div>

        <div className="text-[15px] 2xl:text-[18px]   absolute z-20  text-justify bg-white w-[45%] max-lg:w-[80%] max-md:w-[80%] max-sm:w-[85%] max-sm:p-2 max-sm:leading-[17px] max-md:text-[16px] max-sm:text-[14px] font-montserrat   max-sm:ml-8 max-sm:mt-14    2xl:top-28 top-36 2xl:right-36 right-20 p-10 2xl:p-16  lg:right-24 lg:w-[44%] lg:top-28    max-sm:pt-5 xl:right-36   xl:w-[44%]   ">
          <span className="text-[35px]  ml-3 mr-1 font-serif ">L</span>
          orem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolorum
          iure nesciunt enim dignissimos cumque voluptatum eos, possimus odio
          error perferendis nihil atque laudantium rem quos esse cupiditate
          repellat minima. Lorem ipsum dolor sit, amet consectetur adipisicing
          error perferendis nihil atque laudantium rem quos esse cupiditate
          repellat minima. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Fugit non, dignissimos quisquam doloremque reprehenderit quod
          dolores iste impedit sed voluptas quasi culpa fuga delectus
          asperiores."
        </div>
      </div>
      <div className="relative lg:hidden  z-50 p-16 max-sm:p-0 max-md:mt-0  max-sm:ml-4  justify-center items-center">
        <div className="float-left bottom-0  mr-2  max-md:h-[220px]">
          <img
            loading="lazy"
            src={bookdetails?.cover}
            alt="person"
            className=" pb-4  z-10 max-md:pr-0 max-md:pb-8  max-xl:h-[550px] max-lg:h-[500px]    max-sm:h-[260px] h-[600px]  "
          />
        </div>
        <div className="text-black flex font-Authorfont transform translate-y-10 -translate-x-40 max-xl:-translate-x-30 max-lg:-translate-x-20  max-md:-translate-x-10 max-sm:-translate-x-0 text-center justify-center text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl tracking-wide my-6 max-md:m-0 mt-0 max-md:ml-5  "></div>

        <div className="bg-slate-200 -z-50 max-lg:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
        <div className="bg-slate-200 -z-50  h-72 top-72 w-72 max-lg:hidden  rounded-full  absolute  right-32 "></div>
        <div className="bg-slate-200 -z-50 h-48 top-[600px] w-48 max-lg:hidden  rounded-full  absolute  right-4 "></div>
        <div className="text-[18px] -z-50 relative text-justify bg-white w-[60%] max-lg:w-[80%] max-md:w-[80%] max-sm:w-[85%] max-sm:p-2 max-sm:leading-[17px] max-md:text-[15px]  font-montserrat   max-sm:ml-8 max-md:mt-14  ml-24 mt-24  p-14  max-sm:pt-5 ">
          <span className="text-[20px]  absolute"> "</span>
          <span className="text-[35px]  ml-3 mr-1 font-serif ">L</span>
          orem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolorum
          iure nesciunt enim dignissimos cumque voluptatum eos, possimus odio
          error perferendis nihil atque laudantium rem quos esse cupiditate
          repellat minima. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Fugit non, dignissimos quisquam doloremque reprehe culpa
          accusamus necessitatibus, nihil ducimus voluptatem praesentium
          inventore. Quibusdam. Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
    </>
  );
};

export default AboutBook;
