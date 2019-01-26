// React
import * as React from 'react'

// Packages
import {isEqual} from 'lodash'

// Components
import {Piece, Square} from '../../components'

// Functions
import {getPieceAtCoords} from '..'

// Types
import {IPiece, Ordinant} from '../../types'

// Returns an 8x8 board of squares with pieces properly displayed
export const constructBoard = (pieces: IPiece[], isBlackTurn: boolean, selectedPiece?: IPiece) => {
    const board: JSX.Element[][] = [[], [], [], [], [], [], [], []]

    for (let file = 0; file < 8; file++) {
        for (let rank = 0; rank < 8; rank++) {
            let symbol: JSX.Element | undefined = undefined
            const piece = getPieceAtCoords(pieces, rank as Ordinant, file as Ordinant)

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
                    isSelected={isEqual(selectedPiece, piece)}
                    symbol={symbol}
                />
            )
        }
    }

    return board
}
