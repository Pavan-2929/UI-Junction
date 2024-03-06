import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20vw] shadow-lg border-r-2 border-white min-h-screen pt-4 pr-4">
      <div className="text-[1.2rem] font-semibold text-center">
        <div className="mb-4 bg-effect">
          <NavLink
            to="/buttons"
            className="text-white block p-3 rounded-md border border-gray-700 hover:bg-[#313946] hover:border-transparent transition duration-300"
            activeClassName="bg-gray-700"
          >
            Buttons
          </NavLink>
        </div>
        <div className="mb-4 bg-effect">
          <NavLink
            to="/accordion"
            className="text-white block p-3 rounded-md border border-gray-700 hover:bg-[#313946] hover:border-transparent transition duration-300"
            activeClassName="bg-gray-700"
          >
            Accordion
          </NavLink>
        </div>
        <div className="mb-4 bg-effect">
          <NavLink
            to="/navbar"
            className="text-white block p-3 rounded-md border border-gray-700 hover:bg-[#313946] hover:border-transparent transition duration-300"
            activeClassName="bg-gray-700"
          >
            Navbar
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
