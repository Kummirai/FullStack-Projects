import React from "react";

const Header = ({ inCorrect, correct }) => {
  console.log(correct);
  console.log(inCorrect);

  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-xl text-gray-600">CountryGame</h1>
      <div>
        <p>
          <span className="text-2xl font-bold">
            {isNaN(((correct / (correct + inCorrect)) * 100).toFixed(1))
              ? "0"
              : ((correct / (correct + inCorrect)) * 100).toFixed(1)}
          </span>
          <span> pts</span>
          <div>
            <p className="text-xs text-green-700">
              Correct <span className="font-bold"> {correct}</span>
            </p>
            <p className="text-xs text-red-600">
              Incorrect <span className="font-bold"> {inCorrect}</span>
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Header;
