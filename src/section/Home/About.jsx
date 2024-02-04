import React from "react";
export default function About() {
  return (
    <>
      <div className="py-12 pt-16 max-sm:pt-6 max-sm:mt-10 max-md:px-8 mx-auto">
        <div className="relative ">
          <div className="xl:w-[100%]  w-full mx-auto text-center flex flex-row max-md:flex-col justify-evenly items-center">
            <div className="w-auto flex flex-col  relative">
              <div className=" w-[350px] h-[350px] max-sm:absolute max-sm:bottom-6 max-sm:right-5 2xl:w-[400px] 2xl:h-[400px] max-xl:w-[300px]   max-xl:h-[300px] z-0 bg-gray-800 ">
                {" "}
              </div>
              <img
                loading="lazy"
                src="https://lh3.googleusercontent.com/pw/ABLVV85D7meutv_6vpScXzib2drsyc0b5iuJzE7qAPhOkZLgAH_9xRt34reh_z5wwCDgQodWfKcO1VDgbqdHywHvr37guFsOMEz_BT5nfv-PK8WK4fN6BsAW_XX3_FVCptCPQdyxtzR3fBtVYPvSAUQnkRAEYw=w685-h913-s-no-gm?authuser=0"
                alt=""
                className="2xl:w-[400px] absolute max-sm:relative max-sm:bottom-0 max-sm:right-0 bottom-12 right-10 2xl:h-[400px]  z-40 object-cover object-center w-[350px] h-[350px]  max-xl:w-[300px]   max-xl:h-[300px]"
              />
            </div>
            <div className="w-[50%] max-md:w-full">
              <div className="text-gray-900 font-HankenGrotesk text-center mb-3 max-lg:px-5 max-sm:px-0 text-xl 2xl:text-2xl max-xl:text-xl text-  max-md:text-lg max-sm:text-lg tracking-wide font-light leading-[1.5rem] 2xl:leading-[2rem] max-sm:leading-6 max-sm:text-justify max-md:mt-10">
                <p className="pb-3">
                  <span className="text-[22px] 2xl:text-[25px] text-black max-sm:text-xl ml-28 max-sm:ml-0 font-normal  mr-2 max-sm:mr-2">
                    A.M. Gautam
                  </span>
                  was born in the holy city of Haridwar and grew up to pursue
                  the unholy vocation of writing. He has been published in
                  various literary magazines, journals, and newspapers in India
                  and elsewhere.
                </p>
                <p className="pb-3">
                  <span className="text-[22px] 2xl:text-[25px] text-black max-sm:text-xl ml-28 max-sm:ml-0  mr-2 max-sm:mr-2"></span>
                  In 2022, his work appeared in David Davidar’s A Case of Indian
                  Marvels anthology which recognized “The country’s finest new
                  writers” and the very next year he was published in the The
                  Greatest Indian Stories Ever Told alongside literary stars
                  like Premchand, RabindranathTagore, Krishna Sobti, and Ruskin
                  Bond.
                </p>
                <p>
                  <span className="text-[22px] 2xl:text-[25px] text-black max-sm:text-xl ml-28 max-sm:ml-0 font-semibold  mr-2 max-sm:mr-2"></span>
                  He has twice been longlisted for the TFA Award in Creative
                  Writing, and in 2020 he won the Short Story Prize from
                  Defenestration, where he was then invited to serve as a judge
                  for future contests. A.M. Gautam’s debut essay collection is
                  forthcoming from The Aleph Book Company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
