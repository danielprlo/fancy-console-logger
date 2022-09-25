import { TextColors } from "./console_colors"

export default class LoggerOptions {
    private title: string
    private payload: {}
    private textColor: TextColors

    constructor(title: string, payload: {} = {}, textColor: TextColors) {
        this.title = title
        this.payload = payload
        this.textColor = textColor
    }

    getTitle() {
        return this.title
    }

    getPayload() {
        return this.payload
    }

    getTextColor() {
        return this.textColor
    }
}

