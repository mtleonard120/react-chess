// React
import * as React from 'react'

// Components
import {Piece, Square} from '../components'

// Functions
import {getPieceAtCoords, getPotentialMoveSquares} from '.'

// Types
import {IPiece, Ordinant} from '../types'

// Returns an 8x8 board of squares with pieces properly displayed
export const constructBoard = (
    pieces: IPiece[],
    isBlackTurn: boolean,
    selectedFile?: Ordinant,
    selectedRank?: Ordinant
) => {
    const board: JSX.Element[][] = [[], [], [], [], [], [], [], []]

    for (let file = 0; file < 8; file++) {
        for (let rank = 0; rank < 8; rank++) {
            const piece = getPieceAtCoords(pieces, rank as Ordinant, file as Ordinant)
            const potentialMoveSquares = getPotentialMoveSquares(pieces, selectedRank, selectedFile)
            let symbol: JSX.Element | undefined = undefined

            if (piece) {
                symbol = (
                    <Piece name={piece.name} rank={rank as Ordinant} file={file as Ordinant} isBlack={piece.isBlack} />
                )
            }

            const isDark = (rank + file) % 2 === 1

            board[file][rank] = (
                <Square
                    isDark={isDark}
                    isHoverable={piece && ((piece.isBlack && isBlackTurn) || (!piece.isBlack && !isBlackTurn))}
                    isSelected={file === selectedFile && rank === selectedRank}
                    piece={symbol}
                />
            )
        }
    }

    return board
}
