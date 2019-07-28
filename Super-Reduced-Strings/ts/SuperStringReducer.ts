
export class SuperStringReducer {

    static reduceString(s:string) : string {

        const sortedChars = s.split('').sort();

        for(let i = sortedChars.length - 1; i >= 0; --i) {

            if (sortedChars[i] && sortedChars[i -1]) {

                if (sortedChars[i] === sortedChars[i-1] ) {
                    sortedChars.splice(i-1, 2);
                }

            }
            
        }

        if (sortedChars.length === 0) {
            return 'Empty String';
        }

        return sortedChars.join('');
    }

}