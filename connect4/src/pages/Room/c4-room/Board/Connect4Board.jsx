import React from "react";
import { H1 } from "../../../../components/styles/h1";
import "../../../../pages/pages.css";
import useRoom from "../../../../hooks/use-room/UseC4Room";
import useAddMove from "../../../../hooks/use-add-move/index";
import { useAuth } from "../../../../contexts/AuthContext";
import { Block, Container, Row } from "./styles";

const Connect4 = () => {
    const { isMarking, AddMove } = useAddMove();
    const { isFetching, room } = useRoom();
    const { currentUser } = useAuth();

    if (isFetching) return <H1>Loading Room...</H1>;
    if (!room) return <H1>Room Not Found</H1>;

    const { playerTurn, isGameFinished, playerRedID, playerYellowID } = room;

    async function handleClick(column, row) {
        if (!isMarking && !isGameFinished) {
            if (
                (playerTurn === "Red" && currentUser?.uid === playerRedID) ||
                (playerTurn === "Yellow" && currentUser?.uid === playerYellowID)
            ) {
                await AddMove(column, row);
            }
        }
    }

    return (
        <Container marking={isMarking}>
            <Row>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(0, 0)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(0, 0, room) === "undefined"
                                    ? "white"
                                    : getPiece(0, 0, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(1, 0)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(1, 0, room) === "undefined"
                                    ? "white"
                                    : getPiece(1, 0, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(2, 0)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(2, 0, room) === "undefined"
                                    ? "white"
                                    : getPiece(2, 0, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(3, 0)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(3, 0, room) === "undefined"
                                    ? "white"
                                    : getPiece(3, 0, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(4, 0)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(4, 0, room) === "undefined"
                                    ? "white"
                                    : getPiece(4, 0, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(5, 0)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(5, 0, room) === "undefined"
                                    ? "white"
                                    : getPiece(5, 0, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(6, 0)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(6, 0, room) === "undefined"
                                    ? "white"
                                    : getPiece(6, 0, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
            </Row>

            <Row>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(0, 1)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(0, 1, room) === "undefined"
                                    ? "white"
                                    : getPiece(0, 1, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(1, 1)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(1, 1, room) === "undefined"
                                    ? "white"
                                    : getPiece(1, 1, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(2, 1)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(2, 1, room) === "undefined"
                                    ? "white"
                                    : getPiece(2, 1, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(3, 1)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(3, 1, room) === "undefined"
                                    ? "white"
                                    : getPiece(3, 1, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(4, 1)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(4, 1, room) === "undefined"
                                    ? "white"
                                    : getPiece(4, 1, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(5, 1)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(5, 1, room) === "undefined"
                                    ? "white"
                                    : getPiece(5, 1, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(6, 1)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(6, 1, room) === "undefined"
                                    ? "white"
                                    : getPiece(6, 1, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
            </Row>

            <Row>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(0, 2)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(0, 2, room) === "undefined"
                                    ? "white"
                                    : getPiece(0, 2, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(1, 2)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(1, 2, room) === "undefined"
                                    ? "white"
                                    : getPiece(1, 2, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(2, 2)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(2, 2, room) === "undefined"
                                    ? "white"
                                    : getPiece(2, 2, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(3, 2)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(3, 2, room) === "undefined"
                                    ? "white"
                                    : getPiece(3, 2, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(4, 2)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(4, 2, room) === "undefined"
                                    ? "white"
                                    : getPiece(4, 2, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(5, 2)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(5, 2, room) === "undefined"
                                    ? "white"
                                    : getPiece(5, 2, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(6, 2)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(6, 2, room) === "undefined"
                                    ? "white"
                                    : getPiece(6, 2, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
            </Row>

            <Row>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(0, 3)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(0, 3, room) === "undefined"
                                    ? "white"
                                    : getPiece(0, 3, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(1, 3)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(1, 3, room) === "undefined"
                                    ? "white"
                                    : getPiece(1, 3, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(2, 3)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(2, 3, room) === "undefined"
                                    ? "white"
                                    : getPiece(2, 3, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(3, 3)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(3, 3, room) === "undefined"
                                    ? "white"
                                    : getPiece(3, 3, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(4, 3)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(4, 3, room) === "undefined"
                                    ? "white"
                                    : getPiece(4, 3, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(5, 3)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(5, 3, room) === "undefined"
                                    ? "white"
                                    : getPiece(5, 3, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(6, 3)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(6, 3, room) === "undefined"
                                    ? "white"
                                    : getPiece(6, 3, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
            </Row>

            <Row>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(0, 4)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(0, 4, room) === "undefined"
                                    ? "white"
                                    : getPiece(0, 4, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(1, 4)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(1, 4, room) === "undefined"
                                    ? "white"
                                    : getPiece(1, 4, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(2, 4)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(2, 4, room) === "undefined"
                                    ? "white"
                                    : getPiece(2, 4, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(3, 4)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(3, 4, room) === "undefined"
                                    ? "white"
                                    : getPiece(3, 4, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(4, 4)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(4, 4, room) === "undefined"
                                    ? "white"
                                    : getPiece(4, 4, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(5, 4)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(5, 4, room) === "undefined"
                                    ? "white"
                                    : getPiece(5, 4, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(6, 4)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(6, 4, room) === "undefined"
                                    ? "white"
                                    : getPiece(6, 4, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
            </Row>

            <Row>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(0, 5)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(0, 5, room) === "undefined"
                                    ? "white"
                                    : getPiece(0, 5, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(1, 5)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(1, 5, room) === "undefined"
                                    ? "white"
                                    : getPiece(1, 5, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(2, 5)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(2, 5, room) === "undefined"
                                    ? "white"
                                    : getPiece(2, 5, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(3, 5)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(3, 5, room) === "undefined"
                                    ? "white"
                                    : getPiece(3, 5, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(4, 5)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(4, 5, room) === "undefined"
                                    ? "white"
                                    : getPiece(4, 5, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(5, 5)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(5, 5, room) === "undefined"
                                    ? "white"
                                    : getPiece(5, 5, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
                <Block
                    style={{ background: "#00a8ff" }}
                    onClick={() => handleClick(6, 5)}
                >
                    <Block
                        style={{
                            background:
                                typeof getPiece(6, 5, room) === "undefined"
                                    ? "white"
                                    : getPiece(6, 5, room).player,
                            borderRadius: "50px",
                        }}
                    ></Block>
                </Block>
            </Row>
        </Container>
    );
    // }
};

function getPiece(x, y, room) {
    const { moves } = room;
    const list = moves.filter((item) => {
        return item.x === x && item.y === y;
    });
    return list[0];
}

export default Connect4;
