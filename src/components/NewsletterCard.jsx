import React, { useState } from "react";

export default function NewsletterCard() {
  return (
    <>
      <iframe
        src="https://adityagautam.substack.com/embed"
        width="100%"
        height="100%"
        style={{
          fontSize: "25px !important",
        }}
        frameBorder="0"
      ></iframe>
    </>
  );
}
