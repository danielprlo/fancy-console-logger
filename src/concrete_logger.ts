import LoggerInterface from "./logger_interface"
import LoggerOptions from "./logger_options"

export default class ConcreteLogger implements LoggerInterface {
    private options: LoggerOptions

    constructor(options: LoggerOptions) {
        this.options = options
    }

    getOptions(): LoggerOptions {
        return this.options
    }

    getMessage(): string {
        return this.options.getTitle()
    }

    logMessage(): void {
        console.log(this.getMessage())
    }
}