// Function to test
import {getMoveCoords} from './getMoveCoords'

// Constants
import {ORDINANTS} from '../../constants'

// Types
import {IPiece} from '../../types'

// Test Constants
const pieces: IPiece[] = []

for (let i of ORDINANTS) {
    pieces.push({rank: 1, file: i, isBlack: true, name: 'pawn'})
    pieces.push({rank: 6, file: i, isBlack: false, name: 'knight'})
}

// Pawn Tests
it('returns correct move squares for pawn', () => {
    const selectedPiece = pieces[0]
    expect(getMoveCoords(selectedPiece, pieces)).toEqual([])
})
