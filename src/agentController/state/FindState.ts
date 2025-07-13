import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {InventoryRepository} from "../../repository/InventoryRepository";

@injectable()
export class FindState implements IState {

    constructor(
        // @inject(TYPES.Repository.InventoryRepository) private inventoryRepository: InventoryRepository
    ) {}

    async run(): Promise<void> {

    }

    async changeState(): Promise<void> {

    }
}
