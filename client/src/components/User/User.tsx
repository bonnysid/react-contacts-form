import React, {FC} from "react";
import { IUser } from "../../types/types";
import s from './user.module.css'
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import useFollowUnfollow from "../../hooks/useFollowUnfollow";

type UserProps = {
    user: IUser
    isFollowed: boolean
}

const User: FC<UserProps> = ({user, isFollowed}) => {
    const {follow, unfollow} = useFollowUnfollow()

    return (
        <div className={s.container}>
            <Avatar width={50} url={user.avatarUrl}/>
            <NavLink to={`/profile/${user.id}`}>
                <h2 className={s.name}>{user.username}</h2>
            </NavLink>
            <p className={s.status}>{user.status}</p>
            {isFollowed ?
                <button onClick={() => unfollow(user.id)} className={`btn ${s.btn} ${s.unfollow}`}>Unfollow</button> :
                <button onClick={() => follow(user.id)} className={`btn ${s.btn} ${s.follow}`}>Follow</button>
            }
        </div>
    )
}

export default User