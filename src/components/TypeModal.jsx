import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function TypeModal({ changeNav, setcurrentLoc }) {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      changeNav();
    }
  };

  return (
    <>
      <div
        id="myModal"
        className="fixed z-[99999] inset-0 transition-all ease-in-out duration-300 w-screen h-screen"
        ref={modalRef}
        onClick={handleOutsideClick}
      ></div>

      <div
        id="dropdownAvatarName "
        className="z-[999999] font-poppins block absolute left-0 top-8 bg-white divide-y divide-gray-100 rounded-sm shadow-sm w-36 dark:bg-darkBgPrimary  border "
      >
        <ul
          className="py-2 text-base 2xl:text-lg text-gray-700 "
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li
            onClick={() => {
              navigate("/Work/Non-Fiction");
              setcurrentLoc("Non-Fiction");
              changeNav();
            }}
          >
            <span className="block px-4 py-2 hover:bg-gray-100 ">
              Non-Fiction
            </span>
          </li>
          <li
            onClick={() => {
              navigate("/Work/Fiction");
              setcurrentLoc("Fiction");
              changeNav();
            }}
          >
            <span className="block px-4 py-2 hover:bg-gray-100 ">Fiction</span>
          </li>
        </ul>
      </div>
    </>
  );
}
