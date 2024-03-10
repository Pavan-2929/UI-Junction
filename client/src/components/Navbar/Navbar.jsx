import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCountFunction } from "../../redux/reducers/copySlice";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState(false);
  const dispatch = useDispatch()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const codeSnippet = `import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-[78vw] border-l-2 border-white min-h-screen pt-10">
        <nav
          className={\'\${isMenuOpen ? "bg-[#414141]" : ""} p-4 font-semibold\'}
        >
          <div className="md:flex justify-around items-center">
            <div className="text-[2rem] flex justify-around items-center relative">
              <span className="text-purple-500 animate-fire">
                SkillsCrafters
              </span>
              <div onClick={toggleMenu} className="md:hidden">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>

            <div>
              <ul
                className={\`\${
                  isMenuOpen ? "block" : "hidden"
                } text-[1.3rem] md:flex space-y-8 md:space-y-0 items-center flex flex-col md:flex-row justify-center '\}
              >
                <li className="md:ml-5 xl:mx-5 sm:mt-0 mt-10 hover:text-purple-700">
                  <NavLink to="/" onClick={closeMenu}>
                    Home
                  </NavLink>
                </li>
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/about" onClick={closeMenu}>
                    About
                  </NavLink>
                </li>
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/register" onClick={closeMenu}>
                    Register
                  </NavLink>
                </li>
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/login" onClick={closeMenu}>
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopyMessage(true);
    incrementCountFunction(dispatch)
    setTimeout(() => {
      setCopyMessage(false);
    }, 3000);
  };

  return (
    <div className="w-[78vw] border-l-2 border-white min-h-screen pt-10">
      <div className="bg-gray-700 w-[90%] mx-auto rounded-md">
        <div className="text-center text-3xl text-yellow-600 mt-8 p-5 border-b-2 border-gray-200">
          <h1>Live Demo</h1>
        </div>
        <div>
          <nav
            className={`${isMenuOpen ? "bg-gray-800" : ""} p-4 font-semibold`}
          >
            <div className="md:flex justify-around items-center">
              <div className="text-[2rem] flex justify-around items-center relative">
                <span className="text-yellow-600 animate-fire">
                  UI-Junction
                </span>
                <div onClick={toggleMenu} className="md:hidden">
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
              </div>

              <div>
                <ul
                  className={`text-[1.3rem] md:flex ${
                    isMenuOpen ? "block" : "hidden"
                  } space-y-8 md:space-y-0 items-center flex flex-col md:flex-row justify-center `}
                >
                  <li className="md:ml-5 xl:mx-5 sm:mt-0 mt-14 hover:text-yellow-500">
                    <NavLink to="/" onClick={closeMenu}>
                      Home
                    </NavLink>
                  </li>
                  <li className="md:ml-5 xl:mx-5 hover:text-yellow-500">
                    <NavLink to="/about" onClick={closeMenu}>
                      About
                    </NavLink>
                  </li>
                  <li className="md:ml-5 xl:mx-5 hover:text-yellow-500">
                    <NavLink to="/register" onClick={closeMenu}>
                      Register
                    </NavLink>
                  </li>
                  <li className="md:ml-5 xl:mx-5 hover:text-yellow-500">
                    <NavLink to="/login" onClick={closeMenu}>
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-10">
        <div className="bg-gray-700 rounded-md mt-5">
          <div className="flex justify-between items-center py-3 px-5">
            <h2 className="text-white font-bold">The code for the Navbar</h2>
            <button
              className={`text-white ${
                copyMessage ? "bg-green-500" : "bg-yellow-600"
              } px-3 py-1 rounded-md`}
              onClick={handleCopyClick}
            >
              {copyMessage ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="bg-[#333] border border-gray-300 rounded-md p-4 overflow-auto text-white sm ">
            <pre>
              <code className="text-sm w-[80%]">{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
