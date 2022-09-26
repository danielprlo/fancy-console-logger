import LoggerDecorator from "./logger_decorator"

export default class LoggerDecoratorPayload extends LoggerDecorator {
    getMessage(): string {
        const payload = this.getOptions().getPayload()

        return `${super.getMessage()} -> ${this.formatPayloadMessage(payload)}`
    }

    private formatPayloadMessage(payload: {}) {
        const payLoadKeys: Array<string> = Object.keys(payload)
        let message: string = ''
        payLoadKeys.forEach((key) => {
            message += `${key}: ${payload[key]} `
        })

        return message.trim()
    }
}