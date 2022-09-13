import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LineChart from "../components/charts/LineChart";
import ContentService from "../ContentService";

import { TbBiohazard } from "react-icons";
import { dispBlock } from "../contexts/links";
import { Button } from "primereact/button";
import { MdSick } from "react-icons/md";
import { GiHealing } from "react-icons/gi";
import { FaSkull } from "react-icons/fa";

{
  /* <div className='dispblock bg-white w-10rem h-5rem p-4 block mt-5 m border-round-3xl font-bold text-400 text-gray-700'>
      <div className='flex font-bold  text-gray-700'>
        <div className='border-circle flex align-items-center justify-content-center' style={{backgroundColor: color}}>
          <div className='flex p-2 text-2xl align-items-center justify-content-center'>
            {icon}
          </div>
        </div>
      </div>
      <span>{category}</span>
    </div> */
}

const Overview = () => {
  const [casesNew, setCasesNew] = useState(null);
  const [casesRecovered, setCasesRecovered] = useState(null);
  const contentService = new ContentService();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      contentService.getTodayData().then((data) => {
        setCasesNew(data.casesNew);
        setCasesRecovered(data.casesRecovered);
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="h-full m-5 p-2 pt-3 border-round-3xl">
      <Header category="Main" title="Overview" />
      <div className="flex flex-wrap align-items-center border-round-2xl my-2 p-3 gap-4">
        <div className="grid overview-display-blocks ">
          <Button
            icon=<MdSick />
            className="col-4 p-button-rounded text-2xl"
            style={{ backgroundColor: "#f03c3c", borderWidth: "0px" }}
          />
          <div className="col-8 text-gray-600">
            <span className="">New Cases</span>
            <div>{casesNew}</div>
          </div>
        </div>
        <div className="grid overview-display-blocks">
          <Button
            icon=<MdSick />
            className="col-4 p-button-rounded text-2xl"
            style={{ backgroundColor: "#46e62e", borderWidth: "0px" }}
          />
          <div className="col-8 text-gray-600">
            <span className="">Recovered Cases</span>
            <div>{casesRecovered}</div>
          </div>
        </div>
        <div className="grid overview-display-blocks">
          <Button
            icon=<MdSick />
            className="col-4 p-button-rounded text-2xl"
            style={{ backgroundColor: "#bfbfb8", borderWidth: "0px" }}
          />
          <div className="col-8 text-gray-600">
            <span className="">Deceased Cases</span>
            <div>20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
