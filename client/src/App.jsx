import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
