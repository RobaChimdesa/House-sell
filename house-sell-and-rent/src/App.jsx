import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Service from "./pages/service";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Contact from "./pages/contact";
import { useState } from "react";
function App() {
  const [move, setMove] = useState(0);
  return (
    <div className="bg-gray-200 dark:text-gray-50 dark:bg-slate-900 duration-100 font-serif">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
