import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCountFunction } from "../../redux/reducers/copySlice";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [copyMessage, setCopyMessage] = useState(false);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLoginChange = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("[Your api]", formData);

      if (response.status === 200) {
        console.log("Login successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const codeSnippet = `import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLoginChange = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("[Your api]", formData);

      if (response.status === 200) {
        navigate("/");
        setFormData("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-2 ">
        <form onSubmit={handleLoginChange} className="space-y-4 p-8">
            <h1 className="text-3xl font-semibold text-gray-300 mb-8">
              Login with your account
            </h1>

            <div className="flex flex-col">
              <label htmlFor="username" className="text-yellow-600">
                username
              </label>
              <input
                type="text"
                id="username"
                placeholder="your username"
                onChange={handleChange}
                className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-yellow-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your email"
                onChange={handleChange}
                className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-yellow-700">
                Password
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Enter your message"
                className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-700 text-white py-2 px-4 mt-8 hover:bg-yellow-900 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Contact us
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Contact;`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopyMessage(true);
    incrementCountFunction(dispatch)
    setTimeout(() => {
      setCopyMessage(false);
    }, 3000);
  };

  return (
    <div className="border-l-2 border-white">
      <div className="flex justify-center ">
        <div className="flex flex-col mt-8 bg-gray-800 rounded-lg shadow-lg w-[50%]">
          <div className="text-yellow-500 text-3xl mb-4 text-center border-b-2 border-white p-5">
            <h1>Live Demo</h1>
          </div>
          <form onSubmit={handleLoginChange} className="space-y-4 p-8">
            <h1 className="text-3xl font-semibold text-gray-300 mb-8">
              Login with your account
            </h1>

            <div className="flex flex-col">
              <label htmlFor="username" className="text-yellow-600">
                username
              </label>
              <input
                type="text"
                id="username"
                placeholder="your username"
                onChange={handleChange}
                className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-yellow-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your email"
                onChange={handleChange}
                className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-yellow-700">
                Password
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Enter your message"
                className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-700 text-white py-2 px-4 mt-8 hover:bg-yellow-900 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Contact us
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-3/4 mx-auto mt-10">
        <div className="bg-gray-700 rounded-md mt-5">
          <div className="flex justify-between items-center py-3 px-5">
            <h2 className="text-white font-bold">The code for the contact</h2>
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
};

export default Contact;
