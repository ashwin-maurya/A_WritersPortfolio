import React from "react";
import ContactForm from "../section/Contact/ContactForm";
import ContactInfo from "../section/Contact/ContactInfo";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | A.M. Gautam</title>
        <meta
          name="description"
          content="Contact A.M. Gautam on his mail. Feedbacks, reviews, questions, interviews everything. Just hop on."
        />
      </Helmet>
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
