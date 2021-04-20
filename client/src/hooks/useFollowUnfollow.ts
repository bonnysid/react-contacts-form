import {useMutation} from "@apollo/client";
import {FOLLOW, UNFOLLOW} from "../query/auth";

const useFollowUnfollow = () => {
    const [followUser] = useMutation(FOLLOW)
    const [unfollowUser] = useMutation(UNFOLLOW)

    return {
        follow: (id: number | string) => followUser({variables: {id}}),
        unfollow: (id: number | string) => unfollowUser({variables: {id}})
    }
}

export default useFollowUnfollow