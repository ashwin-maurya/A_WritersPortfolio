import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./constants";
import SideNav from "./SideNav";

const Navbar = () => {
  const location = useLocation();
  const [showNav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, [location]);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  const NavStatus = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <>
      {showNav && <SideNav NavStatus={NavStatus}></SideNav>}
      <section
        id="navbar"
        className="relative top-0 select-none z-[100] transition-all ease-in-out duration-300"
      >
        <nav
          className={` ${
            location.pathname === "/About" ||
            location.pathname.includes("/Book")
              ? " !text-white absolute flex-row justify-between px-10 max-md:px-0 "
              : " !text-black  relative flex-col justify-center "
          } top-0 flex  max-md:flex-row max-md:justify-between py-5 pb-8 max-md:py-2 items-center w-full`}
        >
          <div
            className={` ${location.pathname === "/About" ? "text-" : ""} ${
              showNav ? "text-black" : ""
            } font-Authorfont flex transition-all duration-300 items-center text-4xl max-md:text-2xl tracking-wide my-3 max-md:m-0 mt-0 max-md:ml-5`}
          >
            <span>A</span>.M&nbsp;
            <span>G</span>autam
          </div>

          <div className="flex items-center w-auto">
            <ul className="flex-1 flex items-center gap-8 max-md:hidden">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`px-2 ${
                    (location.pathname === "/" && item.href === "/home") ||
                    location.pathname === item.href
                      ? "border-b-[1px] "
                      : ""
                  }
                  ${
                    location.pathname === "/About"
                      ? "border-b-white"
                      : "border-b-gray-600"
                  }
                  `}
                >
                  <Link
                    to={item.href}
                    className={`font-CooperHevitt text-lg text-slate-gray`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="hidden max-md:block outline-none"
              onClick={NavStatus}
            >
              <div className="relative group outline-none hover:bg-transparent">
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 ">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div
                      className={`${
                        location.pathname === "/About"
                          ? " bg-white "
                          : " bg-black "
                      } h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        showNav ? "translate-y-6 delay-100" : ""
                      }`}
                    ></div>
                    <div
                      className={`${
                        location.pathname === "/About"
                          ? " bg-white "
                          : " bg-black "
                      } h-[2px] w-7 rounded transform transition-all duration-300 ${
                        showNav ? "translate-y-6 delay-75" : ""
                      }`}
                    ></div>
                    <div
                      className={`${
                        location.pathname === "/About"
                          ? " bg-white "
                          : " bg-black "
                      } h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        showNav ? "translate-y-6" : ""
                      }`}
                    ></div>

                    <div
                      className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
                        showNav ? "translate-x-0 group-focus:w-12" : ""
                      }`}
                    >
                      <div
                        className={`absolute bg-black h-[2px] w-5 transform transition-all duration-200 ${
                          showNav
                            ? "rotate-45 delay-300 group-focus:rotate-45"
                            : "rotate-0 delay-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute bg-black h-[2px] w-5 transform transition-all duration-200 ${
                          showNav
                            ? "-rotate-45 delay-300 group-focus:-rotate-45"
                            : "-rotate-0 delay-300"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
