import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CrewPage from "./pages/CrewPage/CrewPage";
import DestinationPage from "./pages/DestinationPage/DestinationPage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";

function App() {
  return (
    <div className="App">
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} /> 
       <Route path="/crew" element={<CrewPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/technology" element={<TechnologyPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
