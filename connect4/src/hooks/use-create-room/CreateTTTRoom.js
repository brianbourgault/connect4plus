import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

function generateId() {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 4; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return result;
}

const useCreateRoom = () => {
    const { currentUser } = useAuth();
    const [isCreatingRoom, setIsCreatingRoom] = useState(false);

    async function createRoom() {
        if (!currentUser) return undefined;

        setIsCreatingRoom(true);
        let tttRoomId = currentUser.tttRoomId;

        try {
            if (tttRoomId) {
                const foundUserRoom = await db
                    .collection("ttt-rooms")
                    .doc(tttRoomId)
                    .get();
                if (foundUserRoom.exists) return tttRoomId;
            } else {
                let newIdGenerated = false;
                tttRoomId = generateId();

                while (!newIdGenerated) {
                    const foundRoom = await db
                        .collection("ttt-rooms")
                        .doc(tttRoomId)
                        .get();
                    if (foundRoom.exists) tttRoomId = generateId();
                    else newIdGenerated = true;
                }

                await db
                    .collection("users")
                    .doc(currentUser.uid)
                    .update({ tttRoomId });
            }

            const startingTurn = Math.round(Math.random()) ? "X" : "O";
            await db
                .collection("ttt-rooms")
                .doc(tttRoomId)
                .set({
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
                    message: `${startingTurn}'s Turn`,
                    playerTurn: startingTurn,
                    startingTurn: startingTurn,
                    owner: currentUser.uid,
                    totalMoves: 1,
                });
        } catch (err) {
            console.error(err);
        } finally {
            setIsCreatingRoom(false);
            return tttRoomId;
        }
    }

    return { createRoom, isCreatingRoom };
};

export default useCreateRoom;
