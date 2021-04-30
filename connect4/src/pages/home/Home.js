import React from "react";
import { Container } from "react-bootstrap";
import "../pages.css";

export default function Home() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "75vh" }}
        >
            <div className="w-100" style={{ maxWidth: "1500px" }}>
                <>
                    <h1>
                        Welcome to the new home of playing board games online!
                    </h1>
                    <h3 style={{ marginTop: "50px" }}>
                        Play either Connect Four or Tic Tac Toe against someone
                        else. Find a room with your friend or join a random
                        room. If you win your rating for that game goes up and
                        if you lose it goes down. View your profile to see your
                        ratings or change your display name.
                    </h3>
                </>
            </div>
        </Container>
    );
}
