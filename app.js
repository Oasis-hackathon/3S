import express from "express";
import helmet from "helmet"; 
import bodyParser from "body-parser"; 
import cookieParser from "cookie-parser";

import foodRouter from "./Router/foodRouter";
import globalRouter from "./Router/globalRouter";

import routes from "./routes";

const app = express();

//Midlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());


app.use(routes.home, globalRouter);
app.use(routes.foods, foodRouter);


export default app;