import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import useRoom from "../../hooks/use-room/index";
import GetUpdatedGameState from "./helpers/get-updated-game-state/index";

const useAddMove = () => {
    const { roomId } = useParams();
    const [isMarking, setIsMarking] = useState(false);
    const { room } = useRoom();

    async function AddMove(x, y) {
        setIsMarking(true);
        const { moves, totalMoves, playerTurn } = room;
        const {
            newMoves,
            newIsGameDone,
            newMessage,
            newPlayerTurn,
            newTotalMoves,
        } = GetUpdatedGameState({ moves, x, playerTurn, totalMoves, room });
        try {
            await db.collection("rooms").doc(roomId).update({
                moves: newMoves,
                isGameFinished: newIsGameDone,
                message: newMessage,
                playerTurn: newPlayerTurn,
                totalMoves: newTotalMoves,
            });
            //checkForWin(x, availableYPosition);
        } catch (err) {
            console.error(err);
        }
        setIsMarking(false);
    }

    return { isMarking, AddMove };
};

export default useAddMove;
