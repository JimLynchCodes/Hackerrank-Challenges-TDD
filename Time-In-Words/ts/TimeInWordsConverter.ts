
export class TimeInWordsConverter {

    static convertTimeToWords(h: number, m: number): string {

        const numberSpellingsMap = {
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
            20: "twenty",
            30: "thirty",
            40: "fourty",
            50: "fifty"
        }

        enum MinuteOrMinutes {
            minute = "minute",
            minutes = "minutes"
        }

        const lastDigitOfMinutes: string = m.toString().slice(-1)
        const minuteOrMinutes: MinuteOrMinutes = (m === 1 || m === 59) ? MinuteOrMinutes.minute : MinuteOrMinutes.minutes

        // if bad input, return empty string
        if (h < 1 || h > 12 || m < 0 || m > 60)
            return '';

        if (m === 0) {
            return `${numberSpellingsMap[h]} o' clock`
        }

        if (m === 15) {
            return `quarter past ${numberSpellingsMap[h]}`
        }

        if (m < 30) {
            if (m <= 20)
                return `${numberSpellingsMap[m]} ${minuteOrMinutes} past ${numberSpellingsMap[h]}`

            return `twenty ${numberSpellingsMap[lastDigitOfMinutes]} ${minuteOrMinutes} past ${numberSpellingsMap[h]}`
        }

        if (m === 30) {
            return `half past ${numberSpellingsMap[h]}`
        }

        if (m === 45) {
            if (h === 12)
                h = 0;

            return `quarter to ${numberSpellingsMap[h + 1]}`
        }

        if (h === 12)
            h = 0;

        // m > 30 
        const minutesTo = 60 - m;
        const lastDigitOfMinutesTo = minutesTo.toString().slice(-1)

        if (minutesTo <= 20)
            return `${numberSpellingsMap[minutesTo]} ${minuteOrMinutes} to ${numberSpellingsMap[h + 1]}`

        return `twenty ${numberSpellingsMap[lastDigitOfMinutesTo]} ${minuteOrMinutes} to ${numberSpellingsMap[h + 1]}`

    }

}