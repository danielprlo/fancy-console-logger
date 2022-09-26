import { TextColors } from "./console_colors";
import ConcreteLogger from "./concrete_logger";
import LoggerDecoratorPayload from "./logger_decorator_payload";
import LoggerOptions from "./logger_options";
import LoggerInterface from "./logger_interface";
import LoggerDecoratorColor from "./logger_decorator_color";
import LoggerDecoratorFileInfo from "./logger_decorator_file_info";

export class FancyConsoleLogger {
    static log(
        title: string,
        payload: Record<string, string> = {},
        textColor: TextColors|null = null,
        showInfoFile = false
        ): void {
        const loggerOptions: LoggerOptions = new LoggerOptions(title, payload, textColor, showInfoFile)

        let log: LoggerInterface = new ConcreteLogger(loggerOptions)
        
        if (Object.keys(payload).length > 0) {
            log = new LoggerDecoratorPayload(log)
        }

        if (showInfoFile) {
            log = new LoggerDecoratorFileInfo(log)
        }

        if (textColor != null) {
            log = new LoggerDecoratorColor(log)
        }

        log.logMessage()
    }
}