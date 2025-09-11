import React from "react";

const Header = ({ score }) => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-xl text-gray-600">CountryGame</h1>
      <div>
        <p>
          <span>{score}</span>
          <span>pts</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
