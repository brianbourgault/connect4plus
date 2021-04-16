import { useEffect, useState } from "react";
import { db } from "../../firebase";

const useUser = (userId) => {
    const [isFetching, setIsFetching] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        if (userId) {
            const unsubscribe = db
                .collection("users")
                .doc(userId)
                .onSnapshot((doc) => {
                    if (doc.exists) setUser({ ...doc.data(), id: userId });
                    else console.log("User Not Found");
                    if (isFetching) setIsFetching(false);
                });

            return () => {
                unsubscribe();
            };
        }
    }, [userId, isFetching]);

    return { isFetching, user };
};

export default useUser;
