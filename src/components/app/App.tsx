import React, { Component } from 'react'

// Components
import { Board } from '../reusables'

// Styles
import styles from './App.module.css'

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Board />
            </div>
        )
    }
}
