import checkWin from "./check-win/index";
import { db } from "../../../../../firebase";

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
        ) {
            CalculateElo("Red", room);
            return "REDWIN";
        }
        if (
            playerTurn === "Yellow" &&
            checkWin({ newMoves, x, y, playerTurn, room })
        ) {
            CalculateElo("Yellow", room);
            return "YELLOWWIN";
        }
        if (totalMoves >= 41) return "DRAW";
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
    const { playerRedID, playerYellowID } = room;

    try {
        const playerRedDoc = await db
            .collection("users")
            .doc(playerRedID)
            .get();
        const playerYellowDoc = await db
            .collection("users")
            .doc(playerYellowID)
            .get();
        if (playerRedDoc.exists && playerYellowDoc.exists) {
            const redData = playerRedDoc.data();
            const yellowData = playerYellowDoc.data();
            let newRedRating;
            let newYellowRating;
            var yellowProbability = probability(
                redData.c4Rating,
                yellowData.c4Rating
            );
            var redProbability = probability(
                yellowData.c4Rating,
                redData.c4Rating
            );
            if (winningPlayer === "Red") {
                newRedRating = redData.c4Rating + 32 * (1 - redProbability);
                newYellowRating =
                    yellowData.c4Rating + 32 * (0 - yellowProbability);
            } else {
                newRedRating = redData.c4Rating + 32 * (0 - redProbability);
                newYellowRating =
                    yellowData.c4Rating + 32 * (1 - yellowProbability);
            }
            await db
                .collection("users")
                .doc(playerRedID)
                .update({ c4Rating: Math.floor(newRedRating) });
            await db
                .collection("users")
                .doc(playerYellowID)
                .update({ c4Rating: Math.floor(newYellowRating) });
        }
    } catch (err) {
        console.error(err);
    }
}
