import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Buttons/Button";
import Accordion from "./components/Accordion/Accordion";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import Contact from "./components/Contact/Contact";
import Card from "./components/Card/Card";

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
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/Spinner" element={<Spinner />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/card" element={<Card/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
