import { TextColors, endLine } from "./console_colors";
import * as path from "path";
import ConcreteLogger from "./concrete_logger";
import LoggerDecoratorPayload from "./logger_decorator_payload";
import LoggerOptions from "./logger_options";
import LoggerInterface from "./logger_interface";

export class FancyConsoleLogger {
    static log(title: string, payload: {} = {}, textColor: TextColors = null, showInfoFile: boolean = false) {
        const loggerOptions: LoggerOptions = new LoggerOptions(title, payload)

        let log: LoggerInterface = new ConcreteLogger(loggerOptions)
        if (Object.keys(payload).length > 0) {
            log = new LoggerDecoratorPayload(log)
        }
        console.log(log.getMessage())
        
        // const formattedMessage = this.formatMessage(title, payload)
        // // Decorator pattern here
        // if (showInfoFile) {
        //     const filename = path.basename(__filename)
        //     console.log(`${formattedMessage} in file ${filename}`)
        // }
        // if (textColor) {
        //     console.log(`${textColor}%s${endLine}`, formattedMessage)
        // } else {
        //     console.log(formattedMessage)
        // }
    }
}