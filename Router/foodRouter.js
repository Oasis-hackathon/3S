import express from "express";
import { cheese, dubu, egg, foods, milk } from "../controllers/foodController";
import routes from "../routes";

const foodRouter = express.Router();


foodRouter.get(routes.foods,foods);
foodRouter.get(routes.milk, milk);
foodRouter.get(routes.egg, egg);
foodRouter.get(routes.dubu, dubu);
foodRouter.get(routes.cheese, cheese);



export default foodRouter;

