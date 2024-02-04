import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const StoryCard = ({ ind }) => {
  const navigate = useNavigate();
  const [story, setstory] = useState();
  useEffect(() => {
    setstory(ind);
  }, [ind?.title]);
  return (
    <section
      key={2}
      className="relative"
      onClick={() => {
        navigate(`/Story/${story?.title.replace(/\s+/g, "-")}`);
      }}
    >
      <div className="z-50   shadow-black bg-black max-md:shadow-xl max-md:shadow-gray-600  shadow-md">
        <img
          loading="lazy"
          src={story?.cover}
          alt=""
          className=" w-[240px] max-md:h-[280px]   h-[380px]  max-md:w-full opacity-70"
        />
      </div>
      <div className=" z-50 absolute max-md:left-3  w-[75%]  left-9 bottom-12 flex flex-col  max-md:bottom-7  gap-24  max-md:gap-20 max-md:w-[85%]">
        <div className="tracking-widest  text-yellow-400 uppercase font-Gamiliademo max-md:text-[18px]  text-[28px] text-center ">
          {story?.title}
        </div>
        <div className="tracking-widest  text-yellow-500 uppercase font-Authorfont text-[20px]  font-light max-md:text-[14px] text-center ">
          By A.M. Gautam
        </div>
      </div>
    </section>
  );
};

export default StoryCard;
