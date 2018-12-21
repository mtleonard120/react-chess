import * as React from 'react'

// Utils
import { s } from '../../../utils'

// Styles
import styles from './Knight.module.css'

// Interfaces
interface IKnightProps {
    isBlack?: boolean
}

export const Knight = (props: IKnightProps) => (
    <span className={s(styles.knight, props.isBlack && styles.black)}>N</span>
)
