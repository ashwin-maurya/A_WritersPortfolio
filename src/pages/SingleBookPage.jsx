import React, { useEffect, useState } from "react";
import BookHero from "../section/Book/BookHero";
import AboutBook from "../section/Book/AboutBook";

const SingleBookPage = ({ bookdetails }) => {
  return (
    <section className="bg-slate-50 max-md:pb-10 pb-20">
      <BookHero></BookHero>
      <AboutBook bookdetails={bookdetails}></AboutBook>
    </section>
  );
};

export default SingleBookPage;
