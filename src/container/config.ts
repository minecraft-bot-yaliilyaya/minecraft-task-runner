import { Container } from "inversify";
import { TYPES } from "./types";

import {RouteBuilder} from "../route/RouteBuilder";
import {DefaultRoutes} from "../route/mapping/DefaultRoutes";

import {DefaultController} from "../controller/DefaultController";

import {InventoryRepository} from "../repository/InventoryRepository";


const container = new Container();

// Route
container.bind<RouteBuilder>(TYPES.RouteBuilder).to(RouteBuilder).inSingletonScope();
container.bind<DefaultRoutes>(TYPES.Routes.DefaultRoutes).to(DefaultRoutes).inSingletonScope();

// Controller
container.bind<DefaultController>(TYPES.Controller.DefaultController).to(DefaultController).inSingletonScope();

// Repository
container.bind<InventoryRepository>(TYPES.Repository.InventoryRepository).to(InventoryRepository).inSingletonScope();

export { container };