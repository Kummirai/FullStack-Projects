import MoviesContainer from "./components/MovieContainer";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <>
      <MoviesContainer movies={movies} />
    </>
  );
}

export default App;
