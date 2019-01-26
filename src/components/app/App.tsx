import React, {Component} from 'react'

// Components
import {Board} from '../../components'

// Constants
import {ORDINANTS} from '../../constants'

// Styles
import styles from './App.module.css'

// Types
import {IPiece, Ordinant} from '../../types'

interface IAppState {
    isBlackTurn: boolean
    pieces: IPiece[]
    selectedPiece?: IPiece
}

// Primary Component
export default class App extends Component<any, IAppState> {
    constructor(props: any) {
        super(props)

        const pieces: IPiece[] = []

        // Initial Board Setup
        for (let i of ORDINANTS) {
            pieces.push({rank: 1, file: i, isBlack: true, name: 'pawn'})
            pieces.push({rank: 6, file: i, isBlack: false, name: 'pawn'})
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                pieces.push({
                    rank: (7 * j) as Ordinant,
                    file: (7 * i) as Ordinant,
                    isBlack: j === 0,
                    name: 'rook',
                })
                pieces.push({
                    rank: (7 * j) as Ordinant,
                    file: (1 - i + 6 * i) as Ordinant,
                    isBlack: j === 0,
                    name: 'knight',
                })
                pieces.push({
                    rank: (7 * j) as Ordinant,
                    file: (2 * (1 - i) + 5 * i) as Ordinant,
                    isBlack: j === 0,
                    name: 'bishop',
                })
                if (i === 0) {
                    pieces.push({
                        rank: (7 * j) as Ordinant,
                        file: 3,
                        isBlack: j === 0,
                        name: 'queen',
                    })
                    pieces.push({
                        rank: (7 * j) as Ordinant,
                        file: 4,
                        isBlack: j === 0,
                        name: 'king',
                    })
                }
            }
        }

        this.state = {
            isBlackTurn: false,
            pieces: pieces,
        }
    }

    // Event Handlers
    public onPieceSelection = (selectedPiece: IPiece) => {
        this.setState({selectedPiece})
    }

    render() {
        return (
            <div className={styles.app}>
                <Board {...this.state} onPieceSelection={this.onPieceSelection} />
            </div>
        )
    }
}
