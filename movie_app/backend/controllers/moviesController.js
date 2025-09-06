import { getAllMovies, client, getMovieByYear } from "../models/db.js";

const allMoviesController = async (req, res) => {
  const data = await getAllMovies(client);
  res.json(data);
};

const getMovieByYearController = async (req, res) => {
  const { year } = req.params;
  const data = await getMovieByYear(client, parseInt(year));
  res.json(data);
};

export { allMoviesController, getMovieByYearController };
