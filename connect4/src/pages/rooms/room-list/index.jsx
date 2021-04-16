import React from "react";
import { H1 } from "../../../components/styles/h1";
import Room from "./room";
import useRooms from "../../../hooks/use-rooms";

const RoomList = () => {
    const { isFetching, rooms } = useRooms();

    if (isFetching) return <H1>Fetching Rooms...</H1>;
    if (rooms.length === 0) return <H1>No Rooms Found</H1>;

    return (
        <>
            {rooms.map((room) => (
                <Room key={room.id} {...room} />
            ))}
        </>
    );
};

export default RoomList;
