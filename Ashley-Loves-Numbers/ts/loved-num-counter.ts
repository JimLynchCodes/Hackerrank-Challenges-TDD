
export class LovedNumberCounter {

    countLovedNums(lowerBound: number, upperBound: number): number {

        let lovedNumberCounter = 0

        for (let i = lowerBound; i <= upperBound; i++) {
            if (this.isLovedNum(i))
                ++lovedNumberCounter;
        }

        return lovedNumberCounter;
    }

    isLovedNum(num: number): Boolean {

        const digitArray = num.toString().split('');

        const seenDigits = {}

        for (var i = 0; i < digitArray.length; i++) {
            if (seenDigits[digitArray[i]]) {
                return false;
            } else {
                seenDigits[digitArray[i]] = true;
            }
        }

        return true;
    }

}