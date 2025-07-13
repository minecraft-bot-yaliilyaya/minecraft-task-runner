import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {InventoryRepository} from "../../repository/InventoryRepository";
import {InfoClient} from "../../client/InfoClient";
import {States} from "../states";
import {AgentClient} from "../../client/AgentClient";

@injectable()
export class EatFoodState implements IState {
    private agentInfo: any;

    constructor(
       @inject(TYPES.Repository.InventoryRepository) private inventoryRepository: InventoryRepository,
       @inject(TYPES.Client.AgentClient) private agentClient: AgentClient,
       @inject(TYPES.Client.InfoClient) private infoClient: InfoClient,
    ) {}

    async run(): Promise<void> {
        const foods = await this.inventoryRepository.findFood();
        if (foods.length > 1) {
            const food:{name:string, count: number} = foods[0] as {name:string, count: number};
            const foodName:string = food.name;
            console.log("В рюкзаке есть еда " + foodName + " в колличестве - " + food.count)
            await this.agentClient.eatFood(foodName);
        }
    }

    async changeState(): Promise<string|boolean> {

        this.agentInfo = await this.infoClient.all();
        const food = this.agentInfo.food ?? 20;

        if (food >= 20) {
            return States.find;
        }

        return false;
    }
}
