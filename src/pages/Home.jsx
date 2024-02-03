import React from "react";
import About from "../section/Home/About";
import Newsletter from "../section/Home/Newsletter";
import HomeHero from "../section/Home/HomeHero";
import ShowOption from "../section/Home/ShowOption";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>A.M. Gautam</title>
        <meta
          name="description"
          content="A.M. Gautam was born in the holy city of Haridwar and grew up to pursue the unholy vocation of writing. He has been published in
          various literary magazines, journals, and newspapers in India and elsewhere."
        />
      </Helmet>
      <About />
      <HomeHero />
      <ShowOption></ShowOption>
      <Newsletter />
    </>
  );
}
