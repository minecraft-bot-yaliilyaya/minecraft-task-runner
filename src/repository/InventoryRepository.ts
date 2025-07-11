import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {Item} from "prismarine-item";

@injectable()
export class InventoryRepository {

    private items: Array<Item> = new Array<Item>;

    constructor(
    ) {}
}