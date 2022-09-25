import { TextColors, endLine } from "./console_colors";
import ConcreteLogger from "./concrete_logger";
import LoggerDecoratorPayload from "./logger_decorator_payload";
import LoggerOptions from "./logger_options";
import LoggerInterface from "./logger_interface";
import LoggerDecoratorColor from "./logger_decorator_color";

export class FancyConsoleLogger {
    static log(title: string, payload: {} = {}, textColor: TextColors = null, showInfoFile: boolean = false) {
        const loggerOptions: LoggerOptions = new LoggerOptions(title, payload, textColor)

        let log: LoggerInterface = new ConcreteLogger(loggerOptions)
        
        if (Object.keys(payload).length > 0) {
            log = new LoggerDecoratorPayload(log)
        }

        if (textColor != null) {
            log = new LoggerDecoratorColor(log)
        }

        log.logMessage()
    }
}