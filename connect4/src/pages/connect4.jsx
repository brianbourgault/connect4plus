import React from "react";
import PlayerNames from "./PlayerNames";
import { db } from "../firebase";
// import { useHistory } from 'react-router-dom'
import "./pages.css";

function createGameInFirebase() {
    return db.collection("games").doc().set({
        moves: [],
        playerTurn: "Red",
        gameSelected: false,
        winner: "",
        totalMoves: 0,
        player1: PlayerNames.playerOneName,
        player2: PlayerNames.playerTwoName,
    });
}

function Hole(props) {
    return (
        <div className="Hole">
            <div className={props.value}></div>
        </div>
    );
}

function Slat(props) {
    return (
        <div className="Slat" onClick={() => props.handleClick()}>
            {[...Array(props.holes.length)].map((x, j) => (
                <Hole key={j} value={props.holes[j]}></Hole>
            ))}
        </div>
    );
}
class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            boardState: new Array(7).fill(new Array(6).fill(null)),
            playerTurn: "Red",
            gameSelected: false,
            winner: "",
            totalMoves: 0,
        };
    }

    startGame() {
        createGameInFirebase();
        this.setState({
            gameSelected: true,
            boardState: new Array(7).fill(new Array(6).fill(null)),
            totalMoves: 0,
        });
    }

    makeMove(slatID) {
        const boardCopy = this.state.boardState.map(function (arr) {
            return arr.slice();
        });
        if (boardCopy[slatID].indexOf(null) !== -1) {
            let newSlat = boardCopy[slatID].reverse();
            newSlat[newSlat.indexOf(null)] = this.state.playerTurn;
            newSlat.reverse();
            this.setState({
                playerTurn: this.state.playerTurn === "Red" ? "Yellow" : "Red",
                boardState: boardCopy,
                totalMoves: this.state.totalMoves + 1,
            });
        }
    }

    /*Only make moves if winner doesn't exist*/
    handleClick(slatID) {
        if (this.state.winner === "") {
            this.makeMove(slatID);
        }
    }

    /*check the winner and make AI move IF game is in AI mode*/
    componentDidUpdate() {
        let winner = checkWinner(this.state.boardState, this.state.totalMoves);
        if (this.state.winner !== winner) {
            this.setState({ winner: winner });
        } else {
            if (
                this.state.gameMode === "ai" &&
                this.state.playerTurn === "Yellow"
            ) {
                let validMove = -1;
                while (validMove === -1) {
                    let slat = Math.floor(Math.random() * 7);
                    if (this.state.boardState[slat].indexOf(null) !== -1) {
                        validMove = slat;
                    } else {
                        validMove = -1;
                    }
                }
                this.makeMove(validMove);
            }
        }
    }

    render() {
        /*If a winner exists display the name*/
        let winnerMessageStyle;
        if (this.state.winner !== "") {
            winnerMessageStyle = "winnerMessage appear";
        } else {
            winnerMessageStyle = "winnerMessage";
        }

        /*Contruct slats allocating column from board*/
        let slats = [...Array(this.state.boardState.length)].map((x, i) => (
            <Slat
                key={i}
                holes={this.state.boardState[i]}
                handleClick={() => this.handleClick(i)}
            ></Slat>
        ));

        return (
            <div>
                {this.state.gameSelected && (
                    <div className="Board">{slats}</div>
                )}
                <div className={winnerMessageStyle}>{this.state.winner}</div>
                {(!this.state.gameSelected || this.state.winner !== "") && (
                    <div>
                        <button onClick={() => this.startGame()}>
                            Start Game
                        </button>
                        {/* <button onClick={() => this.startGame("ai")}>
                            Play AI
                        </button> */}
                    </div>
                )}
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="Game">
                    <h1></h1>
                    <Board></Board>
                </div>
            </div>
        );
    }
}

function checkLine(a, b, c, d) {
    return a !== null && a === b && a === c && a === d;
}

function checkWinner(bs, tm) {
    if (tm === 42) {
        return "No one wins!";
    }
    for (let c = 0; c < 7; c++)
        for (let r = 0; r < 4; r++)
            if (checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3]))
                return bs[c][r] + " wins!";

    for (let r = 0; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r]))
                return bs[c][r] + " wins!";

    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 4; c++)
            if (
                checkLine(
                    bs[c][r],
                    bs[c + 1][r + 1],
                    bs[c + 2][r + 2],
                    bs[c + 3][r + 3]
                )
            )
                return bs[c][r] + " wins!";

    for (let r = 0; r < 4; r++)
        for (let c = 3; c < 6; c++)
            if (
                checkLine(
                    bs[c][r],
                    bs[c - 1][r + 1],
                    bs[c - 2][r + 2],
                    bs[c - 3][r + 3]
                )
            )
                return bs[c][r] + " wins!";

    return "";
}

export default App;
