import {IPiece} from '../../../types'

// Returns an array of Coordinates duples that are legal move squares for selected piece
export const getPawnMoves = (selectedPiece: IPiece, pieces: IPiece[]): Coordinates[] => {
    switch (selectedPiece.name) {
        case 'pawn':
            return getPawnMoves(selectedPiece, pieces)
            break
    }

    return []
}
