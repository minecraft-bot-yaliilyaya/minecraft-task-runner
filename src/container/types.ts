import {BotClient} from "../client/BotClient";

const TYPES = {
    RouteBuilder: Symbol.for("RouteBuilder"),
    AgentController: Symbol.for("AgentController"),
    Client: {
        BotClient: Symbol.for("BotClient"),
        InfoClient: Symbol.for("InfoClient"),
    },
    Routes: {
        DefaultRoutes: Symbol.for("DefaultRoutes"),
    },
    Controller: {
        DefaultController: Symbol.for("DefaultController"),
    },
    Repository: {
        InventoryRepository: Symbol.for("InventoryRepository"),
    },
    Service: {
        LoopService: Symbol.for("LoopService"),
    }
};

export { TYPES };