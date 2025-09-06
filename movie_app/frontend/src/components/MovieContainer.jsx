import MoviesCard from "./MoviesCard";
import Years from "./Years";

const MovieContainer = ({
  movies,
  handleDetails,
  years,
  handleSelectYear,
  handleNext,
  handlePrev,
}) => {
  return (
    <>
      <Years
        years={years}
        handleSelectYear={handleSelectYear}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <div className="card-container mb-5">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            handleDetails={handleDetails}
          />
        ))}
      </div>
    </>
  );
};

export default MovieContainer;
