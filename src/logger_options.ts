import { TextColors } from "./console_colors"

export default class LoggerOptions {
    private title: string
    private payload: {}
    private textColor: TextColors
    private showInfoFile: boolean

    constructor(title: string, payload: {} = {}, textColor: TextColors, showInfoFile: boolean) {
        this.title = title
        this.payload = payload
        this.textColor = textColor
        this.showInfoFile = showInfoFile
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

    getShowInfoFile() {
        return this.showInfoFile
    }
}

