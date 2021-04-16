import checkBoard from "./check-board/index";

export default function GetUpdatedGameState({
    moves,
    x,
    playerTurn,
    totalMoves,
    room,
}) {
    let newMoves = moves;
    let availableYPosition = null;
    for (let position = 5; position >= 0; position--) {
        if (!getPiece(x, position, room)) {
            availableYPosition = position;
            break;
        }
    }

    if (availableYPosition !== null) {
        newMoves = newMoves.concat({
            x,
            y: availableYPosition,
            player: playerTurn,
        });
    }

    console.log("availableYPosition value: " + availableYPosition);

    const outcome = checkBoard(
        newMoves,
        x,
        availableYPosition,
        playerTurn,
        totalMoves,
        room
    );

    let newMessage = "";
    let newIsGameDone = false;

    switch (outcome) {
        case "REDWIN": {
            newMessage = "RED WINS!";
            newIsGameDone = true;
            break;
        }
        case "YELLOWWIN": {
            newMessage = "YELLOW WINS!";
            newIsGameDone = true;
            break;
        }
        case "DRAW": {
            newMessage = "DRAW!";
            newIsGameDone = true;
            break;
        }
        case "NONE":
        default:
            newMessage = `${playerTurn === "Red" ? "Yellow" : "Red"}'s Turn`;
    }

    return {
        newMoves,
        newIsGameDone,
        newMessage,
        newPlayerTurn: playerTurn === "Red" ? "Yellow" : "Red",
        newTotalMoves: totalMoves + 1,
    };
}

function getPiece(x, y, room) {
    const { moves } = room;
    const list = moves.filter((item) => {
        return item.x === x && item.y === y;
    });
    return list[0];
}
