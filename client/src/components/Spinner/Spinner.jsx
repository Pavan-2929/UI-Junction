import React from "react";
import { useState } from "react";

function Spinner() {
  const [copyMessage, setCopyMessage] = useState(false);

  const codeSnippet = `    <div className="flex items-center justify-center">
        <div className="w-12 h-12 rounded-full animate-spin spin-faster border-4 border-blue-500 border-t-transparent shadow-md"></div>
        </div>
    </div>`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopyMessage(true);
    setTimeout(() => {
      setCopyMessage(false);
    }, 3000);
  };

  return (
    <div className="border-l-2 border-white  py-8">
      <div className="flex flex-col bg-gray-700 rounded-lg shadow-lg w-[90%] mx-auto ">
        <div className="text-yellow-500 text-3xl text-center border-b-2 border-white p-5">
          <h1>Live Demo</h1>
        </div>
        <div className="bg-gray-800 text-white py-4 my-8">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full animate-spin spin-faster border-4 border-yellow-500 border-t-transparent shadow-md"></div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-[20vh] mb-28">
        <div className="bg-gray-700 rounded-md mt-5">
          <div className="flex justify-between items-center py-3 px-5">
            <h2 className="text-white font-bold">The code for the Spinner</h2>
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

export default Spinner;
