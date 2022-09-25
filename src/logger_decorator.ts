import LoggerInterface from "./logger_interface"
import LoggerOptions from "./logger_options"

export default class LoggerDecorator implements LoggerInterface {
    protected logger: LoggerInterface

    constructor(logger: LoggerInterface) {
        this.logger = logger
    }

    getOptions(): LoggerOptions {
        return this.logger.getOptions()
    }

    getMessage(): string {
        return this.logger.getMessage()
    }

    logMessage(): void {
        console.log(this.getMessage())
    }
}