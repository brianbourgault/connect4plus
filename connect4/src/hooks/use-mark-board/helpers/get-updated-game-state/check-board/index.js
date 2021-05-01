import checkWin from "./check-win";
import { db } from "../../../../../firebase";

export default function checkBoard({ newBoard, playerTurn, totalMoves, room }) {
    if (totalMoves >= 5) {
        if (playerTurn === "X" && checkWin(newBoard, "X")) {
            CalculateElo("X", room);
            return "XWIN";
        }
        if (playerTurn === "O" && checkWin(newBoard, "O")) {
            CalculateElo("Y", room);
            return "OWIN";
        }
        if (totalMoves === 9) return "DRAW";
    }

    return "NONE";
}

function probability(rating1, rating2) {
    return (
        (1.0 * 1.0) /
        (1 + 1.0 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))
    );
}

async function CalculateElo(winningPlayer, room) {
    const { playerXID, playerOID } = room;

    try {
        const playerXDoc = await db.collection("users").doc(playerXID).get();
        const playerODoc = await db.collection("users").doc(playerOID).get();
        if (playerXDoc.exists && playerODoc.exists) {
            const xData = playerXDoc.data();
            const oData = playerODoc.data();
            let newXRating;
            let newORating;
            var oProbability = probability(xData.tttRating, oData.tttRating);
            var xProbability = probability(oData.tttRating, xData.tttRating);
            if (winningPlayer === "X") {
                newXRating = xData.tttRating + 32 * (1 - xProbability);
                newORating = oData.tttRating + 32 * (0 - oProbability);
            } else {
                newXRating = xData.tttRating + 32 * (0 - xProbability);
                newORating = oData.tttRating + 32 * (1 - oProbability);
            }
            await db
                .collection("users")
                .doc(playerXID)
                .update({ tttRating: Math.floor(newXRating) });
            await db
                .collection("users")
                .doc(playerOID)
                .update({ tttRating: Math.floor(newORating) });
        }
    } catch (err) {
        console.error(err);
    }
}
