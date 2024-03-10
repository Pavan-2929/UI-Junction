import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import {useDispatch} from 'react-redux'
import { incrementCountFunction } from "../../redux/reducers/copySlice";

const Button = () => {
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [copyMessage, setCopyMessage] = useState(false);
  const dispatch = useDispatch();

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };
  const codeSnippet = `<button className="px-4 py-2 rounded-md bg-${color} text-white hover:bg-yellow-700 transition duration-300 hover:opacity-75">Pick a Color</button>`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopyMessage(true);
    incrementCountFunction(dispatch)
    setTimeout(() => {
      setCopyMessage(false);
    }, 3000);
  };
  return (
    <div className="flex mx-auto flex-col border-l-2 border-white min-h-screen pt-10">
      <div className="flex flex-col gap-5 border-b-2 border-white w-full pb-10">
        <div className="mx-auto flex items-center">
          <input
            type="text"
            className="bg-gray-700 text-white w-64 p-2 rounded-l border border-white"
            placeholder="Enter the color code [#0000000]"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <button
            className="bg-yellow-600 text-white px-4 py-2 rounded-r hover:bg-yellow-700 transition duration-300"
            onClick={() => {
              setShowButton(true);
              setShowColorPicker(false);
            }}
          >
            Search
          </button>
        </div>
        <div className="mx-auto">
          <div className="flex justify-center">
            <button
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition duration-300"
              onClick={toggleColorPicker}
            >
              Pick a Color
            </button>
          </div>
          <div className="flex justify-center">
            {showColorPicker && (
              <div className="mt-10">
                <SketchPicker color={color} onChange={handleColorChange} />
              </div>
            )}
          </div>
        </div>
      </div>

      {showButton && (
        <div className="w-3/4 mx-auto mt-10">
          <div className="bg-gray-700 p-5 rounded-md">
            <h1 className="text-yellow-600 text-center mb-5 text-3xl">
              Live demo
            </h1>
            <div className="flex justify-center">
              <button
                id="demoButton"
                className="px-4 py-2 rounded-md text-white hover:bg-yellow-700 transition duration-300 hover:opacity-75"
                style={{ backgroundColor: color }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="bg-gray-700 rounded-md mt-5">
            <div className="flex justify-between items-center py-3 px-5">
              <h2 className="text-white font-bold">The code for the button</h2>
              <button
                className={`text-white ${
                  copyMessage ? "bg-green-500" : "bg-yellow-600"
                } px-3 py-1 rounded-md`}
                onClick={handleCopyClick}
              >
                {copyMessage ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="bg-[#333] border border-gray-300 rounded-md p-4 overflow-auto text-white">
              <pre>
                <code className="text-sm">
                  {codeSnippet}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
