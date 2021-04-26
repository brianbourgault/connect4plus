import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/styles/button";
import { H1 } from "../../components/styles/h1";
import { Error as ErrComponent } from "../../components/styles/error";
import Field from "../../components/field";
import validateEmail from "../../helpers/validate-email";
import { useAuth } from "../../contexts/AuthContext";
import { GlobalContext } from "../../App";
import { auth, db } from "../../firebase";

const SignupPage = () => {
    const history = useHistory();
    const { currentUser } = useAuth();
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState();
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState();
    const [firebaseErr, setFirebaseErr] = useState();
    const [isSigningUp, setIsSigningUp] = useState(false);
    let { user, updateUserSession } = useContext(GlobalContext);

    useEffect(() => {
        if (currentUser) history.push("/");
    }, [history, currentUser]);

    useEffect(() => {
        setEmailErr(undefined);
        setPasswordErr(undefined);
        setConfirmPasswordErr(undefined);
        setFirebaseErr(undefined);
    }, [email, password, confirmPassword]);

    async function handleSignup() {
        if (email.length === 0) return setEmailErr("Email is required!");
        if (!validateEmail(email)) return setEmailErr("Email must be valid!");
        if (password.length === 0)
            return setPasswordErr("Password is required!");
        if (password.length < 6)
            return setPasswordErr(
                "Password must be at least 6 characters long!"
            );
        if (confirmPassword.length === 0)
            return setConfirmPasswordErr("Must confirm password!");
        if (password !== confirmPassword) {
            setPasswordErr("Passwords must match!");
            return setConfirmPasswordErr("Passwords must match!");
        }

        setIsSigningUp(true);

        try {
            const response = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            if (!response.user) throw new Error("Something went wrong!");
            localStorage.setItem("authUser", JSON.stringify(response.user));
            updateUserSession(response.user);

            await db
                .collection("users")
                .doc(response.user.uid)
                .set({
                    displayName: response.user.email?.split("@")[0],
                    c4Rating: 1000,
                    tttRating: 1000,
                });
            history.push("/");
        } catch (ex) {
            setFirebaseErr(ex.message);
            setIsSigningUp(false);
            updateUserSession(null);
        }
    }

    function goToLogin() {
        history.push("/login");
    }

    function goBack() {
        history.push("/");
    }

    return (
        <>
            <H1>Signup</H1>
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
            <Field
                errMessage={confirmPasswordErr}
                id="confirm-password"
                label="* Confirm Password"
                onChange={setConfirmPassword}
                placeholder="Confirm Password Here"
                type="password"
                value={confirmPassword}
            />
            {firebaseErr && <ErrComponent>{firebaseErr}</ErrComponent>}
            <Button disabled={isSigningUp} onClick={handleSignup}>
                Sign{isSigningUp ? "ing" : ""} Up
            </Button>
            <Button onClick={goToLogin}>Login Instead</Button>
            <Button onClick={goBack}>Back to Home</Button>
        </>
    );
};

export default SignupPage;
