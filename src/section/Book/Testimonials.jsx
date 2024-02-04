import React from "react";
import { ReaderReview } from "../../components/constants";
import { reviewhero } from "../../assets/images";

const Testimonials = () => {
  return (
    <section className=" relative  flex flex-col items-center text-slate-200 mt-28 max-md:mt-7 max-md:py-8">
      <div className="w-full  max-md:h-[800px] top-0  h-[800px] bg-black     max-md:py-0   max-md:bg-black max-md:blur-[0px]  ">
        <img
          loading="lazy"
          src={reviewhero}
          className="w-full  object-cover     max-md:opacity-90  h-full"
          alt="Testimonial Image"
        />
      </div>

      <div className="absolute text-center top-36 max-md:top-12  text-[36px]  font-[100] font-Gamiliademo tracking-[6px] max-md:tracking-[4px] max-md:text-[24px] uppercase border-b-2 border-slate-300">
        testimonials
      </div>
      <div
        className=" top-56 max-md:top-24  text-[20px] 
         text-slate-300 absolute   text-justify  max-md:mt-3 mt-8   font-montserrat  flex justify-center  flex-col  w-[60%] leading-6 mx-auto max-md:gap-5 gap-10 max-md:w-[90%] px-6 max-md:px-2 max-md:text-[16px]"
      >
        {ReaderReview.map((review) => {
          return (
            <div key={1} className="">
              "{review.review}"
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
