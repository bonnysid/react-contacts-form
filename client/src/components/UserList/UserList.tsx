import React, {FC} from 'react'
import {IUser} from "../../types/types";
import User from "../User/User";
import s from './userList.module.css'

type UserListProps = {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    const elements = users.map(user => <User user={user} follow={(id) => {}} unfollow={(id => {})} isFollowed={false}/>)

    return (
        <ul className={s.list}>
            {elements}
        </ul>
    )
}

export default UserList