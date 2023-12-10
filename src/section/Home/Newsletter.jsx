import React from "react";
import NewsletterCard from "../../pages/NewsletterCard";
export default function Newsletter() {
  return (
    <>
      <div class="font-sans my-32 w-full h-full flex justify-center items-center">
        <div class="w-[640px] mx-5">
          <h1 class="text-center text-5xl font-bold font-CooperHevitt">
            Newsletter
          </h1>
          <p class="text-center mt-2">
            Stay up to date with our latest Reads and News
          </p>
          <div className="mt-10 mb-5">
            <NewsletterCard />
          </div>
          <p class="text-center">*No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </>
  );
}
