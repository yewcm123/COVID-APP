import React from "react";
import Header from "../components/Header";
import LineChart from "../components/charts/LineChart";

const CovidCasesChart = () => {
  return (
    <div className="bg-white h-full m-5 p-2 pt-3 border-round-3xl">
      <Header category="Charts" title="Daily Covid Cases" />
      <div className="m-4">
        <LineChart />
      </div>
    </div>
  );
};

export default CovidCasesChart;
