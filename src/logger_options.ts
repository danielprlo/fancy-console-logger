import { TextColors } from "./console_colors"

export default class LoggerOptions {
    private title: string
    private payload: {}
    private textColor: TextColors
    private showInfoFile: boolean

    constructor(title: string, payload: {} = {}, textColor: TextColors|null, showInfoFile: boolean) {
        this.title = title
        this.payload = payload
        this.textColor = textColor
        this.showInfoFile = showInfoFile
    }

    getTitle(): string {
        return this.title
    }

    getPayload(): {} {
        return this.payload
    }

    getTextColor(): TextColors|null {
        return this.textColor
    }

    getShowInfoFile(): boolean {
        return this.showInfoFile
    }
}

