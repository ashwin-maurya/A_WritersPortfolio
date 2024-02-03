import React, { useEffect, useState } from "react";
import SingleStoryPage from "../pages/SingleStoryPage";
import { useParams } from "react-router";
import { storyCover } from "../components/constants";
import { Helmet } from "react-helmet";
const SingleStoryLayout = () => {
  const { story } = useParams();
  const [cover, setcover] = useState({});

  useEffect(() => {
    setcover(
      storyCover.filter((storycover) => {
        return story === storycover.title.replace(/\s+/g, "-");
      })
    );
  }, [story]);
  return (
    <>
      <Helmet>
        <title>{`${cover[0]?.title} | Story | A.M. Gautam`}</title>
        <meta name="description" content={cover[0]?.shortDescription} />
      </Helmet>{" "}
      <SingleStoryPage storydata={cover[0]}></SingleStoryPage>
    </>
  );
};

export default SingleStoryLayout;
