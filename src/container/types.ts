import {InventoryClient} from "../client/InventoryClient";
import {EatFoodState} from "../agentController/state/EatFoodState";
import {AgentClient} from "../client/AgentClient";

const TYPES = {
    RouteBuilder: Symbol.for("RouteBuilder"),
    AgentController: Symbol.for("AgentController"),
    StateMachine: Symbol.for("StateMachine"),
    Client: {
        BotClient: Symbol.for("BotClient"),
        InfoClient: Symbol.for("InfoClient"),
        InventoryClient: Symbol.for("InventoryClient"),
        AgentClient: Symbol.for("AgentClient"),
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
    },
    State: {
        FindState: Symbol.for("FindState"),
        EatFoodState: Symbol.for("EatFoodState"),
    },

};

export { TYPES };