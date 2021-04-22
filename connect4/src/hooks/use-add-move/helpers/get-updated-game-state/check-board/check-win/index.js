export default function checkWin({ newMoves, x, y, playerTurn }) {
    console.log("made it to check win");
    console.log(y);
    const velocities = [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: -1, y: 1 },
        { x: 1, y: 1 },
    ];
    for (let dex = 0; dex < velocities.length; dex++) {
        const element = velocities[dex];
        const winningMoves = getWinningMovesForVelocity(
            x,
            y,
            element.x,
            element.y,
            newMoves,
            playerTurn
        );
        if (winningMoves.length > 3) {
            return true;
        }
    }
    return false;
}

function getWinningMovesForVelocity(
    xPosition,
    yPosition,
    xVelocity,
    yVelocity,
    newMoves,
    playerTurn
) {
    let winningMoves = [{ x: xPosition, y: yPosition }];
    for (let delta = 1; delta <= 3; delta += 1) {
        const checkX = xPosition + xVelocity * delta;
        const checkY = yPosition + yVelocity * delta;
        const checkPiece = getPiece(checkX, checkY, newMoves);

        if (checkPiece && checkPiece.player === playerTurn) {
            winningMoves.push({ x: checkX, y: checkY });
        } else {
            break;
        }
    }
    for (let delta = -1; delta >= -3; delta -= 1) {
        const checkX = xPosition + xVelocity * delta;
        const checkY = yPosition + yVelocity * delta;
        const checkPiece = getPiece(checkX, checkY, newMoves);

        if (checkPiece && checkPiece.player === playerTurn) {
            winningMoves.push({ x: checkX, y: checkY });
        } else {
            break;
        }
    }
    return winningMoves;
}

function getPiece(x, y, newMoves) {
    const list = newMoves.filter((item) => {
        return item.x === x && item.y === y;
    });
    return list[0];
}
