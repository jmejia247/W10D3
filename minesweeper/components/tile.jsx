import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        const flagged = e.altKey;
        this.props.updateGame(this.props.tile, flagged);
    }

    render(){
        const tile = this.props.tile;
        let status = '';
        let icon = '';
        if (tile.explored){
            if (tile.bombed){
                status = 'bombed';
                icon = '☢';
            }else{
                let count = tile.adjacentBombCount()
                if(count === 0){
                    icon='';
                }else{
                    icon = count;
                }
                status = 'explored';
            }
        } else if (tile.flagged){
            status = 'flagged';
            icon = '⚑';
        }else{
            status = 'unexplored';
        }

        return(
            <div className={status} onClick={this.handleClick}>{icon}</div>
        )
    }
}

export default Tile;