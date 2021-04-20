import React, {FC} from "react";
import { IUser } from "../../types/types";
import s from './user.module.css'
import Avatar from "../Avatar/Avatar";

type UserProps = {
    user: IUser
}

const User: FC<UserProps> = ({user}) => {
    return (
        <div className={s.container}>
            <Avatar url={user.avatarUrl}/>
            <h2 className={s.name}>{user.username}</h2>
            <p className={s.status}>{user.status}</p>
        </div>
    )
}

export default User