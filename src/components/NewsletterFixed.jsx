import React, { useState, useEffect, useRef } from "react";
import NewsletterModal from "./NewsletterModal";
import { plus } from "../assets/icons";

export default function NewsletterFixed() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    // Check if the user has visited before
    if (!hasVisitedBefore) {
      const timeoutId = setTimeout(() => {
        setShowNewsletterModal(true);
        // Set the flag in localStorage to indicate that the user has visited
        localStorage.setItem("hasVisitedBefore", "true");
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const openModal = () => {
    setShowNewsletterModal(true);
  };

  return (
    <>
      <NewsletterModal
        setShowNewsletterModal={setShowNewsletterModal}
        showNewsletterModal={showNewsletterModal}
      />

      <div
        className="max-md:hidden bg-[#B564F7] hover:bg-[#c27cfc] fixed bottom-0 right-2 mb-2 rounded-sm font-TimesNewRoman text-[25px] 2xl:text-[30px] max-lg:text-[20px] p-1 px-5 z-[99999999] text-white cursor-pointer flex select-none"
        onClick={openModal}
      >
        Subscribe
        <img loading="lazy" src={plus} alt="Subscribe Plus Button" />
      </div>
    </>
  );
}
