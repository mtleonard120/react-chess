import * as React from 'react'

// Utils
import { s } from '../../../utils'

// Styles
import styles from './King.module.css'

// Interfaces
interface IKingProps {
    isBlack?: boolean
}

export const King = (props: IKingProps) => (
    <span className={s(styles.king, props.isBlack && styles.black)}>K</span>
)
