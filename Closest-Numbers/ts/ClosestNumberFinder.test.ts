import { ClosestNumberFinder } from './ClosetNumberFinder'
import {expect} from 'chai';

describe('ClosestNumberFinder.getAscendingPairsOfClosestNumbers', () => {

    let closestNumberFinder: ClosestNumberFinder;

    beforeEach( () => {
        closestNumberFinder = new ClosestNumberFinder();
    })

    it('should return pairs of with the lowest absolute difference.', () => {
        
        const input = [6, 2, 4, 10];        
        const expectedResult = [ [2, 4], [4, 6] ]
        expect(closestNumberFinder.getAscendingPairsOfClosestNumbers(input)).to.deep.equal(expectedResult);
 
        const input2 = [20, 30, 400, 1000, 1, 397, 14, 17, 23];        
        const expectedResult2 = [ [14, 17], [17, 20], [20, 23], [397, 400] ]
        expect(closestNumberFinder.getAscendingPairsOfClosestNumbers(input2)).to.deep.equal(expectedResult2);
 
        const input3 = [ -1, 0, 2, 10];        
        const expectedResult3 = [ [-1, 0] ]
        expect(closestNumberFinder.getAscendingPairsOfClosestNumbers(input3)).to.deep.equal(expectedResult3);
      
        const input4 = [ 397, 400, 3, 0];        
        const expectedResult4 = [ [0, 3] , [397, 400]]
        expect(closestNumberFinder.getAscendingPairsOfClosestNumbers(input4)).to.deep.equal(expectedResult4);
       
        const input5 = [ 0, 3, 400, 397];        
        const expectedResult5 = [ [0, 3] , [397, 400]]
        expect(closestNumberFinder.getAscendingPairsOfClosestNumbers(input5)).to.deep.equal(expectedResult5);


    })

})