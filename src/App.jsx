import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Meals from "./components/Meals";
import Details from "./components/Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
