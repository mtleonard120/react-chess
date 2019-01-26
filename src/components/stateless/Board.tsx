import React from 'react'

// Packages
import {isEqual} from 'lodash'

// Functions
import {constructBoard, getPieceAtCoords} from '../../functions'

// Utils
import {s} from '../../utils'

// Styles
import styles from './Board.module.css'

// Types
import {IPiece, Ordinant} from '../../types'

interface IBoardProps {
    isBlackTurn: boolean
    pieces: IPiece[]
    selectedPiece?: IPiece
    onPieceSelection: (selectedPiece: IPiece) => void
}

// Primary Component
export const Board = (props: IBoardProps) => {
    const {isBlackTurn, pieces, selectedPiece, onPieceSelection} = props

    const board = constructBoard(pieces, isBlackTurn, selectedPiece)

    return (
        <div className={styles.board}>
            {board.map((column: JSX.Element[], file: number) => (
                <div key={-file} className={styles.column}>
                    {column.map((sq: JSX.Element, rank: number) => {
                        const pieceOnSquare = getPieceAtCoords(pieces, rank as Ordinant, file as Ordinant)

                        return (
                            <div
                                className={s(isEqual(selectedPiece, pieceOnSquare) && styles.selected)}
                                onClick={pieceOnSquare ? () => onPieceSelection(pieceOnSquare) : undefined}
                                key={file + 0.1 * rank}
                            >
                                {sq}
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}
