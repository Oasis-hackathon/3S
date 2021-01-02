import express from "express";
import { home, foodsearch } from "../controllers/foodController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.foodsearch, foodsearch);


export default globalRouter;