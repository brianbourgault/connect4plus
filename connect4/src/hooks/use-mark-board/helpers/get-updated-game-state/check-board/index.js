import checkWin from "./check-win";

export default function checkBoard({ newBoard, playerTurn, totalMoves }) {
    if (totalMoves >= 5) {
        if (playerTurn === "X" && checkWin(newBoard, "X")) return "XWIN";
        if (playerTurn === "O" && checkWin(newBoard, "O")) return "OWIN";
        if (totalMoves === 9) return "DRAW";
    }

    return "NONE";
}
