import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [copyMessage, setCopyMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLoginChange = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("[Your api]", formData);

      if (response.status === 200) {
        // You can implement the redirect logic here or handle success in another way
        console.log("Login successful");
        setFormData({}); // Clear the form after successful login
      }
    } catch (error) {
      console.log(error);
    }
  };

  const codeSnippet = `import React, { useState } from "react";

const Login = () => {
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
        <form
          onSubmit={handleLoginChange}
          className="w-full lg:w-1/2 p-10 pb-0 rounded-lg mt-4 font-semibold bg-gray-700"
        >
          <h1 className="sm:text-4xl text-3xl font-bold mb-10 text-[#ccc]">
            Login with your account
          </h1>

          <div className="mb-4">
            <label htmlFor="email" className="text-yellow-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className="w-full p-2 border bg-[#414141] text-[#ccc] focus:bg-none rounded-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-yellow-500">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-yellow-500 text-white p-2 mt-5 mb-10 hover:bg-yellow-600 rounded"
            >
              Login Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopyMessage(true);
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
              <label htmlFor="email" className="text-yellow-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-yellow-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-700 text-white py-2 px-4 mt-8 hover:bg-yellow-900 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Login Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-3/4 mx-auto mt-10">
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
};

export default Login;
