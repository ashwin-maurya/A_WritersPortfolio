import React, { useEffect, useRef, useState } from "react";
import Books from "../section/Work/Books";
import Article from "../section/Work/Articles";
import Stories from "../section/Work/Stories";
import { useNavigate, useParams } from "react-router";
import { articles, covers, storyCover } from "../components/constants";
import { Helmet } from "react-helmet";
export default function Work() {
  const { type } = useParams();
  console.log(type);
  const navigate = useNavigate();
  const Bookref = useRef(null);
  const Articleref = useRef(null);
  const Newsref = useRef(null);
  const [BookData, setBookData] = useState([]);
  const [StoryData, setStoryData] = useState([]);
  const [ArticleData, setArticleData] = useState([]);

  useEffect(() => {
    if (type === "Fiction") {
      setBookData(
        covers.filter((book) => {
          return book.genre === "Fiction";
        })
      );
      setStoryData(
        storyCover.filter((story) => {
          return story.genre === "Fiction";
        })
      );
      setArticleData(
        articles.filter((article) => {
          return article.genre === "Fiction";
        })
      );
    }
    if (type === "Non-Fiction") {
      setBookData(
        covers.filter((book) => {
          return book.genre === "Non-Fiction";
        })
      );
      setStoryData(
        storyCover.filter((story) => {
          return story.genre === "Non-Fiction";
        })
      );
      setArticleData(
        articles.filter((article) => {
          return article.genre === "Non-Fiction";
        })
      );
    }
  }, [type]);

  return (
    <>
      <Helmet>
        <title>{`${type} | Work | A.M. Gautam`}</title>
        <meta
          name="description"
          content="Fiction and Non-Fiction Work by A.M. Gautam"
        />
      </Helmet>
      <section className=" flex justify-center flex-col items-center relative max-md:py-0 max-md:mb-10  mb-28  bg-white py-2">
        <div className="text-center tracking-wider border- font-Gamiliademo  py-20  max-md:py-8 text-[55px] max-md:text-[40px] ">
          {type}
        </div>
        {BookData.length > 0 && (
          <div ref={Bookref}>
            <Books BookData={BookData}></Books>
          </div>
        )}
        {StoryData.length > 0 && (
          <div ref={Newsref}>
            <Stories StoryData={StoryData}></Stories>
          </div>
        )}
        {ArticleData.length > 0 && (
          <div ref={Articleref} className="">
            <Article ArticleData={ArticleData}></Article>
          </div>
        )}

        <button
          className="bg-black text-white max-md:p-2  p-4 text-[20px] max-md:text-[16px]  flex justify-center items-center text-center font-serif"
          onClick={() => {
            if (type === "Fiction") {
              navigate("/Work/Non-Fiction");
            } else {
              navigate("/Work/Fiction");
            }
          }}
        >
          Read {type === "Fiction" ? "Non-Fiction" : "Fiction"} ⟶
        </button>
      </section>
    </>
  );
}
