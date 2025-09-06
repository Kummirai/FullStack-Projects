import React from "react";

const MoviesContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img-container">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg"
            alt=""
          />
        </div>
        <div className="card-details">
          <h2 className="mb-0">Movie Name</h2>
          <p className="mb-0">Movie Genre</p>
          <div className="card-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="mt-3 d-flex align-items-center justify-content-between w-100">
            <button className="btn btn-outline-secondary btn-sm">
              Details
            </button>
            <i className="fas fa-bookmark fs-4"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesContainer;
