import ArticleCard from "../../components/ArticleCard";

const Article = ({ ArticleData }) => {
  return (
    <section className=" max-md:py-1 max-md:mt-5 py-2  ">
      <div className="px-36  flex flex-col  justify-center my-7 mb-28 max-md:mb-10  max-md:my-0  max-md:ml-0 max-md:px-3   max-md:mx-4 max-md:gap-20 gap-36">
        {ArticleData.map((art) => (
          <ArticleCard key={3} art={art}></ArticleCard>
        ))}
      </div>
    </section>
  );
};

export default Article;
