import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {DigClient} from "../../client/DigClient";
import {MoveClient} from "../../client/MoveClient";
import {FindClient} from "../../client/FindClient";
import {DigContext} from "../context/DigContext";

@injectable()
export class DigState implements IState {


    constructor(
        @inject(TYPES.Context.DigContext) private digContext: DigContext,
        @inject(TYPES.Client.DigClient) private digClient: DigClient,
        @inject(TYPES.Client.MoveClient) private moveClient: MoveClient,
        @inject(TYPES.Client.FindClient) private findClient: FindClient,
    ) {}

    async run(): Promise<void> {
        if (!this.digContext.items) {
            return;
        }

        //const itemPosition = this.findClient.item(this.digContext.items);
    }

    async changeState(): Promise<string|boolean> {
        return false;
    }
}
