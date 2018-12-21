import * as React from 'react'

// Components
import { Square, Pawn, Rook, Bishop, Knight, Queen, King } from '../reusables'

// Styles
import styles from './Board.module.css'

// Interfaces
import { IPiece } from '../../types'

interface IBoardProps {
    isDark?: boolean
    pieces: IPiece[]
    isBlackTurn: boolean
}

export const Board = (props: IBoardProps) => {
    const board: JSX.Element[][] = [[], [], [], [], [], [], [], []]

    for (let file = 0; file < 8; file++) {
        for (let rank = 0; rank < 8; rank++) {
            const piece = props.pieces.find(
                (p: IPiece) => p.rank === rank && p.file === file
            )

            let symbol: JSX.Element | undefined = undefined

            if (piece) {
                switch (piece.type) {
                    case 'pawn':
                        symbol = <Pawn isBlack={piece.isBlack} />
                        break
                    case 'rook':
                        symbol = <Rook isBlack={piece.isBlack} />
                        break
                    case 'bishop':
                        symbol = <Bishop isBlack={piece.isBlack} />
                        break
                    case 'knight':
                        symbol = <Knight isBlack={piece.isBlack} />
                        break
                    case 'queen':
                        symbol = <Queen isBlack={piece.isBlack} />
                        break
                    case 'king':
                        symbol = <King isBlack={piece.isBlack} />
                        break
                }
            }

            const isDark = (rank + file) % 2 === 1

            board[file][rank] = (
                <Square
                    isDark={isDark}
                    piece={symbol}
                    isHoverable={
                        piece &&
                        ((piece.isBlack && props.isBlackTurn) ||
                            (!piece.isBlack && !props.isBlackTurn))
                    }
                />
            )
        }
    }

    return (
        <div className={styles.board}>
            {board.map((c: JSX.Element[]) => (
                <div className={styles.column}>
                    {c.map((s: JSX.Element) => s)}
                </div>
            ))}
        </div>
    )
}
