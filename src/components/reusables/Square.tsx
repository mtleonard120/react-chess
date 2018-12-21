import * as React from 'react'

// Utils
import { s } from '../../utils'

// Styles
import styles from './Square.module.css'

interface ISquareProps {
    isDark?: boolean
}

export const Square = (props: ISquareProps) => {
    return <div className={s(styles.square, props.isDark && styles.dark)} />
}
