import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../../components/styles/button";
import { H1 } from "../../../components/styles/h1";
import useClearBoard from "../../../hooks/use-clear-board/ClearC4Board";
import useRoom from "../../../hooks/use-room/UseC4Room";
import Connect4 from "./Board/Connect4Board";
import PlayerDisplay from "./player-display";
import { Container } from "./styles";

const Room = () => {
    const { clearBoard, isClearing } = useClearBoard();
    const history = useHistory();
    const { isFetching, room } = useRoom();

    if (isFetching) return <H1>Loading Room...</H1>;
    if (!room) return <H1>No Room Found</H1>;

    const { message, startingTurn, isGameFinished } = room;

    async function handleClear() {
        await clearBoard(startingTurn);
    }

    function goBack() {
        history.push("/");
    }

    return (
        <Container>
            <H1>{message}</H1>
            <Connect4 />
            <PlayerDisplay player="Red" />
            <PlayerDisplay player="Yellow" />
            {isGameFinished ? (
                <Button disabled={isClearing} onClick={handleClear}>
                    Start{isClearing ? "ing" : ""} New Game
                </Button>
            ) : (
                <Button disabled={isClearing} onClick={handleClear}>
                    Clear{isClearing ? "ing" : ""} Board
                </Button>
            )}
            <Button onClick={goBack}>Back to Home</Button>
        </Container>
    );
};

export default Room;