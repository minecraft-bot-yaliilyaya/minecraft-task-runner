import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import {AgentController} from "../agentController/AgentController";
import {InfoClient} from "../client/InfoClient";

@injectable()
export class LoopService {

    botIsStart: boolean = false;

    constructor(
        @inject(TYPES.AgentController)   private agentController: AgentController,
        @inject(TYPES.Client.InfoClient) private infoClient: InfoClient
    ) {}

    public async runLoop() {
        while (true) {
            await this.delay(1000);
            if (!await this.checkBotIsRunning()) {
                continue;
            }
            //console.log(["runLoop"]);
            this.agentController.loop();
        }
    }

    async checkBotIsRunning()
    {
        if (this.botIsStart) {
            return true;
        }

        const info = await this.infoClient.all();
        console.log(["checkBotIsRunning", info.health]);
        this.botIsStart = info.health ?? false;

        return this.botIsStart;
    }

    private async delay(time: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, time));
    }
}
