import React from "react";
import AboutCrousel from "../section/About/AboutCrousel";
import AboutAuthor from "../section/About/AboutAuthor";
import AboutHero from "../section/About/AboutHero";
import WritingJourney from "../section/About/WritingJourney";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About | A.M. Gautam</title>
        <meta
          name="description"
          content="A.M. Gautam was born in the holy city of Haridwar and grew up to pursue
      the unholy vocation of writing. He has been published in
      various literary magazines, journals, and newspapers in India
      and elsewhere."
        />
      </Helmet>
      <AboutHero></AboutHero>
      <AboutAuthor></AboutAuthor>
      <AboutCrousel></AboutCrousel>
      <WritingJourney></WritingJourney>
    </>
  );
};

export default About;
