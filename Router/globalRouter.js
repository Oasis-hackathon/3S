import express from "express";
import { home, foodsearch, calfoodprint, explain, foods } from "../controllers/foodController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.foodsearch, foodsearch);
globalRouter.get(routes.explain,explain);
globalRouter.get(routes.calfoodprint,calfoodprint);
globalRouter.get(routes.foods,foods);

export default globalRouter;