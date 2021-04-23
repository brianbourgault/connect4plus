import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase";

const useRoom = () => {
    const { roomId } = useParams();
    const [isFetching, setIsFetching] = useState(true);
    const [room, setRoom] = useState();

    useEffect(() => {
        const unsubscribe = db
            .collection("c4-rooms")
            .doc(roomId)
            .onSnapshot((doc) => {
                if (doc.exists) setRoom({ ...doc.data(), id: doc.id });
                else console.log("Room Not Found");
                if (isFetching) setIsFetching(false);
            });

        return () => {
            unsubscribe();
        };
    }, [roomId, isFetching]);

    return { isFetching, room };
};

export default useRoom;
