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
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }

    updateGame(tile, flagged) {
        if(flagged){
            tile.toggleFlag();
        }else{
            tile.explore();
        }
        this.setState({board:this.state.board});
    }
}

export default Game;