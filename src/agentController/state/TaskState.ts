import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {InventoryRepository} from "../../repository/InventoryRepository";
import {InfoClient} from "../../client/InfoClient";
import {States} from "../states";

@injectable()
export class TaskState implements IState {


    constructor(
    ) {}

    async run(): Promise<void> {
        //Состояние отвечает за выполнение задачи из TaskRepository
        //если есть активная задача то агент пытается её выполнить

        // Необходимо каждой таске выдать разрешение
        // разрешение на добычу
        // разрешение на крафт инструментов
        // разрешение на крафт предметов

        // Если нет разрешения то необходимо либо дастать из всех хранилищ либо же явно сказать что таска не может быть выполнена
    }

    async changeState(): Promise<string|boolean> {
        return false;
    }
}
