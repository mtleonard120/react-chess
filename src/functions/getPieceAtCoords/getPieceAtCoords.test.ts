// Function to test
import {getPieceAtCoords} from './getPieceAtCoords'

// Types
import {IPiece, Ordinant} from '../../types'

// Test Constants
const pieces: IPiece[] = []
const ordinants: Ordinant[] = [0, 1, 2, 3, 4, 5, 6, 7]

for (let i of ordinants) {
    pieces.push({rank: 1, file: i, isBlack: true, name: 'pawn'})
    pieces.push({rank: 6, file: i, isBlack: false, name: 'knight'})
}

it('returns undefined when coords are incomplete', () => {
    expect(getPieceAtCoords(pieces)).toBe(undefined)
    expect(getPieceAtCoords(pieces, 0)).toBe(undefined)
    expect(getPieceAtCoords(pieces, undefined, 5)).toBe(undefined)
})

it('returns undefined when no piece at coords', () => {
    expect(getPieceAtCoords(pieces, 0, 5)).toBe(undefined)
    expect(getPieceAtCoords(pieces, 5, 0)).toBe(undefined)
})

it('returns correct piece object when piece is at coords', () => {
    expect(getPieceAtCoords(pieces, 1, 1)).toEqual({
        rank: 1,
        file: 1,
        isBlack: true,
        name: 'pawn',
    })
    expect(getPieceAtCoords(pieces, 6, 5)).toEqual({
        rank: 6,
        file: 5,
        isBlack: false,
        name: 'knight',
    })
})
