
const TYPES = {
    RouteBuilder: Symbol.for("RouteBuilder"),
    AgentController: Symbol.for("AgentController"),
    StateMachine: Symbol.for("StateMachine"),
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
    },
    State: {
        FindState: Symbol.for("FindState"),
    },

};

export { TYPES };