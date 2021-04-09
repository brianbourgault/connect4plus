import React, { useRef } from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import PlayerNames from './PlayerNames'
import './pages.css'



export default function Connect4LandingPage() {
    const playerOneRef = useRef();
    const playerTwoRef = useRef();
    const history = useHistory();
    

    function handleSubmit(e) {
        e.preventDefault()
        PlayerNames.playerOneName = playerOneRef.current.value
        PlayerNames.playerTwoName = playerTwoRef.current.value
        history.push('/connect-four')
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Log In</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Player One</Form.Label>
                                        <Form.Control type="text" ref={playerOneRef} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Player Two</Form.Label>
                                        <Form.Control type="text" ref={playerTwoRef} required />
                                    </Form.Group>
                                    <Button className="w-100" type="submit">Start Game</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </>
                </div>
            </Container>
    )
}

