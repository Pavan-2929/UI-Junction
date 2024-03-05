import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-around p-4 border-b-2 border-white">
      <div className="text-3xl text-[#B69507] font-semibold">
        <h1>UI-Junction</h1>
      </div>
      <div>
        <ul className="flex gap-10 text-[1.4rem] text-white">
          <li>
            <NavLink
              to="/"
              className="hover:text-[#B69507] transition duration-300 ease-in-out"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className="hover:text-[#B69507] transition duration-300 ease-in-out"
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-[#B69507] transition duration-300 ease-in-out"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
