import { Router } from "express";
import { allMoviesController } from "../controllers/moviesController.js";


const movieRoute = Router();

movieRoute.get("/", allMoviesController);

export { movieRoute };
