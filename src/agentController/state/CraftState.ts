import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {InventoryRepository} from "../../repository/InventoryRepository";
import {InfoClient} from "../../client/InfoClient";
import {States} from "../states";

@injectable()
export class CraftState implements IState {

    constructor(
    ) {}

    async run(): Promise<void> {
        //Состояние отвечает за выполнение задачи создание предмета
        // Крафт производиться из предметов в инвентаря
        // Крафт может выполняться на верстаке, и других столах (возможно нужно вынести в отдельное состояние)
        // Для крафта нужен рецепт

        // Если крафт не фозможен
        // то необходимо явно сказать, что Крафт ресурсов не возможна

        // Крафт может быть частичен - например 200 стаков палок ???
    }

    async changeState(): Promise<string|boolean> {
        return false;
    }
}
