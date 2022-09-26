import LoggerDecorator from "./logger_decorator"
import * as path from "path";

export default class LoggerDecoratorFileInfo extends LoggerDecorator {
    getMessage(): string {
        const filename: string = path.basename(__filename)
        return `${super.getMessage()} in file ${filename}`
    }

    logMessage(): void {
        console.log(this.getMessage())
    }
}