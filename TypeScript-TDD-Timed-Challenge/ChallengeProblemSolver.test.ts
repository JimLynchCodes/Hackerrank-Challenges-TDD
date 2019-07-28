import { ChallengeProblemSolver } from './ChallengeProblemSolver';
import { expect } from 'chai';

describe('ChallengeProblemSolver.solveProblem', () => {

    let challengeProblemSolver: ChallengeProblemSolver;
    
    beforeEach(() => {
        challengeProblemSolver = new ChallengeProblemSolver();
    })

    it('should return 4', () => {
        expect(challengeProblemSolver.solveProblem([1, 2, 3])).to.equal(4)
    })

})