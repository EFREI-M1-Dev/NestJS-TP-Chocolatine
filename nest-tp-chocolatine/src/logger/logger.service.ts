import {Injectable} from "@nestjs/common";
import {Logger} from "./logger";

@Injectable()
export class LoggerService {
    constructor(
        private options: Record<string, Logger[]>
    ){}

    getVal(key: string): Logger[] {
        return this.options[key];
    }
}