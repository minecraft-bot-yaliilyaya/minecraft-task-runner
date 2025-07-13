import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {BotClient} from "./BotClient";

@injectable()
export class AgentClient {

    constructor(
        @inject(TYPES.Client.BotClient) private botClient: BotClient
    ) {

    }

    public async eatFood(foodName: string) {
        return await this.botClient.get('agent/eatFood/' + foodName);
    }
}