import { Router } from "express";
import { homeController } from "../controllers/indexController.js";

const homeRoute = Router();

homeRoute.get("/", homeController);

export { homeRoute };
