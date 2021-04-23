import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

const useJoinRoom = () => {
    const { roomId } = useParams();
    const [isJoining, setIsJoining] = useState(false);

    async function joinRoom(player, userId) {
        setIsJoining(true);
        try {
            const doc = await db.collection("ttt-rooms").doc(roomId).get();
            if (doc.exists) {
                const data = doc.data();
                console.log(data?.playerOID);
                console.log(userId);
                if (data?.playerOID === userId || data?.playerXID === userId) {
                    return alert(`You can't join this game more than once!`);
                }
                await db
                    .collection("ttt-rooms")
                    .doc(roomId)
                    .update({
                        [player === "X" ? "playerXID" : "playerOID"]: userId,
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
