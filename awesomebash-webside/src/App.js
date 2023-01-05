import React from "react";
import './index.css'
import { Navbar } from "./navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </>
  );
}

export default App;
