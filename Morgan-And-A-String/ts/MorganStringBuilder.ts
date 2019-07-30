export class MorganStringBuilder {

    static buildMorganString(jackString: string, danielString): string {

        let morganLetters: Array<string> = []
        let jackLetters: Array<string> = jackString.split('')
        let danielLetters: Array<string> = danielString.split('')

        while (jackLetters.length > 0 || danielLetters.length > 0) {

            const jackNextLetter: string = jackLetters[0]
            const danielNextLetter: string = danielLetters[0]

            if (jackLetters.length === 0 || jackNextLetter >= danielNextLetter) {
                morganLetters.push(danielLetters.shift())
            }
            
            if (danielLetters.length === 0 || jackNextLetter < danielNextLetter) {
                morganLetters.push(jackLetters.shift())
            }

        }

        return morganLetters.join('');
    }

}