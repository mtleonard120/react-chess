import * as React from 'react'

// Utils
import { s } from '../../../utils'

// Styles
import styles from './Pawn.module.css'

// Interfaces
interface IPawnProps {
    isBlack?: boolean
}

export const Pawn = (props: IPawnProps) => (
    <span className={s(styles.pawn, props.isBlack && styles.black)}>P</span>
)
