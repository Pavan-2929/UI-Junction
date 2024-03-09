import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  const [copyMessage, setCopyMessage] = useState(false);

  const posts = [
    {
      _id: "1",
      title: "First Post",
      image: "https://example.com/image1.jpg",
      content: "<p>This is the content of the first post.</p>",
      profilePicture:
        "https://firebasestorage.googleapis.com/v0/b/studymates-2929.appspot.com/o/9843c460ff72ee89d791bffe667e451c.png?alt=media&token=8fefa2d0-3095-405d-88dc-7a99cef9321e",
      username: "user1",
      slug: "first-post",
    },
    {
      _id: "2",
      title: "Second Post",
      image: "https://example.com/image2.jpg",
      content: "<p>This is the content of the second post.</p>",
      profilePicture:
        "https://firebasestorage.googleapis.com/v0/b/studymates-2929.appspot.com/o/9843c460ff72ee89d791bffe667e451c.png?alt=media&token=8fefa2d0-3095-405d-88dc-7a99cef9321e",
      username: "user2",
      slug: "second-post",
    },
    {
      _id: "3",
      title: "Third Post",
      image: "https://example.com/image3.jpg",
      content: "<p>This is the content of the third post.</p>",
      profilePicture:
        "https://firebasestorage.googleapis.com/v0/b/studymates-2929.appspot.com/o/9843c460ff72ee89d791bffe667e451c.png?alt=media&token=8fefa2d0-3095-405d-88dc-7a99cef9321e",
      username: "user3",
      slug: "third-post",
    },
  ];
  const codeSnippet = `import React from "react";

const CardComponent = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts && posts.length > 0 && (
        <>
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-[#282828] rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 h-14">
                  {post.title}
                </h2>
                <p
                  className="text-sm text-white mb-4 overflow-hidden"
                  style={{
                    WebkitLineClamp: 5,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.profilePicture}
                      alt={post.username}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-sm">{post.username}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="bg-blue-400 text-white p-2 hover:bg-blue-500 rounded focus:outline-none mr-2"
                      onClick={() => { 
                        // Handle button click, navigate to the post page or do other actions
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CardComponent;`;


  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopyMessage(true);
    setTimeout(() => {
      setCopyMessage(false);
    }, 3000);
  };
  return (
    <div className="border-l-2 border-white py-8 ">
      <div className="bg-gray-700 w-[90%]  mx-auto">
        <div className="text-yellow-500 text-3xl text-center border-b-2 border-white p-5 ">
          <h1>Live Demo</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {posts && posts.length > 0 && (
            <>
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/studymates-2929.appspot.com/o/973c68753cda563ba5be1c498aba1d6c.jpg?alt=media&token=d1ad08b1-5664-4e1c-ae7e-7a1788f8efc5"
                    alt={post.title}
                    className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2 h-14">
                      {post.title}
                    </h2>
                    <p
                      className="text-sm text-white mb-4 overflow-hidden"
                      style={{
                        WebkitLineClamp: 5,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                      }}
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.profilePicture}
                          alt={post.username}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <p className="text-sm">{post.username}</p>
                      </div>
                      <div>
                        <NavLink
                          type="submit"
                          className="bg-blue-400 text-white p-2 hover:bg-blue-500 rounded focus:outline-none mr-2"
                          to={`post/${post.slug}`}
                        >
                          Explore
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
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
};

export default Card;
