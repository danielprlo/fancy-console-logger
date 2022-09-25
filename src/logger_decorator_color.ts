import LoggerDecorator from "./logger_decorator"
import { endLine } from './console_colors'

export default class LoggerDecoratorColor extends LoggerDecorator {
    logMessage(): void {
        const textColor = this.getOptions().getTextColor()
        console.log(`${textColor}%s${endLine}`, this.getMessage())
    }
}