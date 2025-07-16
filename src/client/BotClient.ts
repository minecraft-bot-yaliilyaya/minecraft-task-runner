import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import axios from 'axios';

@injectable()
export class BotClient {

    constructor(
    ) {
    }

    public async post(name: string, params: {}) {
        const response = await axios.post('http://app:3000/' + name, params, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    }

    public async get(name: string) {

        try {
        const response = await axios.get('http://app:3000/' + name, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
            return response.data;
        } catch (e) {
            return "BOT_NOT_BE_AUTH";
        }
    }
}