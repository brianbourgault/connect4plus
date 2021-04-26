import checkBoard from "./check-board";

export default function getUpdatedGameState({
    board,
    boardIndex,
    playerTurn,
    totalMoves,
    room,
}) {
    const newBoard = [...board];
    newBoard[boardIndex] = playerTurn;
    const outcome = checkBoard({ newBoard, playerTurn, totalMoves, room });

    let newMessage = "";
    let newIsGameFinished = false;

    switch (outcome) {
        case "XWIN": {
            newMessage = "X WINS!";
            newIsGameFinished = true;
            break;
        }
        case "OWIN": {
            newMessage = "O WINS!";
            newIsGameFinished = true;
            break;
        }
        case "DRAW": {
            newMessage = "DRAW!";
            newIsGameFinished = true;
            break;
        }
        case "NONE":
        default:
            newMessage = `${playerTurn === "X" ? "O" : "X"}'s Turn`;
    }

    return {
        newBoard,
        newMessage,
        newIsGameFinished,
        newPlayerTurn: playerTurn === "X" ? "O" : "X",
        newTotalMoves: totalMoves + 1,
    };
}
