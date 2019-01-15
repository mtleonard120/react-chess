// React
import * as React from 'react'

// Packages
import _ from 'lodash'

// Functions
import {constructBoard} from '../../functions'

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

// Primary Component
export const Board = (props: IBoardProps) => {
    const {isBlackTurn, pieces, onSquareClick, selectedFile, selectedRank} = props
    const board = constructBoard(pieces, isBlackTurn, selectedFile, selectedRank)

    return (
        <div className={styles.board}>
            {board.map((column: JSX.Element[], file: number) => (
                <div key={-file} className={styles.column}>
                    {column.map((sq: JSX.Element, rank: number) => (
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
