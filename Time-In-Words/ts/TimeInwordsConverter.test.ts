import { TimeInWordsConverter } from './TimeInWordsConverter';
import { expect } from 'chai';

describe('TimeInWordsConverter.convertTimeToWords', () => {

    it('should properly convert time to words.', () => {
        expect(TimeInWordsConverter.convertTimeToWords(3, 0)).to.equal('three o\' clock')
        expect(TimeInWordsConverter.convertTimeToWords(5, 1)).to.equal('one minute past five')
        expect(TimeInWordsConverter.convertTimeToWords(5, 2)).to.equal('two minutes past five')
        expect(TimeInWordsConverter.convertTimeToWords(7, 59)).to.equal('one minute to eight')
        expect(TimeInWordsConverter.convertTimeToWords(5, 10)).to.equal('ten minutes past five')
        expect(TimeInWordsConverter.convertTimeToWords(5, 24)).to.equal('twenty four minutes past five')
        expect(TimeInWordsConverter.convertTimeToWords(5, 21)).to.equal('twenty one minutes past five')
        expect(TimeInWordsConverter.convertTimeToWords(5, 29)).to.equal('twenty nine minutes past five')
        expect(TimeInWordsConverter.convertTimeToWords(5, 15)).to.equal('quarter past five')
        expect(TimeInWordsConverter.convertTimeToWords(5, 30)).to.equal('half past five')
        expect(TimeInWordsConverter.convertTimeToWords(5, 33)).to.equal('twenty seven minutes to six')
        expect(TimeInWordsConverter.convertTimeToWords(5, 40)).to.equal('twenty minutes to six')
        expect(TimeInWordsConverter.convertTimeToWords(5, 46)).to.equal('fourteen minutes to six')
        expect(TimeInWordsConverter.convertTimeToWords(5, 45)).to.equal('quarter to six')
        expect(TimeInWordsConverter.convertTimeToWords(12, 45)).to.equal('quarter to one')
        expect(TimeInWordsConverter.convertTimeToWords(12, 48)).to.equal('twelve minutes to one')
        expect(TimeInWordsConverter.convertTimeToWords(5, 47)).to.equal('thirteen minutes to six')
        expect(TimeInWordsConverter.convertTimeToWords(5, 53)).to.equal('seven minutes to six')
        expect(TimeInWordsConverter.convertTimeToWords(5, 28)).to.equal('twenty eight minutes past five')
        
    })
    
    it('bad input should return empty string' ,() => {
        expect(TimeInWordsConverter.convertTimeToWords(5, 70)).to.equal('') 
        expect(TimeInWordsConverter.convertTimeToWords(0, 40)).to.equal('') 

    })

})