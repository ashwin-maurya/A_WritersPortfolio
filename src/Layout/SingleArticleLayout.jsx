import React, { useEffect, useState } from "react";
import SingleArticlePage from "../pages/SingleArticlePage";
import { useParams } from "react-router";
import { articles } from "../components/constants";
import { Helmet } from "react-helmet";

const SingleArticleLayout = () => {
  const { article } = useParams();
  const [cover, setcover] = useState({});

  useEffect(() => {
    setcover(
      articles.filter((art) => {
        return article === art.title.replace(/\s+/g, "-");
      })
    );
  }, [article]);

  return (
    <>
      <Helmet>
        <title>{`${cover[0]?.title} | Article | A.M. Gautam`}</title>
        <meta name="description" content={cover[0]?.shortDescription} />
      </Helmet>
      <SingleArticlePage articledata={cover[0]}></SingleArticlePage>;
    </>
  );
};

export default SingleArticleLayout;
