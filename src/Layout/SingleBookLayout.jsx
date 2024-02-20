import React, { useEffect, useState } from "react";
import SingleBookPage from "../pages/SingleBookPage";
import { useParams } from "react-router";
import { covers } from "../components/constants";
import { Helmet } from "react-helmet";
const SingleBookLayout = () => {
  const { book } = useParams();
  const [cover, setcover] = useState({});

  useEffect(() => {
    setcover(
      covers.filter((bookcover) => {
        return book === bookcover.title.replace(/\s+/g, "-");
      })
    );
  }, [book]);

  return (
    <>
      <Helmet>
        <title>{`${cover[0]?.title} | Book | A.M. Gautam`}</title>
        <meta name="description" content={cover[0]?.shortDescription} />
      </Helmet>
      <SingleBookPage bookdetails={cover[0]}></SingleBookPage>
    </>
  );
};

export default SingleBookLayout;
