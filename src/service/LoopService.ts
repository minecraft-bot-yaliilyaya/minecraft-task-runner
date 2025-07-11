import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import {AgentController} from "../agentController/AgentController";

@injectable()
export class LoopService {
    constructor(
        @inject(TYPES.AgentController) private agentController: AgentController
    ) {}

    public runLoop() {
        this.agentController.loop();
    }
}
