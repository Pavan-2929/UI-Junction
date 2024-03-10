import React, { useState } from "react";
import axios from "axios";

const Feedback = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact/create",
        formData
      );

      if (response.status === 200) {
        setFormData({ username: "", email: "", message: "" });
        alert("Feedback submitted successfully!");
      }
    } catch (error) {
      console.log(error);
      alert("Error submitting feedback. Please try again later.");
    }
  };

  return (
    <div className="mx-auto pt-14 h-screen flex justify-center">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[40vw] ml-auto "
        >
          <h1 className="text-3xl font-semibold text-gray-300 mb-8 text-center">
            Give Your Valuable Feedback
          </h1>

          <div className="mb-4">
            <label htmlFor="username" className="block text-yellow-600 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Your username"
              className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-yellow-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-yellow-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="5"
              placeholder="Enter your message"
              className="w-full p-2 border bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-700 text-white py-2 px-4 hover:bg-yellow-900 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
