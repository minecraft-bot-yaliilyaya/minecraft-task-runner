import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {InventoryRepository} from "../../repository/InventoryRepository";
import {InfoClient} from "../../client/InfoClient";
import {States} from "../states";

@injectable()
export class FindState implements IState {
    private agentInfo: any;

    constructor(
        @inject(TYPES.Repository.InventoryRepository) private inventoryRepository: InventoryRepository,
        @inject(TYPES.Client.InfoClient) private infoClient: InfoClient,
    ) {}

    async run(): Promise<void> {

    }

    async changeState(): Promise<string|boolean> {

        this.agentInfo = await this.infoClient.all();
        const  food = this.agentInfo.food ?? 20;
        if ( food <= 17 ) {
            return States.eatFood;
        }
        // console.log(this.agentInfo);

        return false;
    }
}
