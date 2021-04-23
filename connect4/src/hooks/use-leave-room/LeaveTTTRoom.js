import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

const useLeavePosition = () => {
    const { roomId } = useParams();
    const [isLeaving, setIsLeaving] = useState(false);

    async function leaveRoom(player) {
        setIsLeaving(true);
        try {
            await db
                .collection("ttt-rooms")
                .doc(roomId)
                .update({
                    [player === "Red" ? "playerXID" : "playerOID"]: null,
                });
        } catch (err) {
            console.error(err);
        } finally {
            setIsLeaving(false);
        }
    }

    return { isLeaving, leaveRoom };
};

export default useLeavePosition;
