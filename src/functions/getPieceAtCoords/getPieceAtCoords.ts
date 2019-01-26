import {Ordinant, IPiece} from '../../types'

// Returns the piece, if any, at the given coordinates
export const getPieceAtCoords = (pieces: IPiece[], rank?: Ordinant, file?: Ordinant) => {
    if (!rank || !file) {
        return undefined
    }

    return pieces.find((p: IPiece) => p.rank === rank && p.file === file)
}
