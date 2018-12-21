import React, { Component } from 'react'

// Components
import { Board } from '../reusables'

// Styles
import styles from './App.module.css'

// Types
import { IPiece } from '../../types'

interface IAppState {
    isBlackTurn: boolean
    pieces: IPiece[]
}

export default class App extends Component<any, IAppState> {
    constructor(props: any) {
        super(props)

        const pieces: IPiece[] = []

        for (let i = 0; i < 8; i++) {
            pieces.push({ rank: 1, file: i, isBlack: true, type: 'pawn' })
            pieces.push({ rank: 6, file: i, isBlack: false, type: 'pawn' })
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                pieces.push({
                    rank: 7 * j,
                    file: 7 * i,
                    isBlack: j === 0,
                    type: 'rook',
                })
                pieces.push({
                    rank: 7 * j,
                    file: 1 - i + 6 * i,
                    isBlack: j === 0,
                    type: 'knight',
                })
                pieces.push({
                    rank: 7 * j,
                    file: 2 * (1 - i) + 5 * i,
                    isBlack: j === 0,
                    type: 'bishop',
                })
                if (i === 0) {
                    pieces.push({
                        rank: 7 * j,
                        file: 3,
                        isBlack: j === 0,
                        type: 'queen',
                    })
                    pieces.push({
                        rank: 7 * j,
                        file: 4,
                        isBlack: j === 0,
                        type: 'king',
                    })
                }
            }
        }

        this.state = {
            isBlackTurn: false,
            pieces: pieces,
        }
    }
    render() {
        return (
            <div className={styles.app}>
                <Board
                    pieces={this.state.pieces}
                    isBlackTurn={this.state.isBlackTurn}
                />
            </div>
        )
    }
}
