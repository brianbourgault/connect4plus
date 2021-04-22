import checkWin from "./check-win/index";

export default function checkBoard(
    newMoves,
    x,
    y,
    playerTurn,
    totalMoves,
    room
) {
    if (totalMoves >= 6) {
        if (
            playerTurn === "Red" &&
            checkWin({ newMoves, x, y, playerTurn, room })
        )
            return "REDWIN";
        if (
            playerTurn === "Yellow" &&
            checkWin({ newMoves, x, y, playerTurn, room })
        )
            return "YELLOWWIN";
        if (totalMoves >= 41) return "DRAW";
    }

    return "NONE";
}
