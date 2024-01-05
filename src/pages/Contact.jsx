import React from "react";
import ContactForm from "../section/Contact/ContactForm";
import ContactInfo from "../section/Contact/ContactInfo";
export default function Contact() {
  return (
    <>
      <section className="flex w-full h-full max-lg:flex-col justify-center items-center  p-10 max-sm:p-0">
        <div className="w-[40%] max-lg:w-full ">
          <ContactInfo />
        </div>

        <div className="w-[60%] max-lg:w-full">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
