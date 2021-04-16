import React, { changeEvent } from "react";
import { Error } from "../styles/error";
import { Container, Input, Label } from "./styles";

const Field = ({ errMessage, id, label, onChange, ...rest }) => {
    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <Container>
            <Label error={errMessage} htmlFor={id}>
                {label}
            </Label>
            <Input
                error={errMessage}
                id={id}
                onChange={handleChange}
                {...rest}
            />
            {errMessage && { errMessage }}
        </Container>
    );
};

export default Field;
