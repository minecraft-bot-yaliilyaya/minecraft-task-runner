import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {InventoryRepository} from "../../repository/InventoryRepository";
import {InfoClient} from "../../client/InfoClient";
import {States} from "../states";

@injectable()
export class DigState implements IState {


    constructor(
    ) {}

    async run(): Promise<void> {
        //Состояние отвечает за добычу ресурсов
        //Если ресурс не найден в радиусе агента или по какойто причине не может быть добыт,
        // то необходимо явно сказать, что добыча ресурсов не возможна
    }

    async changeState(): Promise<string|boolean> {
        return false;
    }
}
