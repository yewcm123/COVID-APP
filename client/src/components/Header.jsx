import React from "react";
import { MdBorderColor } from "react-icons/md";

const Header = ({ category, title }) => (
  <div className="bg-white border-round-2xl p-2">
    <p className="text-gray-500 text-lg ml-3 mt-3 mb-2">{category}</p>
    <p
      className="text-gray-900 text-3xl font-bold ml-3 mt-2 mb-2"
      style={{ letterSpacing: "-.025em" }}
    >
      {title}
    </p>
  </div>
);

export default Header;
