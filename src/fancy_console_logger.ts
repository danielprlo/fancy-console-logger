import { TextColors, endLine } from "./console_colors";
import * as path from "path";

export class FancyConsoleLogger {
    static log(title: string, payload: {} = {}, textColor: TextColors = null, showInfoFile: boolean = false) {
        const formattedMessage = this.formatMessage(title, payload)
        // Decorator pattern here
        if (showInfoFile) {
            const filename = path.basename(__filename)
            console.log(`${formattedMessage} in file ${filename}`)
        }
        if (textColor) {
            console.log(`${textColor}%s${endLine}`, formattedMessage)
        } else {
            console.log(formattedMessage)
        }
    }

    private static formatMessage(title: string, payload: {}) {
        if (Object.keys(payload).length > 0) {
            const formattedPayload = this.formatPayload(payload)
            return `${title} -> ${formattedPayload}`
        } else {
            return `${title}`
        }
    }

    private static formatPayload(payload: {}): string {
        const payLoadKeys = Object.keys(payload)
        let message: string = ''
        payLoadKeys.forEach((key) => {
            message += `${key}: ${payload[key]} `
        })

        return message
    }
}