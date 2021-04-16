import React, { useState } from "react";
import { Button } from "../styles/button";
import { Error } from "../styles/error";
import { auth } from "../../firebase";

const Logout = () => {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [firebaseErr, setFirebaseErr] = useState(undefined);

    async function handleClick() {
        setIsLoggingOut(true);
        setFirebaseErr(undefined);

        try {
            await auth.signOut();
        } catch (err) {
            setFirebaseErr(err.message);
            setIsLoggingOut(false);
        }
    }

    return (
        <>
            <Button disabled={isLoggingOut} onClick={handleClick}>
                Log{isLoggingOut ? "ging" : ""} Out
            </Button>
            {firebaseErr && <Error>{firebaseErr}</Error>}
        </>
    );
};

export default Logout;
