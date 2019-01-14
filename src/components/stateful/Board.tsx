// React
import * as React from 'react'

// Packages
import _ from 'lodash'

// Components
import {Piece, Square} from '../../components'

// Utils
import {s} from '../../utils'

// Styles
import styles from './Board.module.css'

// Types
import {IPiece, Ordinant} from '../../types'

interface IBoardProps {
    isBlackTurn: boolean
    pieces: IPiece[]
    onSquareClick: (file: Ordinant, rank: Ordinant) => void
    selectedRank?: Ordinant
    selectedFile?: Ordinant
}

// Helpers
const constructBoardFromPieces = (
    pieces: IPiece[],
    isBlackTurn: boolean,
    selectedFile?: Ordinant,
    selectedRank?: Ordinant
) => {
    const board: JSX.Element[][] = [[], [], [], [], [], [], [], []]

    for (let file = 0; file < 8; file++) {
        for (let rank = 0; rank < 8; rank++) {
            const piece = pieces.find((p: IPiece) => p.rank === rank && p.file === file)

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

// Primary Component
export const Board = (props: IBoardProps) => {
    const {isBlackTurn, pieces, onSquareClick, selectedFile, selectedRank} = props
    const board = constructBoardFromPieces(pieces, isBlackTurn, selectedFile, selectedRank)

    return (
        <div className={styles.board}>
            {board.map((c: JSX.Element[], file: number) => (
                <div key={-file} className={styles.column}>
                    {c.map((sq: JSX.Element, rank: number) => (
                        <div
                            className={s(file === selectedFile && rank === selectedRank && styles.selected)}
                            onClick={() => onSquareClick(file as Ordinant, rank as Ordinant)}
                            key={file + 0.1 * rank}
                        >
                            {sq}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
