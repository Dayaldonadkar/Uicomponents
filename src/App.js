import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttons from "./Pages/Buttons";
import Navbars from "./Pages/Navbars";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/button" element={<Buttons />} />
        <Route path="/" element={<Navbars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
