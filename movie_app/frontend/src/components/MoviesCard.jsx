import React from "react";

const MoviesCard = ({ movie, handleDetails }) => {
  return (
    <div className="shadow-lg p-1 rounded-3">
      <div className="card-img-container">
        <img className="rounded-1" src={movie.poster} alt={movie.title} />
      </div>
      <div className="card-details">
        <h2 className="mb-0 line-1">{movie.title}</h2>
        <p className="mb-0">
          {movie.genres.length > 0 ? movie.genres[0] : "unknown"}
        </p>
        <p className="text-dark fw-bold mb-2">Year: {movie.year}</p>
        <div className="d-flex align-items-center">
          <p className="card-rating mb-0">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>
          <p className="mx-2 mb-0 fw-bold fs-8"> {movie.imdb.rating}</p>
        </div>
        <div className="mt-2 d-flex align-items-center justify-content-between w-100 mb-1">
          <button
            onClick={() => handleDetails(movie._id)}
            className="btn btn-outline-secondary btn-sm"
          >
            Details
          </button>
          <i className="fas fa-bookmark fs-4"></i>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
