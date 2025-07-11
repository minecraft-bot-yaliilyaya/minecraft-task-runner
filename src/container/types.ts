import {LoopService} from "../service/LoopService";

const TYPES = {
    RouteBuilder: Symbol.for("RouteBuilder"),

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