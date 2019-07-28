import { SuperStringReducer } from './SuperStringReducer';
import { expect } from 'chai';

describe('SuperStringReducer.reduceString', () => {

    it('should return 4', () => {
        expect(SuperStringReducer.reduceString('aaabccddd')).to.equal('abd')
        expect(SuperStringReducer.reduceString('aa')).to.equal('Empty String')
        expect(SuperStringReducer.reduceString('baab')).to.equal('Empty String')
    })

})