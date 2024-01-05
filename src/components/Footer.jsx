import React from "react";
import { Link } from "react-router-dom";
import NewsletterCard from "./NewsletterCard";
import SocialLinks from "./SocialLinks";
export default function Footer() {
  return (
    <>
      <footer className="bg-white mt-5 border-t-[1px] border-gray-100">
        <div className=" w-full py-6 max-lg:py-2 px-20 max-lg:px-5">
          <div className="flex max-lg:flex-col">
            <div className="max-lg:my-5 max-lg:mb-10 w-[60%] max-lg:w-full">
              <div className=" w-[70%] my-2 max-lg:w-[90%] max-sm:w-full">
                <h1 className="text-xl my-1 font-bold mb-3 text-center max-sm:mb-0 font-CooperHevitt 2xl:text-2xl ">
                  Susbcribe to our Newsletter
                </h1>
                <div className="relative">
                  <NewsletterCard />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 2xl:text-lg font-montserrat  w-[40%] max-lg:w-full">
              <ul className="text-gray-600  font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    More Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
              <ul className="text-gray-600  font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline ">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Books
                  </Link>
                </li>
              </ul>

              <ul className="text-gray-600  font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200  lg:my-8" />
          <div className="flex items-center justify-between">
            <span className="text-sm 2xl:text-xl text-gray-600 sm:text-center  font-montserrat">
              <Link
                to="/"
                className="font-Authorfont text-base 2xl:text-2xl hover:underline mr-1"
              >
                A.M. Gautam
              </Link>
              © 2024{" "}
            </span>
            <div className="flex space-x-5 text-xl 2xl:text-2xl sm:justify-center sm:mt-0">
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
