import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getUpdatedGameState } from "./helpers";

const useMarkBoard = () => {
    const { roomId } = useParams();
    const [isMarking, setIsMarking] = useState(false);

    async function markBoard(boardIndex, room) {
        setIsMarking(true);
        try {
            const { board, playerTurn, totalMoves } = room;
            const {
                newBoard,
                newIsGameFinished,
                newMessage,
                newPlayerTurn,
                newTotalMoves,
            } = getUpdatedGameState({
                board,
                boardIndex,
                playerTurn,
                totalMoves,
            });
            await db.collection("ttt-rooms").doc(roomId).update({
                board: newBoard,
                isGameFinished: newIsGameFinished,
                message: newMessage,
                playerTurn: newPlayerTurn,
                totalMoves: newTotalMoves,
            });
        } catch (err) {
            console.error(err);
        }
        setIsMarking(false);
    }
    return { isMarking, markBoard };
};

export default useMarkBoard;
