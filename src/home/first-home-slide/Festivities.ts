// start field is inclusive, end field is exclusive

export class Festivity {
    start: string
    end: string
    messageKey: string

    constructor(start: string, end: string, messageKey: string) {
        this.start = start;
        this.end = end;
        this.messageKey = messageKey;
    }

}

export const festivities = [
    new Festivity("2025-12-16", "2025-12-30", "festivities-greetings.christmas"),
    new Festivity("2025-12-30", "2026-01-03", "festivities-greetings.new-year"),
    new Festivity("2025-04-17", "2025-04-22", "festivities-greetings.easter"),
    new Festivity("2025-09-23", "2025-09-24", "festivities-greetings.birthday"),
]