export class MorganStringBuilder {

    static buildMorganString(jackString: string, danielString): string {

        let morganString: string = '';

        while (jackString.length > 0 || danielString.length > 0) {

            const jackNextLetter: string = jackString.substr(0, 1)
            const danielNextLetter: string = danielString.substr(0, 1)

            if (jackString.length === 0 || jackNextLetter > danielNextLetter) {
                morganString += danielNextLetter;
                danielString = danielString.substring(1)
            }

            if (danielString.length === 0 || jackNextLetter <= danielNextLetter) {
                morganString += jackNextLetter;
                jackString = jackString.substring(1)
            }

        }

        return morganString;
    }

}