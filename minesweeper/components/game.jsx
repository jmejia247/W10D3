import React from 'react';
import Board from './board'
import * as Minesweeper from '../minesweeper'

class Game extends React.Component {

    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 10);
        this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
    }

    render() {
        return (
            <div>
                <Board board={this.state.board} update={this.updateGame}/>
            </div>
        )
    }

    updateGame() {

    }
}

export default Game;