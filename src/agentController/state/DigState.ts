import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {DigClient} from "../../client/DigClient";
import {MoveClient} from "../../client/MoveClient";
import {FindClient} from "../../client/FindClient";
import {DigContext} from "../context/DigContext";
import {States} from "../states";

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

        if (!this.digContext.area) {
            const itemPosition = await this.findClient.item(this.digContext.items);
            if (itemPosition.position) {
                console.log(itemPosition.position);
                this.digContext.areaPosition = itemPosition.position;
                this.digContext.area = await this.findClient.aria(itemPosition.position);

                console.log(this.digContext.area);
            }
        } else {
            if (this.digContext.areaPosition) {
                console.log('this.digClient');
                const resultDig = await this.digClient.item(this.digContext.items, this.digContext.areaPosition);

                if (resultDig.error === 'ERR_NOT_IN_RANGE') {
                    this.moveClient.to(this.digContext.areaPosition);
                } else if (resultDig.error === 'ERR_INVALID_TARGET') {
                    this.digContext.area = null;
                    this.digContext.areaPosition = null;
                }
            }
        }
    }

    async changeState(): Promise<string|boolean> {
        if (!await this.digContext.hasTask()) {
            console.log([
                this.digContext.items,
                this.digContext.count
            ])
            this.digContext.finish();
            return States.find;
        }
        return false;
    }
}
