import React, { useEffect, useState } from "react";
import BookHero from "../section/Book/BookHero";
import AboutBook from "../section/Book/AboutBook";
import BookDownload from "../section/Book/BookDownload";
import Testimonials from "../section/Book/Testimonials";
import Synopsis from "../section/Book/Synopsis1";

const SingleBookPage = ({ bookdetails }) => {
  return (
    <section className="bg-slate-50 max-md:pb-10 pb-20">
      <BookHero></BookHero>
      <AboutBook bookdetails={bookdetails}></AboutBook>
      <Synopsis bookdetails={bookdetails}></Synopsis>
      <Testimonials bookdetails={bookdetails}></Testimonials>
      <BookDownload bookdetails={bookdetails}></BookDownload>
    </section>
  );
};

export default SingleBookPage;
