import LoggerOptions from "./logger_options"

export default interface LoggerInterface {
    getOptions(): LoggerOptions
    getMessage(): string
}