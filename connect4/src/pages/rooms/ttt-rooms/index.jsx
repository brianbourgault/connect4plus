import React from "react";
import { Button } from "../../../components/styles/button";
import { H1 } from "../../../components/styles/h1";
import RoomList from "./room-list";
import { useHistory } from "react-router-dom";

const RoomsPage = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <>
            <H1>Tic Tac Toe Rooms</H1>
            <RoomList />
            <Button onClick={handleClick}>Back to Home</Button>
        </>
    );
};

export default RoomsPage;
