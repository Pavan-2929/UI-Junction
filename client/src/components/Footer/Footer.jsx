import React from "react";
import { useState } from "react";

function Footer() {
  const [copyMessage, setCopyMessage] = useState(false);
  const [name, setName] = useState("UI-Junction");
  const [newName, setNewName] = useState("");

  const codeSnippet = `import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} ${name}. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopyMessage(true);
    setTimeout(() => {
      setCopyMessage(false);
    }, 3000);
  };

  const generateHandler = (e) => {
    e.preventDefault();
    setName(newName);
  };

  return (
    <div className="border-l-2 border-white py-8">
      <div className="flex flex-col bg-gray-700 rounded-lg shadow-lg w-[90%] mx-auto ">
        <div className="text-yellow-500 text-3xl text-center border-b-2 border-white p-5">
          <h1>Live Demo</h1>
        </div>
        <div className="bg-gray-800 text-white py-4 my-8">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} UI-Junction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-10 border-b-2 border-white pb-8">
        <form className="flex justify-center items-center">
          <input
            type="text"
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
            placeholder="Enter your Website name"
            className="bg-gray-700 text-white border border-gray-500 px-4 py-2 rounded-l-lg focus:outline-none focus:border-yellow-500"
          />
          <button
            onClick={generateHandler}
            type="submit"
            className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-r-lg hover:bg-yellow-600 focus:outline-none"
          >
            Generate
          </button>
        </form>
      </div>
      <div className="w-[90%] mx-auto mt-10">
        <div className="bg-gray-700 rounded-md mt-5">
          <div className="flex justify-between items-center py-3 px-5">
            <h2 className="text-white font-bold">The code for the button</h2>
            <button
              className={`text-white ${
                true ? "bg-green-500" : "bg-yellow-600"
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

export default Footer;
