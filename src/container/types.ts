import {DigState} from "../agentController/state/DigState";

const TYPES = {
    RouteBuilder: Symbol.for("RouteBuilder"),
    AgentController: Symbol.for("AgentController"),
    StateMachine: Symbol.for("StateMachine"),
    Client: {
        BotClient: Symbol.for("BotClient"),
        InfoClient: Symbol.for("InfoClient"),
        InventoryClient: Symbol.for("InventoryClient"),
        AgentClient: Symbol.for("AgentClient"),
        DigClient: Symbol.for("DigClient"),
        MoveClient: Symbol.for("MoveClient"),
        FindClient: Symbol.for("FindClient"),

    },
    Context: {
        DigContext: Symbol.for("DigContext"),
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
        DigState: Symbol.for("DigState"),
    },

};

export { TYPES };