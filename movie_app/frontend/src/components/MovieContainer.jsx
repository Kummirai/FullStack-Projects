import MoviesCard from "./MoviesCard";

const MovieContainer = ({ movies }) => {
  return (
    <div className="card-container mb-5">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieContainer;
