import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [count, setCount] = useState("");

  const getCount = async () => {
    try {
      const response = await axios.get(
        "https://ui-junction-server.onrender.com/api/count/get"
      );

      console.log(response);
      setCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <div className="flex items-center justify-center py-20 text-white border-l-2 border-white">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to <span className="text-yellow-400">UI-Junction</span>
        </h1>
        <p className="text-2xl font-bold mb-8">
          Total Copied components {count}
        </p>
        <p className="text-lg mb-6">
          Your one-stop destination for{" "}
          <span className="text-yellow-400">React + Tailwind CSS</span>{" "}
          components. Explore our vast collection of components including
          buttons, cards, forms, navigation bars, and more.
        </p>
        <p className="text-lg mb-6">
          Each component is{" "}
          <span className="text-yellow-400">carefully crafted</span> with
          attention to detail and best practices, ensuring{" "}
          <span className="text-yellow-400">consistency and quality</span> in
          your projects.
        </p>
        <p className="text-lg mb-6">
          Can't find the specific component you need? Our platform is constantly
          evolving, and we{" "}
          <span className="text-yellow-400">welcome your feedback</span> and
          suggestions.
        </p>
        <p className="text-lg mb-6">
          Start building beautiful interfaces with ease. UI-Junction has
          everything you need to{" "}
          <span className="text-yellow-400">bring your ideas to life</span>.
        </p>
        <p className="text-lg">
          Ready to get started? Dive in and explore the world of{" "}
          <span className="text-yellow-400">UI-Junction</span>. Your next
          project awaits!
        </p>
      </div>
    </div>
  );
};

export default Home;
