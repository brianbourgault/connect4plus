import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

const useClearBoard = () => {
    const { roomId } = useParams();
    const [isClearing, setIsClearing] = useState(false);

    async function clearBoard(startingTurn) {
        setIsClearing(true);
        try {
            const newStartingTurn = startingTurn === "X" ? "O" : "X";
            await db
                .collection("ttt-rooms")
                .doc(roomId)
                .update({
                    board: [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                    ],
                    isGameFinished: false,
                    message: `${newStartingTurn}'s Turn`,
                    playerTurn: newStartingTurn,
                    startingTurn: newStartingTurn,
                    totalMoves: 1,
                });
        } catch (err) {
            console.error(err);
        } finally {
            setIsClearing(false);
        }
    }

    return { clearBoard, isClearing };
};

export default useClearBoard;
