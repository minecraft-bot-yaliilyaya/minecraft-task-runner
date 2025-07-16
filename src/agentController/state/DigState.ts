import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {DigClient} from "../../client/DigClient";
import {MoveClient} from "../../client/MoveClient";
import {FindClient} from "../../client/FindClient";

@injectable()
export class DigState implements IState {


    constructor(
        @inject(TYPES.Client.DigClient) private digClient: DigClient,
        @inject(TYPES.Client.MoveClient) private moveClient: MoveClient,
        @inject(TYPES.Client.FindClient) private findClient: FindClient,
    ) {}

    async run(): Promise<void> {

    }

    async changeState(): Promise<string|boolean> {
        return false;
    }
}
