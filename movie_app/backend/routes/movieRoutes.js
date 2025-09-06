import { Router } from "express";
import {
  allMoviesController,
  getMovieByYearController,
} from "../controllers/moviesController.js";

const movieRoute = Router();

movieRoute.get("/", allMoviesController);
movieRoute.get("/:year", getMovieByYearController);

export { movieRoute };
