import { TextColors } from "./console_colors"

export default class LoggerOptions {
    private title: string
    private payload: Record<string, string>
    private textColor: TextColors
    private showInfoFile: boolean

    constructor(title: string, payload: Record<string, string> = {}, textColor: TextColors|null, showInfoFile: boolean) {
        this.title = title
        this.payload = payload
        this.textColor = textColor
        this.showInfoFile = showInfoFile
    }

    getTitle(): string {
        return this.title
    }

    getPayload(): Record<string, string> {
        return this.payload
    }

    getTextColor(): TextColors|null {
        return this.textColor
    }

    getShowInfoFile(): boolean {
        return this.showInfoFile
    }
}

