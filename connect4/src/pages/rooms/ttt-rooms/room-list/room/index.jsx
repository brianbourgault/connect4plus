import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";

const Room = ({ id, owner }) => {
    const history = useHistory();

    function handleClick() {
        history.push(`/tr/${id}`);
    }

    return (
        <Container key={id} onClick={handleClick}>
            {id} = {owner}
        </Container>
    );
};

export default Room;
