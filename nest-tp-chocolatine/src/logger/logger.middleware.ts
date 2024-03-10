import {Injectable, NestMiddleware} from "@nestjs/common";
import {Logger} from "./logger";
import {Request, Response} from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private static loggerArray: Logger[] = [];

    use(req: Request, res: Response, next: Function) {
        const log = new Logger(req.method, `/${req.params['0']}`, res.statusCode, Date.now(), req.body);
        LoggerMiddleware.loggerArray.push(log);
        console.log('Request...', req.method, req.params['0'], res.statusCode, new Date().toLocaleString(), req.body);
        next();
    }

    static getLogs(): Logger[] {
        return LoggerMiddleware.loggerArray;
    }
}