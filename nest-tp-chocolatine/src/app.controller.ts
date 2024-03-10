import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {LoggerService} from "./logger/logger.service";

@Controller()
export class AppController {

    constructor(
        private readonly appService: AppService,
        private readonly loggerService: LoggerService,
    ) {}

    @Get('logs')
    getLogs(): string {
        return JSON.stringify(this.loggerService.getVal('logs'));
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}