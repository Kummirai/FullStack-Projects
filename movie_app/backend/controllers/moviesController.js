import {
  getAllMovies,
  client,
  getMovieByYear,
  getAllYears,
} from "../models/db.js";

const allMoviesController = async (req, res) => {
  const data = await getAllMovies(client);
  const years = await getAllYears(client);
  res.json({ data, years });
};

const getMovieByYearController = async (req, res) => {
  const { year } = req.params;
  const data = await getMovieByYear(client, parseInt(year));
  res.json(data);
};

export { allMoviesController, getMovieByYearController };
