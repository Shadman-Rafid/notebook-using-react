import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-black py-3">
        <div className="container flex justify-between items-center">
          <div>
            <h4 className="text-white font-mono font-bold text-lg px-5">
              Logo
            </h4>
          </div>
          <div>
            <ul>
              <Link
                to="/"
                className="text-white font-mono font-bold text-lg px-5"
              >
                Home
              </Link>
              <Link
                to="/notes"
                className="text-white font-mono font-bold text-lg px-5"
              >
                Notes
              </Link>
              <Link
                to="/"
                className="text-white font-mono font-bold text-lg px-5"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
