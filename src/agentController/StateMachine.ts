import { inject, injectable } from 'inversify';
import {TYPES} from "../container/types";
import {ProcessStatus} from "./processStatus";
import {States} from "./states";
import {FindState} from "./state/FindState";
import {IState} from "./state/IState";
import {EatFoodState} from "./state/EatFoodState";
import {DigState} from "./state/DigState";

@injectable()
export class StateMachine {

    public states: Record<string, IState> = {};

    private state: string = States.find;

    constructor(
        @inject(TYPES.State.FindState) private findState: FindState,
        @inject(TYPES.State.EatFoodState) private eatFoodState: EatFoodState,
        @inject(TYPES.State.DigState) private digState: DigState
    ) {
        this.states[States.find] = findState;
        this.states[States.eatFood] = eatFoodState;
        this.states[States.dig] = digState;
    }

    async run(): Promise<symbol>
    {
        this.state = this.state ?? States.find;

        const state = this.states[this.state];
        if (!state) {
            throw new Error('Не определен статус: ' + this.state);
        }
        await state.run();

        let changeState = state.changeState ? await state.changeState() : this.state;

        const latestState = this.state;
        changeState = changeState ? changeState : this.state;

        this.state = typeof changeState === 'string' ? changeState : this.state;

        if (latestState !== changeState) {
            console.log("next state - " + changeState);
            return ProcessStatus.readeRun;
        }

        return ProcessStatus.notReadeRun;
    }
}
