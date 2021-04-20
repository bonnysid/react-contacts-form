import {useMutation} from "@apollo/client";
import {FOLLOW, UNFOLLOW} from "../query/user";

const useFollowUnfollow = () => {
    const [followUser] = useMutation<{follow: boolean}>(FOLLOW)
    const [unfollowUser] = useMutation<{unfollow: boolean}>(UNFOLLOW)

    return {
        follow: (id: number | string) => followUser({variables: {id}}),
        unfollow: (id: number | string) => unfollowUser({variables: {id}})
    }
}

export default useFollowUnfollow