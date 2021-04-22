import React, { useState, useContext } from "react";
import { Button } from "../styles/button";
import { Error } from "../styles/error";
import { auth } from "../../firebase";
import { GlobalContext } from "../../App";
import "../../pages/pages.css";

const Logout = () => {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [firebaseErr, setFirebaseErr] = useState(undefined);
    let { user, updateUserSession } = useContext(GlobalContext);

    async function handleClick() {
        setIsLoggingOut(true);
        setFirebaseErr(undefined);

        try {
            await auth.signOut();
            updateUserSession(null);
            localStorage.removeItem("authUser");
            window.location.reload();
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
