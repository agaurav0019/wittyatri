import React from 'react';
import './App.css';
import TopNav from './components/topNav/TopNav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Packages from './components/packages/Packages';

function App() {
  const packageDetails = {
    title: "Unveiling Coorg",
    desc:"A Serene Escape"
  }
  return (
    <Router>
      <div className="">
      <TopNav/>
      <Packages title={packageDetails.title} desc={packageDetails.desc}></Packages>
    </div>
    </Router>
  );
}

export default App;
