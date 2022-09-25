export default class LoggerOptions {
    private title: string
    private payload: {}

    constructor(title: string, payload: {} = {}) {
        this.title = title
        this.payload = payload
    }

    getTitle() {
        return this.title
    }

    getPayload() {
        return this.payload
    }
}

