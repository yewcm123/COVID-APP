import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pie } from "./components/charts/Pie";
import "primeflex/primeflex.css";
import "./App.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Overview from "./pages/Overview";
import HotspotLocation from "./pages/HotspotLocation";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useStateContext } from "./contexts/ContextProvider";
import CovidCasesChart from "./pages/CovidCasesChart";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative bg-indigo-50 h-screen overflow-auto">
      <BrowserRouter>
        {activeMenu ? (
          <div className="w-18rem h-full sidebar fixed bg-white">
            <SideBar />
          </div>
        ) : (
          <div className="w-0">
            <SideBar />
          </div>
        )}
        <div className={`w-full h-full ${activeMenu ? "ml-72" : "flex-2"}`}>
          <div className="fixed md:static navbar w-full">
            <NavBar />
          </div>
          <div>
            <Routes>
              {/* Main Page */}
              <Route path="/" element={<Overview />} />
              <Route path="/Overview" element={<Overview />} />
              {/* Charts */}
              <Route path="/CovidCasesChart" element={<CovidCasesChart />} />
              <Route path="/HotspotLocation" element={<HotspotLocation />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
