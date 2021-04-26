import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import "../pages.css";
import { GlobalContext } from "../../App";

export default function Navigation() {
    let [clicked, setClicked] = useState(false);
    const { logout } = useAuth();
    let { user, updateUserSession } = useContext(GlobalContext);

    useEffect(() => {
        let authUser = JSON.parse(localStorage.getItem("authUser"));
        updateUserSession(authUser);
    }, []);

    function handleClick() {
        setClicked(!clicked);
    }

    function signOut() {
        logout();
        updateUserSession(null);
        localStorage.removeItem("authUser");
        window.location.reload();
    }

    function getNavLinks() {
        if (user != null) {
            return (
                <Nav>
                    <Nav.Link
                        as={Link}
                        to={`/u/${user.uid}`}
                        className="nav-links"
                    >
                        {" "}
                        Welcome {user.email}
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/"
                        onClick={async () => await signOut()}
                        className="nav-links"
                    >
                        Sign Out
                    </Nav.Link>
                </Nav>
            );
        } else {
            return (
                <Nav>
                    <Nav.Link className="nav-links" as={Link} to="/login">
                        Login
                    </Nav.Link>
                    <Nav.Link className="nav-links" as={Link} to="/signup">
                        Sign Up
                    </Nav.Link>
                </Nav>
            );
        }
    }

    return (
        <nav className="nav-item">
            <Navbar.Brand>
                <Nav.Link as={Link} to="/">
                    <h1 className="title">
                        Board Game Plus<i className="fas fa-chess"></i>
                    </h1>
                </Nav.Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </Navbar.Brand>
            <Nav className={clicked ? "nav-menu active" : "nav-menu"}>
                <Nav.Link className="nav-links" as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link className="nav-links" as={Link} to="/connectfour">
                    Connect 4
                </Nav.Link>
                <Nav.Link className="nav-links" as={Link} to="/tictactoe">
                    Tic Tac Toe
                </Nav.Link>
                {getNavLinks()}
            </Nav>
        </nav>
    );
}
