import { useCallback, useEffect, useState } from "react";
import { db } from "../../firebase";

const useRooms = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [rooms, setRooms] = useState([]);

    async function formatRoomDoc(roomDoc) {
        const userDoc = await db
            .collection("users")
            .doc(roomDoc.data().owner)
            .get();
        const owner = userDoc.data()?.displayName ?? "<UNKNOWN>";
        return { id: roomDoc.id, owner };
    }

    const getRooms = useCallback(
        async (snapshot) =>
            Promise.all(snapshot.docs.map((roomDoc) => formatRoomDoc(roomDoc))),
        []
    );

    useEffect(() => {
        const unsubscribe = db.collection("c4-rooms").onSnapshot((snapshot) => {
            getRooms(snapshot).then((formattedRooms) => {
                setRooms(formattedRooms);
                if (isFetching) setIsFetching(false);
            });
        });

        return () => {
            unsubscribe();
        };
    }, [getRooms, isFetching]);

    return { isFetching, rooms };
};

export default useRooms;
