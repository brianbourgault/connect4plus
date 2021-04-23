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
        let c4RoomId = currentUser.c4RoomId;

        try {
            if (c4RoomId) {
                const foundUserRoom = await db
                    .collection("c4-rooms")
                    .doc(c4RoomId)
                    .get();
                if (foundUserRoom.exists) return c4RoomId;
            } else {
                let newIdGenerated = false;
                c4RoomId = generateId();

                while (!newIdGenerated) {
                    const foundRoom = await db
                        .collection("c4-rooms")
                        .doc(c4RoomId)
                        .get();
                    if (foundRoom.exists) c4RoomId = generateId();
                    else newIdGenerated = true;
                }

                await db
                    .collection("users")
                    .doc(currentUser.uid)
                    .update({ c4RoomId });
            }

            const startingTurn = Math.round(Math.random()) ? "Red" : "Yellow";
            await db
                .collection("c4-rooms")
                .doc(c4RoomId)
                .set({
                    moves: [],
                    isGameFinished: false,
                    message: `${startingTurn}'s Turn`,
                    playerTurn: startingTurn,
                    startingTurn: startingTurn,
                    owner: currentUser.uid,
                    totalMoves: 0,
                });
        } catch (err) {
            console.error(err);
        } finally {
            setIsCreatingRoom(false);
            return c4RoomId;
        }
    }

    return { createRoom, isCreatingRoom };
};

export default useCreateRoom;
