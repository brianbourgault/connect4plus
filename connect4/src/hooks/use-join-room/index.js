import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

const useJoinRoom = () => {
    const { roomId } = useParams();
    const [isJoining, setIsJoining] = useState(false);

    async function joinRoom(player, userId) {
        setIsJoining(true);
        try {
            const doc = await db.collection("rooms").doc(roomId).get();
            if (doc.exists) {
                const data = doc.data();
                if (
                    data?.playerYellowID === userId ||
                    data?.playerRedID === userId
                ) {
                    return alert(`You can't join this game more than once!`);
                }
                await db
                    .collection("rooms")
                    .doc(roomId)
                    .update({
                        [player === "Red"
                            ? "playerRedID"
                            : "playerYellowID"]: userId,
                    });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsJoining(false);
        }
    }

    return { isJoining, joinRoom };
};

export default useJoinRoom;
