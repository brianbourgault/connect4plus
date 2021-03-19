import React from 'react';
import { useAuth } from '../contexts/AuthContext'
import { Card, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './pages.css'

export default function Home() {
    const { currentUser } = useAuth()

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "600px" }}>
                <>
                    <Card style={{ padding: "50px" }}>
                        <Card.Body>
                            <strong>Current User:</strong> {currentUser && currentUser.email}
                            <Link to="/dashboard" className="btn btn-primary w-100 mt-3">Dashboard</Link>
                        </Card.Body>
                    </Card>
                    <h1>
                        Welcome to the home of new-age board games! Here you will be matched with someone at random and your skills will be put to the test.
                    </h1>
                </>
            </div>
        </Container>
    );
}

//line 15: {currentUser.email}