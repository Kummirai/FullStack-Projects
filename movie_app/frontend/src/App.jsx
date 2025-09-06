import MoviesContainer from "./components/MovieContainer";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/movies");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.data);
      setMovies(data.data);
      setYears(data.years);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleDetails = () => {
    
  };

  const handleSelectYear = async (year) => {
    try {
      const response = await fetch(`http://localhost:8080/api/movies/${year}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handlePrev = () => {};

  const handleNext = () => {
    console.log("next");
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <div className="container d-flex align-items-center justify-content-center n">
          <p className="alert alert-danger w-50">No Movies found!</p>
        </div>
      ) : (
        <MoviesContainer
          movies={movies}
          handleDetails={handleDetails}
          years={years}
          handleSelectYear={handleSelectYear}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </>
  );
}

export default App;
