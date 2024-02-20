import StoryCardnew from "../../components/StoryCardnew";

const Stories = ({ StoryData }) => {
  return (
    <section className="flex relative flex-col my-44 mb-20 max-md:mb-0 max-md:my-12  items-center justify-center">
      <div className=" flex-col w-full mx-auto items-center justify-center flex   ">
        {StoryData?.map((ind) => {
          return <StoryCardnew key={2} ind={ind}></StoryCardnew>;
        })}
      </div>
    </section>
  );
};

export default Stories;
