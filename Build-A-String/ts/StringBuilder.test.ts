import { StringBuilder } from './StringBuilder';
import { expect } from 'chai';

describe('StringBuilder.buildString', () => {

    it('should calculate the lowest cost to build the string', () => {
        expect(StringBuilder.buildString(9, 4, 5, 'aabaacaba')).to.equal(26)
        expect(StringBuilder.buildString(9, 8, 9, 'bacbacacb')).to.equal(42)
    })
    
})

describe('StringBuilder.getLongestCopyableString', () => {

    it('should get the longest copyable string', () => {
        expect(StringBuilder.getLongestCopyableString('aab', 'aabaacaba')).to.equal('aa')
        expect(StringBuilder.getLongestCopyableString('aab', 'aabaab')).to.equal('aab')
        expect(StringBuilder.getLongestCopyableString('asdfafffff', 'asdfafffffasdf')).to.equal('asdf')
        expect(StringBuilder.getLongestCopyableString('aabfdfs', 'iuy7opiyu')).to.equal('')

    })
    
})