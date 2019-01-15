import React from 'react'
import ReactDOM from 'react-dom'

// Function to test
import {constructBoard} from '.'

// Types
import {IPiece, Ordinant} from '../types'

// Test Constants
const pieces: IPiece[] = []
const ordinants: Ordinant[] = [0, 1, 2, 3, 4, 5, 6, 7]

for (let i of ordinants) {
    pieces.push({rank: 1, file: i, isBlack: true, name: 'pawn'})
    pieces.push({rank: 6, file: i, isBlack: false, name: 'knight'})
}

it('renders the board without crashing', () => {
    const div = document.createElement('div')
    const board = constructBoard(pieces, false)

    ReactDOM.render(<>{board}</>, div)
    ReactDOM.unmountComponentAtNode(div)
})
