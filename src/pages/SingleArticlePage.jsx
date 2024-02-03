import React from "react";
import ArticleHero from "../section/Article/ArticleHero";
import ArticleBody from "../section/Article/ArticleBody";

const SingleArticlePage = ({ articledata }) => {
  return (
    <section className="bg-slate-300/10 max-md:pb-10 pb-20">
      <ArticleHero></ArticleHero>
      <ArticleBody articledata={articledata}></ArticleBody>
    </section>
  );
};

export default SingleArticlePage;
