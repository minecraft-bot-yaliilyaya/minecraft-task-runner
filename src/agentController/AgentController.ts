import { inject, injectable } from 'inversify';
import {TYPES} from "../container/types";
import {InventoryRepository} from "../repository/InventoryRepository";

@injectable()
export class AgentController {

    constructor(
        @inject(TYPES.Repository.InventoryRepository) private inventoryRepository: InventoryRepository
    ) {}

    async loop() {

    }
}
