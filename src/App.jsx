import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterFixed from "./components/NewsletterFixed";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Work = lazy(() => import("./pages/Work"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TermsAndConditionsPage = lazy(() =>
  import("./pages/TermsAndConditionsPage")
);
const SingleBookLayout = lazy(() => import("./Layout/SingleBookLayout"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const SingleArticleLayout = lazy(() => import("./Layout/SingleArticleLayout"));
const SingleStoryLayout = lazy(() => import("./Layout/SingleStoryLayout"));

const App = () => {
  return (
    <Router>
      <NewsletterFixed />
      <ScrollProgress />
      <ScrollToTop />
      <main className=" container select-none">
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center transition-all ease-out duration-200  h-40 items-center mt-32 mb-96">
              <div class="shapes-5 "></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Work/:type" element={<Work />} />
            <Route path="/Press&Events" element={<NewsEvents />} />
            <Route path="/Book/:book" element={<SingleBookLayout />} />
            <Route path="/Article/:article" element={<SingleArticleLayout />} />
            <Route path="/Story/:story" element={<SingleStoryLayout />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/privacy&policy" element={<Privacy />} />
            <Route
              path="/terms&conditions"
              element={<TermsAndConditionsPage />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
