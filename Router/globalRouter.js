import express from "express";
import { home } from "../controllers/foodController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);


export default globalRouter;