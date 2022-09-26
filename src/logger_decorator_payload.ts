import LoggerDecorator from "./logger_decorator"

export default class LoggerDecoratorPayload extends LoggerDecorator {
    getMessage(): string {
        const payload = this.getOptions().getPayload()

        return `${super.getMessage()} -> ${this.formatPayloadMessage(payload)}`
    }

    private formatPayloadMessage(payload: Record<string, string>) {
        const payLoadKeys: Array<string> = Object.keys(payload)
        let message = ''
        payLoadKeys.forEach((key) => {
            message += `${key}: ${payload[key]} `
        })

        return message.trim()
    }
}