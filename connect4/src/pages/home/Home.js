import React from "react";
import { Container } from "react-bootstrap";
import Logout from "../../components/logout/index";
import { useAuth } from "../../contexts/AuthContext";
import "./pages.css";

export default function Home() {
    const { currentUser } = useAuth();
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "75vh" }}
        >
            <div className="w-100" style={{ maxWidth: "1000px" }}>
                <>
                    <h1>
                        Welcome to the new home of playing board games online!
                        Here you will be able to play against someone random or
                        someone you know and your skills will be put to the
                        test.
                    </h1>
                </>
            </div>
        </Container>
    );
}

//line 15: {currentUser.email}
