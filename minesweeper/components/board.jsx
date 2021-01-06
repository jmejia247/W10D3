import React from 'react';

class Board extends React.Component {
    render() {
        return (
            <div>{this.props.board}</div> 
        )
    }
}

export default Board;