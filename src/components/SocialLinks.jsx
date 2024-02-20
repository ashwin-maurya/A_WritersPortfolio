import React from "react";
import { Link } from "react-router-dom";
export default function SocialLinks() {
  return (
    <>
      <Link
        to="https://www.facebook.com/profile.php?id=100069125886555"
        target="_blank"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <i className="fa fa-facebook"></i>
      </Link>
      <Link
        to="https://www.linkedin.com/in/aditya-gautam-595869a4/"
        target="_blank"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <i className="fa fa-linkedin"></i>
      </Link>
      <Link
        to="https://twitter.com/AMGautamWrites"
        target="_blank"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <i className="fa fa-twitter"></i>
      </Link>
      <Link
        to="https://www.instagram.com/ia.mgautam"
        target="_blank"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <i className="fa fa-instagram"></i>
      </Link>
    </>
  );
}
