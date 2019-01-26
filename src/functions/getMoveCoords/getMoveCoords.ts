import {IPiece} from '../../types'
import {getPawnMoves} from './getPawnMoves/getPawnMoves'

// Returns an array of (rank, file) pairs that are potential move squares for selected piece
export const getMoveCoords = (selectedPiece: IPiece, pieces: IPiece[]) => {
    switch (selectedPiece.name) {
        case 'pawn':
            return getPawnMoves(selectedPiece, pieces)
            break
    }

    return []
}
