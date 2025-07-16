import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {BotClient} from "./BotClient";

@injectable()
export class FindClient {

    constructor(
        @inject(TYPES.Client.BotClient) private botClient: BotClient
    ) {
    }

    public async item(items: string[]) {
        return await this.botClient.post('find/item', {
                items: items
            }
        );
    }

    public async material(material: string) {
        return await this.botClient.post('find/material', {
                material: material
            }
        );
    }

    public async aria(point: {}) {
        return await this.botClient.post('find/aria', {
                point: point
            }
        );
    }

}