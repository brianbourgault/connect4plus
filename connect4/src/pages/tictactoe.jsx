import React from 'react';
import './pages.css'
/*import './tictactoe.css';*/

class TicTacToe extends React.Component {
    state = {
        rows: 3,
        columns: 3,
        moves: [],
        playerTurn: 'X',
        totalMoves: 0,
    };

    renderBoard() {
        const {row, columns, winner } = this.state;
        const rowViews = [];

        for (let row = 0; row < this.state.rows; row += 1){
            const columnViews = [];
            for (let column = 0; column < this.state.columns; column += 1){
                const piece = this.getPiece(column, row);
                columnViews.push(
                    <div style={{ width: '7vw', height: '7vw', backgroundColor: '#000', display: 'flex', padding: 5, cursor: 'pointer' }}>
                        <div onClick={() => {this.addMove(column,row)}} style={{borderRadius: '50%', backgroundColor: 'white', flex: 1, display: 'flex' }}>

                        </div>

                    </div>
                )
            }
        }
    }

    render(){
        return(
            <div>
                tic tac toe waiting area
            </div>
        );
    }
}

export default TicTacToe;