import * as React from 'react'

// Utils
import { s } from '../../../utils'

// Styles
import styles from './Rook.module.css'

// Interfaces
interface IRookProps {
    isBlack?: boolean
}

export const Rook = (props: IRookProps) => (
    <span className={s(styles.rook, props.isBlack && styles.black)}>R</span>
)
