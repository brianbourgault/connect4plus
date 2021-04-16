import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/styles/button";
import { H1 } from "../../components/styles/h1";
import { Error } from "../../components/styles/error";
import Field from "../../components/field";
import validateEmail from "../../helpers/validate-email";
import { useAuth } from "../../contexts/AuthContext";
import useSearchParams from "../../hooks/use-search-params";
import { auth } from "../../firebase";

const LoginPage = () => {
    const history = useHistory();
    const { currentUser } = useAuth();
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState();
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState();
    const [firebaseErr, setFirebaseErr] = useState();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const { redirect, player } = useSearchParams();

    const performRedirect = useCallback(() => {
        if (!redirect) return history.push("/");
        if (!player) return history.push(`/${redirect}?player=${player}`);
        return history.push(`/${redirect}?player=${player}`);
    }, [history, player, redirect]);

    useEffect(() => {
        if (currentUser) performRedirect();
    }, [performRedirect, currentUser]);

    useEffect(() => {
        setEmailErr(undefined);
        setPasswordErr(undefined);
    }, [email, password]);

    async function handleLogin() {
        if (email.length === 0) return setEmailErr("Email is Required!");
        if (!validateEmail(email)) return setEmailErr("Email must be valid!");
        if (password.length === 0)
            return setPasswordErr("Password is required!");

        setIsLoggingIn(true);

        try {
            await auth.signInWithEmailAndPassword(email, password);
            performRedirect();
        } catch (err) {
            setFirebaseErr(err.message);
            setIsLoggingIn(false);
        }
    }

    function goToSignup() {
        history.push("/signup");
    }

    function goBack() {
        history.push("/");
    }

    return (
        <>
            <H1>Login</H1>
            <Field
                errMessage={emailErr}
                id="email"
                label="* Email"
                onChange={setEmail}
                placeholder="Enter Email Here"
                type="email"
                value={email}
            />
            <Field
                errMessage={passwordErr}
                id="password"
                label="* Password"
                onChange={setPassword}
                placeholder="Enter Password Here"
                type="password"
                value={password}
            />
            {firebaseErr && <Error>{firebaseErr}</Error>}
            <Button disabled={isLoggingIn} onClick={handleLogin}>
                Log{isLoggingIn ? "ing" : ""} In
            </Button>
            <Button onClick={goToSignup}>Signup Instead</Button>
            <Button onClick={goBack}>Back to Home</Button>
        </>
    );
};

export default LoginPage;
