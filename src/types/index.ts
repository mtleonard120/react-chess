export interface ISquare {
    lat: number
    long: number
}

export interface IPiece {
    rank: number // -1 indicates piece is dead
    file: number // -1 indicates piece is dead
    type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king'
    isBlack: boolean
}
