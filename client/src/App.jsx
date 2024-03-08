import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Buttons/Button";
import Accordion from "./components/Accordion/Accordion";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex h-screen">
          <Sidebar className="w-1/5" />
          <div className="flex-1">
            <Routes>
              <Route path="/button" element={<Button />} />
              <Route path="/accordion" element={<Accordion />} />
              <Route path="/navbar" element={<Navbar/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
