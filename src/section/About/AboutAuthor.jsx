import React from "react";

export default function AboutAuthor() {
  return (
    <>
      <div className="relative bg-slate-50  p-16 max-sm:p-0 max-md:mt-8  max-sm:ml-4  justify-center items-center">
        <div className="float-left ">
          <img
            src="https://lh3.googleusercontent.com/pw/ABLVV85D7meutv_6vpScXzib2drsyc0b5iuJzE7qAPhOkZLgAH_9xRt34reh_z5wwCDgQodWfKcO1VDgbqdHywHvr37guFsOMEz_BT5nfv-PK8WK4fN6BsAW_XX3_FVCptCPQdyxtzR3fBtVYPvSAUQnkRAEYw=w685-h913-s-no-gm?authuser=0"
            // src={RandomPerson}
            alt="person"
            className=" pb-4  pr-6 z-10 max-sm:pr-2 max-sm:pb-1 max-xl:h-[550px] max-lg:h-[500px] max-md:h-[235px]   h-[500px]  "
          />
        </div>
        <div className="text-black flex font-Authorfont transform translate-y-10  my-3 max-md:m-0 mt-0 max-md:ml-2  "></div>

        <div className="bg-slate-200 z-50 max-lg:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
        <div className="bg-slate-500/10 z-50  h-72 top-72 w-72 max-lg:hidden  rounded-full  absolute  right-32 "></div>
        <div className="bg-slate-400/10 z-50 h-48 top-[550px] w-48 max-lg:hidden  rounded-full  absolute  right-4 "></div>
        <div className="text-[18px]  text-justify bg-white w-[60%] max-lg:w-[80%] max-md:w-[90%] max-md:p-3 max-sm:leading-[19px] max-md:text-[16px] max-sm:text-[15px] font-montserrat   max-sm:ml-4 max-sm:mt-14  ml-24 mt-24  p-14  max-sm:pt-5   ">
          <span className="text-[20px]  font-[500]  ">A.M. Gautam </span>
          is an Indian writer from Bangalore with interests in cultural
          commentary, essays, and speculative fiction. He has been published in
          various literary magazines, journals, and newspapers in India and
          elsewhere. In 2022, his work appeared in David Davidar’s A Case of
          Indian Marvels anthology which recognized “the country’s finest new
          writers” and the very next year he was published in the The Greatest
          Indian Stories Ever Told alongside literary stars like Premchand,
          RabindranathTagore, Krishna Sobti, and Ruskin Bond. He has twice been
          longlisted for the TFA Award in Creative Writing, and in 2020 he won
          the Short Story Prize from Defenestration, where he was then invited
          to serve as a judge for future contests. A.M. Gautam's debut essay
          collection is forthcoming from The Aleph Book Company.
        </div>
      </div>
    </>
  );
}
