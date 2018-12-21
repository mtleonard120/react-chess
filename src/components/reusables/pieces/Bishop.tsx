import * as React from 'react'

// Utils
import { s } from '../../../utils'

// Styles
import styles from './Bishop.module.css'

// Interfaces
interface IBishopProps {
    isBlack?: boolean
}

export const Bishop = (props: IBishopProps) => (
    <span className={s(styles.bishop, props.isBlack && styles.black)}>B</span>
)
