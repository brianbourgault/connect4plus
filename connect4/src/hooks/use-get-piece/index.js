import useRoom from "../use-room/index";

const useGetPiece = () => {
    const { room } = useRoom();

    async function getPiece(x, y) {
        const { moves } = room;
        const list = moves.filter((item) => {
            return item.x === x && item.y === y;
        });
        return list[0];
    }

    return { getPiece };
};

export default useGetPiece;
