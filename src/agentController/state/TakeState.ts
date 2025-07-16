import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {InventoryRepository} from "../../repository/InventoryRepository";
import {InfoClient} from "../../client/InfoClient";
import {States} from "../states";

@injectable()
export class TakeState implements IState {


    constructor(
    ) {}

    async run(): Promise<void> {
        //Состояние отвечает за получение ресурсов из хранилища
        //Если ресурс не найден в храанилиах или по какойто причине не может быть получен,
        // то необходимо явно сказать, что взять ресурсы нельзя
    }

    async changeState(): Promise<string|boolean> {
        return false;
    }
}
