import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {BotClient} from "./BotClient";

@injectable()
export class InfoClient {

    constructor(
        @inject(TYPES.Client.BotClient) private botClient: BotClient
    ) {
    }

    public async all() {
        return await this.botClient.get('info/all');
    }
}