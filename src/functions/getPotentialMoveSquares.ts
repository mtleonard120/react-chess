import {Ordinant, IPiece} from '../types'
import {getPieceAtCoords} from './getPieceAtCoords'

// Returns an array of (rank, file) pairs that are potential move squares
export const getPotentialMoveSquares = (pieces: IPiece[], selectedRank?: Ordinant, selectedFile?: Ordinant) => {
    const selectedPiece = getPieceAtCoords(pieces, selectedRank, selectedFile)

    if (!selectedPiece) {
        return []
    }
}
