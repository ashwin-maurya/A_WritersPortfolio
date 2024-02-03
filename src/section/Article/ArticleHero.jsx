import React from "react";

const ArticleHero = () => {
  return (
    <div className="h-72  relative flex  bg-black justify-center max-sm:h-44 items-end ">
      <img
        src="https://images.unsplash.com/photo-1611222566295-885a2c99153a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2NlYW4lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
        alt="AboutTopImg"
        className="  w-full h-full opacity-30 "
      />
      <p className="absolute bottom-5 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[40px]  ">
        {" "}
        ARTICLE
      </p>
    </div>
  );
};

export default ArticleHero;
