export enum MinuteOrMinutes {
    minute = "minute",
    minutes = "minutes"
}

export class TimeInWordsConverter {

    private static numberSpellingsMap = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty"
    }

    static convertTimeToWords(h: number, m: number): string {

        const lastDigitOfMinutes: string = m.toString().slice(-1)
        const minuteOrMinutes: MinuteOrMinutes = (m === 1 || m === 59) ? MinuteOrMinutes.minute : MinuteOrMinutes.minutes

        // if bad input, return empty string
        if (h < 1 || h > 12 || m < 0 || m > 60)
            return '';

        if (m === 0) {
            return `${this.numberSpellingsMap[h]} o' clock`
        }

        if (m === 15) {
            return `quarter past ${this.numberSpellingsMap[h]}`
        }

        if (m < 30) {
            if (m <= 20)
                return `${this.numberSpellingsMap[m]} ${minuteOrMinutes} past ${this.numberSpellingsMap[h]}`

            return `twenty ${this.numberSpellingsMap[lastDigitOfMinutes]} ${minuteOrMinutes} past ${this.numberSpellingsMap[h]}`
        }

        if (m === 30) {
            return `half past ${this.numberSpellingsMap[h]}`
        }

        if (m === 45) {
            if (h === 12)
                h = 0;

            return `quarter to ${this.numberSpellingsMap[h + 1]}`
        }

        if (h === 12)
            h = 0;

        // m > 30 
        const minutesTo = 60 - m;
        const lastDigitOfMinutesTo = minutesTo.toString().slice(-1)

        if (minutesTo <= 20)
            return `${this.numberSpellingsMap[minutesTo]} ${minuteOrMinutes} to ${this.numberSpellingsMap[h + 1]}`

        return `twenty ${this.numberSpellingsMap[lastDigitOfMinutesTo]} ${minuteOrMinutes} to ${this.numberSpellingsMap[h + 1]}`

    }

}