// Function to test
import {getPotentialMoveSquares} from '.'

// Types
import {IPiece, Ordinant} from '../types'

// Test Constants
const pieces: IPiece[] = []
const ordinants: Ordinant[] = [0, 1, 2, 3, 4, 5, 6, 7]

for (let i of ordinants) {
    pieces.push({rank: 1, file: i, isBlack: true, name: 'pawn'})
    pieces.push({rank: 6, file: i, isBlack: false, name: 'knight'})
}

it('returns correct move squares for pawn', () => {
    expect(getPotentialMoveSquares(pieces, 0, 0)).toEqual([])
})
