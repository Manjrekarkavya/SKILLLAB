import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";



function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Menu" element={<Menu />} />
       <Route path="/about" element={<About />} />
       
      

     </Routes>
     </BrowserRouter>
      </>
  );
}

export default App;