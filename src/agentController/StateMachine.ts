import { inject, injectable } from 'inversify';
import {TYPES} from "../container/types";
import {ProcessStatus} from "./processStatus";
import {States} from "./states";
import {FindState} from "./state/FindState";
import {IState} from "./state/IState";

@injectable()
export class StateMachine {

    public states: Record<string, IState> = {};

    private state: string = States.find;

    constructor(
        @inject(TYPES.State.FindState) private findState: FindState
    ) {
        this.states[States.find] = findState;
    }

    async run(): Promise<symbol>
    {
        this.state = this.state ?? States.find;

        console.log('current status - ' + this.state);

        const state = this.states[this.state];
        await state.run();

        let changeState = state.changeState ? await state.changeState() : this.state;

        const latestState = this.state;
        changeState = changeState ? changeState : this.state;

        console.log("next state - " + changeState);
        if (latestState !== changeState) {
            return ProcessStatus.readeRun;
        }

        this.state = changeState;

        return ProcessStatus.notReadeRun;
    }
}
