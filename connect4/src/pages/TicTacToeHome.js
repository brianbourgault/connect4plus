import React from "react";
import { useHistory } from "react-router-dom";
import { H1 } from "../components/styles/h1";
import { Button } from "../components/styles/button";
import Logout from "../components/logout/index";
import useCreateRoom from "../hooks/use-create-room/CreateTTTRoom";
import { useAuth } from "../contexts/AuthContext";
import "./pages.css";

const TicTacToeHome = () => {
    const history = useHistory();
    const { currentUser } = useAuth();
    const { createRoom, isCreatingRoom } = useCreateRoom();

    function goToJoinRoom() {
        history.push("/tr");
    }

    function goToLogin() {
        history.push("/login");
    }

    function goToProfile() {
        history.push(`/u/${currentUser.uid}`);
    }

    function goToSignup() {
        history.push("/signup");
    }

    async function handleCreateRoom() {
        const roomId = await createRoom();
        history.push(`/tr/${roomId}`);
    }

    return (
        <>
            <H1>TicTacToe Home Page</H1>
            <Button onClick={goToJoinRoom}>Join Room</Button>
            {currentUser ? (
                <>
                    <Button
                        disabled={isCreatingRoom}
                        onClick={handleCreateRoom}
                    >
                        Creat{isCreatingRoom ? "ing" : "e"} Room
                    </Button>
                    <Button onClick={goToProfile}>Profile</Button>
                    <Logout />
                </>
            ) : (
                <>
                    <Button onClick={goToLogin}>Login</Button>
                    <Button onClick={goToSignup}>Signup</Button>
                </>
            )}
        </>
    );
};

export default TicTacToeHome;
