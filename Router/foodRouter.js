import express from "express";
import { dubu, egg, foods, milk, yogurt } from "../controllers/foodController";
import routes from "../routes";

const foodRouter = express.Router();



foodRouter.get(routes.milk, milk);
foodRouter.get(routes.egg, egg);
foodRouter.get(routes.dubu, dubu);
foodRouter.get(routes.yogurt, yogurt);



export default foodRouter;

