import { useState } from "react";
import { db } from "../../firebase";

const useUpdateProfile = (userId) => {
    const [isUpdating, setIsUpdating] = useState(false);

    async function updateProfile(displayName) {
        setIsUpdating(true);
        try {
            await db.collection("users").doc(userId).update({ displayName });
        } catch (err) {
            console.error(err);
        } finally {
            setIsUpdating(false);
        }
    }

    return { isUpdating, updateProfile };
};

export default useUpdateProfile;
