import React from "react";

const StoryHero = () => {
  return (
    <div className="h-64  relative flex  bg-black justify-center max-sm:h-52 items-end ">
      <img
        src="https://images.unsplash.com/photo-1542213598-338d614544f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNreSUyMG5pZ2h0JTIwc3RhcnMlMjBvY2VhbnxlbnwwfHwwfHx8MA%3D%3D"
        // src={Articlehero}
        alt="AboutTopImg"
        className=" opacity-50  w-full h-full "
      />
      <p className="absolute bottom-5 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[40px]  uppercase ">
        {" "}
        Short Story
      </p>
    </div>
  );
};

export default StoryHero;
