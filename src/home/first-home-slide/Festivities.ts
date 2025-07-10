import dayjs from "dayjs";

// Start field is inclusive, end field is exclusive.
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

const currentYear = parseInt(dayjs().format("YYYY"));
let festivities: Festivity[] = [];

// add recurring Italian holidays through the next 10 years
for (let year = currentYear; year <= currentYear + 10; year++) {
    const newYear = new Festivity(`${year - 1}-12-30`, `${year}-01-03`, "festivities-greetings.new-year");
    const birthday = new Festivity(`${year}-09-23`, `${year}-09-24`, "festivities-greetings.birthday");
    const christmas = new Festivity(`${year}-12-16`, `${year}-12-30`, "festivities-greetings.christmas");

    festivities.push(newYear, birthday, christmas);
}

// add Easter
festivities.push(
    new Festivity("2026-04-02", "2026-04-07", "festivities-greetings.easter"),
    new Festivity("2027-03-25", "2027-03-30", "festivities-greetings.easter"),
    new Festivity("2028-04-13", "2028-04-18", "festivities-greetings.easter"),
    new Festivity("2029-03-29", "2029-04-03", "festivities-greetings.easter"),
    new Festivity("2030-04-18", "2030-04-23", "festivities-greetings.easter")
);

export {festivities};