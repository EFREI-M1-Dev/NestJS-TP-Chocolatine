export class Logger {
    private readonly method: string;
    private readonly path: string;
    private readonly status: number;
    private readonly time: number;
    private readonly body: Record<string, any>;

    constructor(
        method: string,
        path: string,
        status: number,
        time: number,
        body: Record<string, any>
    ) {
        this.method = method;
        this.path = path;
        this.status = status;
        this.time = time;
        this.body = body;
    }

    public getMethod(): string {
        return this.method;
    }

    public getPath(): string {
        return this.path;
    }

    public getStatus(): number {
        return this.status;
    }

    public getTime(): number {
        return this.time;
    }

    public getBody(): Record<string, any> {
        return this.body;
    }
}

