import { Container } from "inversify";
import { TYPES } from "./types";

import {AgentController} from "../agentController/AgentController";

import {RouteBuilder} from "../route/RouteBuilder";
import {DefaultRoutes} from "../route/mapping/DefaultRoutes";

import {BotClient} from "../client/BotClient";
import {InfoClient} from "../client/InfoClient";

import {DefaultController} from "../controller/DefaultController";

import {InventoryRepository} from "../repository/InventoryRepository";

import {LoopService} from "../service/LoopService";
import {StateMachine} from "../agentController/StateMachine";
import {FindState} from "../agentController/state/FindState";

const container = new Container();

container.bind<AgentController>(TYPES.AgentController).to(AgentController).inSingletonScope();
container.bind<StateMachine>(TYPES.StateMachine).to(StateMachine).inSingletonScope();

// Route
container.bind<RouteBuilder>(TYPES.RouteBuilder).to(RouteBuilder).inSingletonScope();
container.bind<DefaultRoutes>(TYPES.Routes.DefaultRoutes).to(DefaultRoutes).inSingletonScope();

// Client
container.bind<BotClient>(TYPES.Client.BotClient).to(BotClient).inSingletonScope();
container.bind<InfoClient>(TYPES.Client.InfoClient).to(InfoClient).inSingletonScope();

// Controller
container.bind<DefaultController>(TYPES.Controller.DefaultController).to(DefaultController).inSingletonScope();

// Repository
container.bind<InventoryRepository>(TYPES.Repository.InventoryRepository).to(InventoryRepository).inSingletonScope();

// Service
container.bind<LoopService>(TYPES.Service.LoopService).to(LoopService).inSingletonScope();

// State
container.bind<FindState>(TYPES.State.FindState).to(FindState).inSingletonScope();

export { container };