import {LoopService} from "../service/LoopService";
import {AgentController} from "../agentController/AgentController";

const TYPES = {
    RouteBuilder: Symbol.for("RouteBuilder"),
    AgentController: Symbol.for("AgentController"),

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