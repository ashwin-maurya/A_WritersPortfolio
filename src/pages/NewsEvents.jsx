import React from "react";

import Hero from "../section/NewsEvents/Hero";
import Cards from "../section/NewsEvents/Cards";
import { Helmet } from "react-helmet";
export default function NewsEvents() {
  return (
    <>
      <Helmet>
        <title>Press & News | A Gautam</title>
        <meta
          name="description"
          content="Contact A.M. Gautam on his mail. Feedbacks, reviews, questions, interviews everything. Just hop on."
        />
      </Helmet>
      <Cards />
      <div className="grid">
        <Hero />
      </div>
    </>
  );
}
