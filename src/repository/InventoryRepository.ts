import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {InventoryClient} from "../client/InventoryClient";

@injectable()
export class InventoryRepository {
    private inventory: [] = [];
    private timeCache: number = 0;

    constructor(
        @inject(TYPES.Client.InventoryClient) private inventoryClient: InventoryClient
    ) {}

    public async findAll(): Promise<[]>
    {
        if (this.timeCache && this.timeCache > performance.now()) {
            return this.inventory;
        }

        this.inventory = await this.inventoryClient.findAll();
        this.timeCache = performance.now() + 1000;

        return this.inventory;
    }

    public async findFood() {
        const inventory:[] = await this.findAll();
        const foodNames = [
            'bread',
            'cooked_porkchop',
            'golden_apple',
        ];

        return inventory.filter(function(item:{name: string}) {
            return foodNames.some((name) => name == item.name)
        });
    }
}