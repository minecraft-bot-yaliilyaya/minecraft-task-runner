import "reflect-metadata";
import express from "express";
import { TYPES } from "./container/types";
import { container } from "./container/config";
import {RouteBuilder} from './route/RouteBuilder';
import {LoopService} from "./service/LoopService";

const app = express();
app.use(express.json());

container.get<RouteBuilder>(TYPES.RouteBuilder).registerRoutes(app);
container.get<LoopService>(TYPES.Service.LoopService).runLoop();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});