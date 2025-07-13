import { inject, injectable } from 'inversify';
import {TYPES} from "../container/types";
import {InventoryRepository} from "../repository/InventoryRepository";
import {StateMachine} from "./StateMachine";

@injectable()
export class AgentController {

    constructor(
        @inject(TYPES.StateMachine) private stateMachine: StateMachine
    ) {}

    async loop() {
        const status = await this.stateMachine.run();
    }
}
