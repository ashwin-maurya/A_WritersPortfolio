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
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 2xl:text-lg font-montserrat  w-[70%] max-lg:w-full">
              <ul className="text-gray-600 flex flex-col gap-2 font-medium">
                <li className="mb-2">
                  <span className="font-semibold">Books</span>
                </li>

                <li>
                  <Link
                    to="/Book/The-Greatest-Indian-Stories-Ever-Told"
                    className="hover:underline line-clamp-2"
                  >
                    The Greatest Indian Stories Ever Told
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Book/A-Case-of-Indian-Marvels:-Dazzling-Stories-from-the-Country’s-Finest-New-Writers"
                    className="hover:underline line-clamp-2"
                  >
                    A Case of Indian Marvels
                  </Link>
                </li>
              </ul>
              <ul className="text-gray-600 flex flex-col gap-2 font-medium">
                <li className="mb-2">
                  <span className="font-semibold">Articles</span>
                </li>

                <li>
                  <Link
                    to="/Article/The-Peculiar-Perils-(and-Excitements)-of-Living-in-One-Language-and-Writing-in-Another"
                    className="hover:underline line-clamp-2"
                  >
                    The Peculiar Perils (and Excitements) of Living in One
                    Language and Writing in Another
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Article/In-Defense-Of-Moonlighting"
                    className="hover:underline line-clamp-2"
                  >
                    In Defense Of Moonlighting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Article/Coward-attacks-literary-giant,-achieves-nothing"
                    className="hover:underline line-clamp-2"
                  >
                    Coward attacks literary giant, achieves nothing
                  </Link>
                </li>
              </ul>
              <ul className="text-gray-600 flex flex-col gap-2 font-medium">
                <li className="mb-2">
                  <span className="font-semibold">View</span>
                </li>
                <li>
                  <Link to="/" className="hover:underline line-clamp-2">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline line-clamp-2">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
              <ul className="text-gray-600 flex flex-col gap-2 font-medium">
                <li className="mb-2">
                  <span className="font-semibold">More</span>
                </li>
                <li>
                  <Link to="/" className="hover:underline line-clamp-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline line-clamp-2">
                    Fiction
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline line-clamp-2">
                    Non-Fiction
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline line-clamp-2">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-lg:my-5 max-lg:mb-10 w-[30%] max-lg:w-full">
              <div className=" w-[100%] my-2 max-lg:w-[90%] max-sm:w-full">
                <h1 className="text-xl my-1 font-bold mb-3 text-center max-sm:mb-0 font-CooperHevitt 2xl:text-2xl ">
                  Susbcribe to our Newsletter
                </h1>
                <div className="relative">
                  <NewsletterCard />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 " />
          <div className="flex items-center justify-between">
            <div className="flex space-x-5 text-xl 2xl:text-2xl sm:justify-center sm:mt-0">
              <SocialLinks />
            </div>
            <span className="text-sm 2xl:text-xl flex items-center text-gray-600 sm:text-center  font-montserrat">
              <Link
                to="/"
                className="font-Authorfont  text-base 2xl:text-2xl hover:underline line-clamp-2 mr-1"
              >
                A.M. Gautam
              </Link>
              © 2024{" "}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
