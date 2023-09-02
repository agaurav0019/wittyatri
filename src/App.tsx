import React from "react";
import "./App.css";
import TopNav from "./components/topNav/TopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PackagesPage from "./pages/packages-page/PackagesPage";
import PackageDetail from "./pages/packageDetail-page/PackageDetail";
import HomePage from "./pages/homepage/HomePage";
function App() {
  return (
    <Router>
      <div className="">
        <TopNav />
      </div>
      <Routes>
        <Route path="/" element = {<HomePage/>}></Route>
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/package-detail/:id" element={<PackageDetail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
