// React
import * as React from 'react'

// // Utils
// import {s} from '../../utils'

// // Styles
// import styles from './Square.module.css'

// Types
import {IPiece} from '../../types'

export const Piece: React.SFC<IPiece> = props => <div>{props.name}</div>
