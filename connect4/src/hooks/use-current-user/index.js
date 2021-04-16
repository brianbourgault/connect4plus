import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";

const CurrentUserContext = createContext(undefined);

export const CurrentUserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (u) => {
            if (u?.uid) {
                const doc = await db.collection("users").doc(u?.uid).get();
                if (doc.exists) return setUser({ ...doc.data(), id: doc.id });
            }
            return setUser(undefined);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <CurrentUserContext.Provider value={user}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export const useCurrentUser = () => {
    useContext(CurrentUserContext);
};
