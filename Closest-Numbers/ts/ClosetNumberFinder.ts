
export class ClosestNumberFinder {

    getAscendingPairsOfClosestNumbers(inputNums: Array<number>) {

        let smallestDifference: number;
        const smallestDifferencePairs: Array<Array<Number>> = [];

        inputNums.sort((a, b) => {
            return a > b ? 1 : -1;
        })

        for (let i = 0; i < inputNums.length - 1; i++) {

            const difference = Math.abs(inputNums[i + 1] - inputNums[i]);

            if (!smallestDifference) {
                smallestDifference = difference + 1;
                smallestDifferencePairs.push([inputNums[i], inputNums[i + 1]])
            } else {

                if (difference === smallestDifference) {
                    smallestDifferencePairs.push([inputNums[i], inputNums[i + 1]])
                }

                if (difference < smallestDifference) {
                    smallestDifferencePairs.splice(0, smallestDifferencePairs.length); // empty the array
                    smallestDifferencePairs.push([inputNums[i], inputNums[i + 1]])
                    smallestDifference = difference;
                }

            }

        }

        return smallestDifferencePairs;
    }

}