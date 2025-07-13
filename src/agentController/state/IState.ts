export interface IState {
    /**
     * Выполняет основную логику состояния.
     * @returns Promise<void>
     */
    run(): Promise<void>;

    /**
     * Изменяет текущее состояние на следующее.
     * @returns Promise<void>
     */
    changeState(): Promise<string|boolean>;
}


