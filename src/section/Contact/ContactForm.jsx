import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const lastSubmissionTime = localStorage.getItem("lastSubmissionTime");
    if (
      lastSubmissionTime &&
      Date.now() - lastSubmissionTime < 24 * 60 * 60 * 1000
    ) {
      toast.error("Please wait 24 hours before submitting another message.");
      return;
    }

    emailjs
      .sendForm(
        "service_wycgvyo",
        "template_kimn15v",
        form.current,
        "XBhbmloKod66GP24s"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");

          // Set the last submission time in localStorage
          localStorage.setItem("lastSubmissionTime", Date.now());
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <ToastContainer />

      <section className="bg-gray-900  max-sm:px-6 py-12 2xl:py-32 max-sm:py-16">
        <div className="flex justify-evenly items-center max-sm:flex-col gap-5">
          <form
            id="form"
            className="w-[70%] max-sm:w-[90%]  font-montserrat"
            ref={form}
            onSubmit={sendEmail}
          >
            <h1 className="text-4xl 2xl:text-5xl pb-2  text-white font-bold font-CooperHevitt max-lg:text-center">
              Get in touch
            </h1>

            <div className="flex">
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="NAME"
                className="w-full h-12 2xl:text-xl px-4 bg-transparent outline-none text-white border border-solid border-gray-400  transition duration-300 ease-in-out focus:scale-105 hover:bg-gray-600 focus:bg-gray-600 hover:text-white"
                required
              />
            </div>
            <input
              id="email"
              type="text"
              placeholder="E-MAIL"
              name="user_email"
              className="w-full h-12 2xl:text-xl px-4 bg-transparent outline-none text-white border border-solid border-gray-400  transition duration-300 ease-in-out focus:scale-105 hover:bg-gray-600 focus:bg-gray-600 hover:text-white"
              required
            />
            <textarea
              id="message"
              placeholder="MESSAGE"
              name="message"
              cols={4}
              className="w-full h-32 2xl:text-xl p-4 bg-transparent outline-none text-white border border-solid border-gray-400  transition duration-300 ease-in-out focus:scale-105 hover:bg-gray-600 focus:bg-gray-600 hover:text-white"
              required
            ></textarea>
            <h5 className="font-HankenGrotesk text-sm text-red-500 mb-2">
              Note: Can only send 1 message in a day.
            </h5>
            <button
              type="submit"
              className="w-full 2xl:text-xl h-full bg-white text-black p-3 justify-center flex items-center cursor-pointer hover:bg-gray-200 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
