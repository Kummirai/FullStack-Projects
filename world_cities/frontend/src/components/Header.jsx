import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-xl text-gray-900">CountryGame</h1>
      <div>
        <p>
          <span>90</span>
          <span>pts</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
