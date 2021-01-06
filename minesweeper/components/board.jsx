import React from 'react';
import Tile from './tile';

class Board extends React.Component {

    constructor(props){
        super(props);
        // this.props.board
        // this.props.update()
        this.renderRow = this.renderRow.bind(this);
        this.renderTile = this.renderTile.bind(this);
    }

    renderTile(row, i){
        return row.map((tile, j)=>{
            return(        
                    <Tile 
                    tile={tile}
                    updateGame={this.props.updateGame}
                    key={ `row${i}:col${j}`}
                    />             
            )
        })
    }

    renderRow(){
        const board = this.props.board;
        return board.grid.map((row, idx)=>{
            return (
                <div className='row' key={`row${idx}`}>
                    {this.renderTile(row, idx)}
                </div>
                
            )
        })
    }

    render() {
        return (
            <div id='board'>
                {this.renderRow()}
            </div> 
        )
    }
}

export default Board;