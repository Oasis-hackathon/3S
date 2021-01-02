import express from "express";
import morgan from "morgan";
import helmet from "helmet"; 
import bodyParser from "body-parser"; 
import cookieParser from "cookie-parser";

import foodRouter from "./Router/foodRouter";
import globalRouter from "./Router/globalRouter";

import routes from "./routes";

const app = express();

//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
app.set("view engine", "ejs");

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/assets'));
app.use(morgan("dev"));

app.locals.cdata = require('./assets/src/foods.json');

app.use(routes.home, globalRouter);
app.use(routes.foods, foodRouter);
app.use(routes.foodsearch,globalRouter);

export default app;