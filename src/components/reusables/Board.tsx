import * as React from "react";

// Packages
import produce from "immer";
import _ from "lodash";

// Components
import { Square, Pawn, Rook, Bishop, Knight, Queen, King } from "../reusables";

// Utils
import { s } from "../../utils";

// Styles
import styles from "./Board.module.css";

// Interfaces
import { IPiece } from "../../types";

interface IBoardProps {
    pieces: IPiece[]; // The initial game state is passed in as a prop
}

interface IBoardState {
    pieces: IPiece[];
    isBlackTurn: boolean;
    selectedSquare?: [number, number];
    board: JSX.Element[][];
}

export class Board extends React.Component<IBoardProps, IBoardState> {
    constructor(props: IBoardProps) {
        super(props);

        // Make an 8 x 8 array of arrays to represent the board.
        const board: JSX.Element[][] = [[], [], [], [], [], [], [], []];
        const isBlackTurn = false;

        for (let file = 0; file < 8; file++) {
            for (let rank = 0; rank < 8; rank++) {
                const piece = props.pieces.find(
                    (p: IPiece) => p.rank === rank && p.file === file
                );

                let symbol: JSX.Element | undefined = undefined;

                if (piece) {
                    switch (piece.type) {
                        case "pawn":
                            symbol = <Pawn isBlack={piece.isBlack} />;
                            break;
                        case "rook":
                            symbol = <Rook isBlack={piece.isBlack} />;
                            break;
                        case "bishop":
                            symbol = <Bishop isBlack={piece.isBlack} />;
                            break;
                        case "knight":
                            symbol = <Knight isBlack={piece.isBlack} />;
                            break;
                        case "queen":
                            symbol = <Queen isBlack={piece.isBlack} />;
                            break;
                        case "king":
                            symbol = <King isBlack={piece.isBlack} />;
                            break;
                    }
                }

                const isDark = (rank + file) % 2 === 1;

                board[file][rank] = (
                    <Square
                        isDark={isDark}
                        piece={symbol}
                        isHoverable={
                            piece &&
                            ((piece.isBlack && isBlackTurn) ||
                                (!piece.isBlack && !isBlackTurn))
                        }
                    />
                );
            }
        }

        this.state = {
            pieces: props.pieces,
            isBlackTurn: false,
            board,
        };
    }

    public onSquareClick = (file: number, rank: number) => {
        this.setState({ selectedSquare: [file, rank] });
    }

    public render = () => {
        const { board, selectedSquare } = this.state;

        return (
            <div className={styles.board}>
                {board.map((c: JSX.Element[], file: number) => (
                    <div key={-file} className={styles.column}>
                        {c.map((sq: JSX.Element, rank: number) => (
                            <div
                                className={s(
                                    _.isEqual(selectedSquare, [file, rank]) &&
                                        styles.selected
                                )}
                                onClick={() => this.onSquareClick(file, rank)}
                                key={file + 0.1 * rank}
                            >
                                {sq}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
