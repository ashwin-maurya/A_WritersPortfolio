import React from "react";
import Hero from "../section/NewsEvents/Hero";
import About from "../section/Home/About";
import MoreContent from "../section/Home/MoreContent";
import Newsletter from "../section/Home/Newsletter";
import HomeHero from "../section/Home/HomeHero";
export default function Home() {
  return (
    <>
      <HomeHero />
      <About />
      <Newsletter />
      <MoreContent />
    </>
  );
}
