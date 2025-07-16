import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {InventoryRepository} from "../../repository/InventoryRepository";

@injectable()
export class DigContext {
    items: string[] | null = null;
    count: number = 0;
    area: {} | null = null;
    areaPosition: {} | null = null;

    constructor(
        @inject(TYPES.Repository.InventoryRepository) private inventoryRepository: InventoryRepository,
    ) {
        this.addItem('oak_log', 20);
    }

    public async hasTask(): Promise<boolean>
    {
        if (this.items !== null) {
            const hasItems: boolean = await this.inventoryRepository.hasItems(this.items, this.count);
            return !hasItems;
        }
        return false;
    }

    public finish()
    {
        this.items = null;
        this.count = 0;
        this.area = null;
        this.areaPosition = null;
    }

    public addItem(item: string, count: number)
    {
        this.items = [item];
        this.count = count;
    }
}
