export class StringBuilder {

    static totalCost: number = 0;
    static currentString: string = '';

    static buildString(targetStringLength: number,
        aCost: number,
        bCost: number,
        targetString: string): number {
            
        this.totalCost = 0;
        this.currentString = ''

        while (this.currentString.length < targetStringLength) {

            if (this.getLongestCopyableString(this.currentString, targetString) === '') {
                this.performOperationA(this.currentString, targetString, aCost);
            } else {
                
                const longestCopyableString :string = this.getLongestCopyableString(this.currentString, targetString)
                
                if (bCost < longestCopyableString.length * aCost) {
                    this.performOperationB(this.currentString, longestCopyableString, bCost);
                } else {
                    this.performOperationA(this.currentString, targetString, aCost);
                }
                
            }
            
        }

        return this.totalCost;
    }

    static getLongestCopyableString(currentString: string, targetString: string): string {

        if (currentString.length === 0) {
            return '';
        }

        let copyableString = ''

        for (let i = currentString.length; i < targetString.length; i++) {

            if (currentString.indexOf(copyableString + targetString[i]) !== -1) {
                copyableString += targetString[i];
            } else {
                return copyableString
            }
        }

        return copyableString;
    }

    private static performOperationA(currentString: string, targetString: string, aCost: number) {
        this.totalCost += aCost;
        const charToAdd = targetString.substr(currentString.length, 1)
        this.currentString += charToAdd;
    }

    private static performOperationB(currentString: string, copiedString: string, bCost: number) {
        this.totalCost += bCost;
        this.currentString += copiedString;
    }

}