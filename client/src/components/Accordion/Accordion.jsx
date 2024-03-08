import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [copyMessage, setCopyMessage] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Know more about our company and our courses",
      content:
        "Welcome to our company's about page. Learn more about who we are and the courses we offer.",
    },
    {
      title: "Our Mission",
      content:
        "At our company, we are dedicated to providing high-quality education and helping individuals achieve their learning goals. Our mission is to empower students with the knowledge and skills they need to succeed in their careers.",
    },
    {
      title: "Our Courses",
      content:
        "Explore our diverse range of courses designed to meet the needs of students at various skill levels. Whether you are a beginner looking to start a new journey or an experienced professional seeking to enhance your skills, we have courses tailored for you.",
    },
  ];

  const coppySnippet = `import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Know more about our company and our courses",
      content:
        "Welcome to our company's about page. Learn more about who we are and the courses we offer.",
    },
    {
      title: "Our Mission",
      content:
        "At our company, we are dedicated to providing high-quality education and helping individuals achieve their learning goals. Our mission is to empower students with the knowledge and skills they need to succeed in their careers.",
    },
    {
      title: "Our Courses",
      content:
        "Explore our diverse range of courses designed to meet the needs of students at various skill levels. Whether you are a beginner looking to start a new journey or an experienced professional seeking to enhance your skills, we have courses tailored for you.",
    },
  ];

  return (
    <div className="w-3/4 bg-gray-700 mx-auto mt-8 p-4">
      <h1 className="text-2xl p-5 text-center">Live Demo</h1>
      {accordionItems.map((item, index) => (
        <div key={index} className="mb-8">
          <div
            className="bg-gray-800 flex justify-between p-3 font-bold cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h1>{item.title}</h1>
            <button>{activeIndex === index ? "-" : "+"}</button>
          </div>
          {activeIndex === index && (
            <div className="p-3 bg-slate-600">
              <h2>{item.content}</h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(coppySnippet);
    setCopyMessage(true);
    setTimeout(() => {
      setCopyMessage(false);
    }, 3000);
  };

  return (
    <div className="w-[78vw] border-l-2 border-white min-h-screen pt-10">
      <div className="w-3/4 bg-gray-700 mx-auto mt-8 p-4">
        <h1 className="text-2xl p-5 text-center">Live Demo</h1>
        {accordionItems.map((item, index) => (
          <div key={index} className="mb-8">
            <div
              className="bg-gray-800 flex justify-between p-3 font-bold cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h1>{item.title}</h1>
              <button>{activeIndex === index ? "-" : "+"}</button>
            </div>
            {activeIndex === index && (
              <div className="p-3 bg-slate-500">
                <h2>{item.content}</h2>
              </div>
            )}
          </div>
        ))}
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
              <code className="text-sm w-[80%]">{coppySnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
