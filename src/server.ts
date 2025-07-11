import "reflect-metadata";
import express from "express";
import { TYPES } from "./container/types";
import { container } from "./container/config";
import {RouteBuilder} from './route/RouteBuilder';

const app = express();
app.use(express.json());

container.get<RouteBuilder>(TYPES.RouteBuilder).registerRoutes(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});