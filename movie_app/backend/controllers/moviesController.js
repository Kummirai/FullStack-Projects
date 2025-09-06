import { getAllMovies, client } from "../models/db.js";

const allMoviesController = async (req, res) => {
  console.log(`Request recieved!`);
  const data = await getAllMovies(client);
  res.json(data);
};

export { allMoviesController };
