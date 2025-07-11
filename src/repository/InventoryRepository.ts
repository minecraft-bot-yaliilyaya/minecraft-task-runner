import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {InfoClient} from "../client/InfoClient";

@injectable()
export class InventoryRepository {
    private inventory: {} = {};
    private timeCache: number = 0;

    constructor(
        @inject(TYPES.Client.InfoClient) private infoClient: InfoClient
    ) {}

    public async findAll()
    {
        if (this.timeCache && this.timeCache > performance.now()) {
            return this.inventory;
        }

        this.inventory = await this.infoClient.all();
        this.timeCache = performance.now() + 10000;

        return this.inventory;
    }
}