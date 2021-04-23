import React, { useCallback, useEffect, useMemo } from "react";
import { H1 } from "../../../../components/styles/h1";
import { P } from "../../../../components/styles/p";
import { useHistory } from "react-router-dom";
import useJoinRoom from "../../../../hooks/use-join-room/JoinC4Room";
import useLeaveRoom from "../../../../hooks/use-leave-room/LeaveC4Room";
import useRoom from "../../../../hooks/use-room/UseC4Room";
import useSearchParams from "../../../../hooks/use-search-params";
import useUser from "../../../../hooks/use-user";
import { useAuth } from "../../../../contexts/AuthContext";

const PlayerDisplay = ({ player }) => {
    const { currentUser } = useAuth();
    const history = useHistory();
    const { isJoining, joinRoom } = useJoinRoom();
    const { isLeaving, leaveRoom } = useLeaveRoom();
    const { isFetching, room } = useRoom();
    const { player: search } = useSearchParams();

    const playerId = useMemo(
        () => (player === "Red" ? room?.playerRedID : room?.playerYellowID),
        [player, room]
    );

    const { user } = useUser(playerId);

    useEffect(() => {
        if (!isFetching && room && !user && currentUser && search === player)
            joinRoom(player, currentUser.uid);
    }, [isFetching, room, user, currentUser, search, player, joinRoom]);

    const renderRemoveUser = useCallback(() => {
        function handleClick(e) {
            e.stopPropagation();
            leaveRoom(player);
        }

        if (currentUser?.uid === playerId || currentUser?.uid === room?.owner)
            return (
                <>
                    &nbsp;
                    <span onClick={handleClick}>
                        {currentUser?.uid === playerId
                            ? `Leav${isLeaving ? "ing" : "e"}`
                            : `Kick${isLeaving ? "ing" : ""}`}
                    </span>
                </>
            );
        return null;
    }, [currentUser, isLeaving, leaveRoom, player, playerId, room]);

    if (isFetching) return <H1>Loading Room...</H1>;
    if (!room) return <H1>Room Not Found</H1>;

    return (
        <P>
            <strong>Player {player}:</strong>&nbsp;
            {user ? (
                <span onClick={() => history.push(`/u/${playerId}`)}>
                    {user.displayName}
                    {renderRemoveUser()}
                </span>
            ) : currentUser ? (
                <span onClick={() => joinRoom(player, currentUser.uid)}>
                    Join{isJoining ? "ing" : ""}
                </span>
            ) : (
                <span
                    onClick={() =>
                        history.push(
                            `/login?redirect=r_${room.id}&player=${player}`
                        )
                    }
                >
                    Login to Join
                </span>
            )}
        </P>
    );
};

export default PlayerDisplay;
