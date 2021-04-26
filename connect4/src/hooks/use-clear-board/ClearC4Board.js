import { useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase";

const useClearBoard = () => {
    const { roomId } = useParams();
    const [isClearing, setIsClearing] = useState(false);

    async function clearBoard(startingTurn) {
        setIsClearing(true);
        try {
            const newStartingTurn = startingTurn === "Red" ? "Yellow" : "Red";
            await db
                .collection("c4-rooms")
                .doc(roomId)
                .update({
                    moves: [],
                    isGameFinished: false,
                    message: `${newStartingTurn}'s turn`,
                    startingTurn: newStartingTurn,
                    playerTurn: newStartingTurn,
                    totalMoves: 0,
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
