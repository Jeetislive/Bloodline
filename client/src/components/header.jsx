// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();


  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-3xl font-bold text-red-500">
          Blood Line
        </Link>

        <div id="navbarNavAltMarkup" className="hidden w-full md:flex md:items-center md:w-auto">
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
            <Link
              to="/"
              className={`text-black hover:text-red-500 duration-300 text-2xl font-semibold ${location.pathname === "/" ? "border-b-2 border-red-300" : ""} transition-all duration-300 ease-in-out`}
            >
              Home
            </Link>
            <Link
              to="/our-team"
              className={`text-black hover:text-red-500 duration-300 text-2xl font-semibold ${location.pathname === "/our-team" ? "border-b-2 border-red-300" : ""} transition-all duration-300 ease-in-out`}
            >
              Our Team
            </Link>
            <Link
              to="/about-us"
              className={`text-black hover:text-red-500 duration-300 text-2xl font-semibold ${location.pathname === "/about-us" ? "border-b-2 border-red-300" : ""} transition-all duration-300 ease-in-out`}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className={`text-black hover:text-red-500 duration-300 text-2xl font-semibold ${location.pathname === "/contact-us" ? "border-b-2 border-red-300" : ""} transition-all duration-300 ease-in-out`}
            >
              Contact Us
            </Link>
            
            {/* Register Now Button */}
            <Link
                  to="/register"
                  className="inline-block bg-black text-white py-2 px-6 rounded-lg"
                >
                  Register Now
                </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
