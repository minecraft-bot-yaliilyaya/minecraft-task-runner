import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {BotClient} from "./BotClient";

@injectable()
export class MoveClient {

    constructor(
        @inject(TYPES.Client.BotClient) private botClient: BotClient
    ) {
    }

    public async to(point: {}) {
        return await this.botClient.post('move/to', {
                point: point
            }
        );
    }
}