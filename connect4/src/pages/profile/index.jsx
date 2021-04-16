import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useUser from "../../hooks/use-user";
import { Button } from "../../components/styles/button";
import { H1 } from "../../components/styles/h1";
import { P } from "../../components/styles/p";
import Content from "./content";

const ProfilePage = () => {
    const history = useHistory();
    const { userId } = useParams();
    const { isFetching, user } = useUser(userId);

    if (isFetching) return <H1>Fetching User Profile...</H1>;

    function goBack() {
        history.push("/");
    }

    return (
        <>
            <H1>Profile</H1>
            {user ? (
                <Content user={user} />
            ) : (
                <P>Could not find user with ID: {userId}</P>
            )}
            <Button onClick={goBack}>Back</Button>
        </>
    );
};
export default ProfilePage;
