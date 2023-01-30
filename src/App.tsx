import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Outlet, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

import "./App.css";

function App() {

  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="navbar" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
