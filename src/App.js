import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttons from "./Pages/Buttons";
import Navbars from "./Pages/Navbars";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/button" element={<Buttons />} />
        <Route path="/" element={<Navbars />} />
        <Route path="/flex1" element={<Page1 />} />
        <Route path="/flex2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
