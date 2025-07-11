import { Router } from 'express';
import {AppRoutes, IRoute} from './routes.interface';

import {TYPES} from "../container/types";
import {inject, injectable} from "inversify";

import {DefaultRoutes} from "./mapping/DefaultRoutes";

@injectable()
export class RouteBuilder {
    private routes: AppRoutes

    constructor(
        @inject(TYPES.Routes.DefaultRoutes) private defaultRoutes: DefaultRoutes,
    ) {
        this.routes = [
            this.defaultRoutes,
        ];
    }

    public registerRoutes(app: Router): void {
        this.routes.forEach((route) => {

            // console.log(`bind "${route.path}"`);
            app.use(route.path, route.router);
        });

        // app.use((req, res, next) => {
        //     console.log(`[${req.method}] ${req.url}`);
        //     next();
        // });
    }
}

