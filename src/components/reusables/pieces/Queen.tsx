import * as React from 'react'

// Utils
import { s } from '../../../utils'

// Styles
import styles from './Queen.module.css'

// Interfaces
interface IQueenProps {
    isBlack?: boolean
}

export const Queen = (props: IQueenProps) => (
    <span className={s(styles.queen, props.isBlack && styles.black)}>Q</span>
)
