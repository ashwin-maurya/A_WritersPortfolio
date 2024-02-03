import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import SingleBookLayout from "./Layout/SingleBookLayout";
import NewsEvents from "./pages/NewsEvents";
import SingleArticleLayout from "./Layout/SingleArticleLayout";
import ScrollToTop from "./components/ScrollToTop";
import SingleStoryLayout from "./Layout/SingleStoryLayout";
import NewsletterFixed from "./components/NewsletterFixed";
const App = () => {
  return (
    <Router>
      <NewsletterFixed />
      <ScrollProgress />
      <ScrollToTop />
      <main className=" container select-none">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Work/:type" element={<Work />} />
          <Route path="/Press&Events" element={<NewsEvents />} />
          <Route path="/Book/:book" element={<SingleBookLayout />} />
          <Route path="/Article/:article" element={<SingleArticleLayout />} />
          <Route path="/Story/:story" element={<SingleStoryLayout />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </main>
    </Router>
  );
};

export default App;
