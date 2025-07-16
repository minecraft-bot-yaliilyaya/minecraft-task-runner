import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {BotClient} from "./BotClient";

@injectable()
export class DigClient {

    constructor(
        @inject(TYPES.Client.BotClient) private botClient: BotClient
    ) {
    }

    public async item(items: [], pointArea: {}) {
        return await this.botClient.post('dig/item', {
                items: items,
                point: pointArea
            }
        );
    }
}