import { expect } from "chai";
import { LovedNumberCounter } from "./loved-num-counter";

describe('LovedNumberCounter', () => {

    let lovedNumberCounter: LovedNumberCounter;

    beforeEach(() => {
        lovedNumberCounter = new LovedNumberCounter();
    })

    it('should count nums', () => {

        expect(lovedNumberCounter.countLovedNums(2, 4)).to.equal(3)
        expect(lovedNumberCounter.countLovedNums(1,1)).to.equal(1)
        expect(lovedNumberCounter.countLovedNums(10,20)).to.equal(10)
        expect(lovedNumberCounter.countLovedNums(20,40)).to.equal(19)
        

    })


    it('isLovedNum function should return true for numbers with all unique digits', () => {
        expect(lovedNumberCounter.isLovedNum(10)).to.equal(true)
        expect(lovedNumberCounter.isLovedNum(105)).to.equal(true)
        expect(lovedNumberCounter.isLovedNum(1234567890)).to.equal(true)
        expect(lovedNumberCounter.isLovedNum(826401)).to.equal(true)
    })

    it('isLovedNum function should return true for numbers with all unique digits', () => {
        expect(lovedNumberCounter.isLovedNum(11)).to.equal(false);
        expect(lovedNumberCounter.isLovedNum(112341234)).to.equal(false);
        expect(lovedNumberCounter.isLovedNum(105725)).to.equal(false);
        expect(lovedNumberCounter.isLovedNum(99)).to.equal(false);
        expect(lovedNumberCounter.isLovedNum(1234057891)).to.equal(false);
    })

})