import { useState } from "react";
// import { useCurrentUser } from "../use-current-user";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import firebase from "../../firebase";

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
    var currentUser = firebase.auth().currentUser;
    const [isCreatingRoom, setIsCreatingRoom] = useState(false);

    async function createRoom() {
        if (!currentUser) return undefined;

        setIsCreatingRoom(true);
        let roomId = currentUser.roomId;

        try {
            if (roomId) {
                const foundUserRoom = await db
                    .collection("rooms")
                    .doc(roomId)
                    .get();
                if (foundUserRoom.exists) return roomId;
            } else {
                let newIdGenerated = false;
                roomId = generateId();

                while (!newIdGenerated) {
                    const foundRoom = await db
                        .collection("rooms")
                        .doc(roomId)
                        .get();
                    if (foundRoom.exists) roomId = generateId();
                    else newIdGenerated = true;
                }

                await db
                    .collection("users")
                    .doc(currentUser.uid)
                    .update({ roomId });
            }

            const startingTurn = Math.round(Math.random()) ? "Red" : "Yellow";
            await db
                .collection("rooms")
                .doc(roomId)
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
            return roomId;
        }
    }

    return { createRoom, isCreatingRoom };
};

export default useCreateRoom;
