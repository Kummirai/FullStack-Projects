import React from "react";

const Years = ({ years, handleSelectYear, handlePrev, handleNext }) => {
  return (
    <div className="container year-selection">
      <div className=" row mt-5">
        <div className="col-sm-1 prev-next">
          <button onClick={handlePrev} className="btn btn-outline-danger">
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>
        <div className="col-sm-10 button-container">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleSelectYear(year)}
              className="btn btn-outline-danger m-1"
            >
              {year}
            </button>
          ))}
        </div>
        <div className="col-sm-1 prev-next">
          <button onClick={handleNext} className="btn btn-outline-danger">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Years;
