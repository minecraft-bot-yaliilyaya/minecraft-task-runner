import { inject, injectable } from 'inversify';
import {TYPES} from "../../container/types";
import {IState} from "./IState";
import {InventoryRepository} from "../../repository/InventoryRepository";
import {InfoClient} from "../../client/InfoClient";
import {States} from "../states";
import {DigContext} from "../context/DigContext";

@injectable()
export class FindState implements IState {
    private agentInfo: any;

    constructor(
        @inject(TYPES.Repository.InventoryRepository) private inventoryRepository: InventoryRepository,
        @inject(TYPES.Client.InfoClient) private infoClient: InfoClient,
        @inject(TYPES.Context.DigContext) private digContext: DigContext,
    ) {}

    async run(): Promise<void> {
        //TODO:: Нужно вынести в отдельный контекст, и обновлять контекст раз в секунду
        this.agentInfo = await this.infoClient.all();
    }

    async changeState(): Promise<string|boolean> {
        const  food = this.agentInfo.food ?? 20;
        if ( food <= 17 ) {
            return States.eatFood;
        }

        if (await this.digContext.hasTask()) {
            return States.dig;
        }
        // console.log(this.agentInfo);

        // Нужно создать топор - это есть задача

        // для выполнения крафта
        // нужно найти рецепт крафта топор
        // если для крафта нужен верстак то нужно сделать задачу на создание верстака
        // нужно найти рецепт крафта верстака
        // нужно проверить наличие ресурсов верстака
        // нужно найти рецепт крафта досок
        // нужно добыть ресурсы для крафта досок
        // нужно сделать доски
        // нужно сделать верстак
        // нужно проверить наличие ресурсов топора
        // нужно найти рецепт крафта палок
        // нужно добыть ресурсы для крафта палок
        // нужно сделать палки
        // нужно сделать топор


        // состояние добычи... - это состояние когда бот пытается добыть ресурсЫ
        // ресурсы которые бот пытается добыть и их количество определяется... ХЗ
        // ресурсы - это не 1н ресурс, а несколько поэтому стоит задуматься о контексте как колекция




        return false;
    }
}
