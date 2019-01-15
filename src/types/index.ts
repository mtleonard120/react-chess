export interface ISquare {
    lat: Ordinant
    long: Ordinant
}

export interface IPiece {
    rank: Ordinant
    file: Ordinant
    name: PieceName
    isBlack: boolean
    hasMoved?: boolean
}

export type PieceName = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king'
export type Ordinant = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
