import * as React from 'react'

// Utils
import { s } from '../../utils'

// Styles
import styles from './Board.module.css'
import { Square } from './Square'

interface IBoardProps {
    isDark?: boolean
}

export const Board = (props: IBoardProps) => {
    const c1: JSX.Element[] = []
    const c2: JSX.Element[] = []

    for (let i = 0; i < 8; i++) {
        c1.push(<Square isDark={i % 2 === 1} />)
        c2.push(<Square isDark={i % 2 === 0} />)
    }
    const board: JSX.Element[][] = [c1, c2, c1, c2, c1, c2, c1, c2]

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
