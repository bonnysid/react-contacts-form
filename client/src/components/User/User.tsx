import React, {FC} from "react";
import { IUser } from "../../types/types";
import s from './user.module.css'
import Avatar from "../Avatar/Avatar";

type UserProps = {
    user: IUser
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFollowed: boolean
}

const User: FC<UserProps> = ({user, follow, unfollow, isFollowed}) => {
    return (
        <div className={s.container}>
            <Avatar width={50} url={user.avatarUrl}/>
            <h2 className={s.name}>{user.username}</h2>
            <p className={s.status}>{user.status}</p>
            {isFollowed ?
                <button className={`btn ${s.btn} ${s.unfollow}`}>Unfollow</button> :
                <button className={`btn ${s.btn} ${s.follow}`}>Follow</button>
            }
        </div>
    )
}

export default User