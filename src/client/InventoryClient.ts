import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {BotClient} from "./BotClient";

@injectable()
export class InventoryClient {

    constructor(
        @inject(TYPES.Client.BotClient) private botClient: BotClient
    ) {}

    public async findAll() {
        return await this.botClient.get('inventory/findAll');
    }
}