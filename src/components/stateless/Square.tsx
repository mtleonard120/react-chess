// React
import * as React from 'react'

// Utils
import {s} from '../../utils'

// Styles
import styles from './Square.module.css'

export interface ISquareProps {
    isDark?: boolean
    isHoverable?: boolean
    isSelected?: boolean
    piece?: JSX.Element
}

export const Square: React.SFC<ISquareProps> = props => (
    <div
        className={s(
            styles.square,
            props.isDark && styles.dark,
            props.isHoverable && styles.isHoverable,
            props.isSelected && styles.selected
        )}
    >
        {props.piece}
    </div>
)
