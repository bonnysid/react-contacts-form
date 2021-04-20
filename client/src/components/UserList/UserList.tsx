import React, {FC, useState} from 'react'
import {IUser} from "../../types/types";
import User from "../User/User";
import s from './userList.module.css'

type UserListProps = {
    users: IUser[],
    authUser: IUser | undefined
}

const UserList: FC<UserListProps> = ({users = [], authUser}) => {
    const [followFlow, setFollowFlow] = useState<number[]>([])

    const pushToFollowUnfollowFlow = (id: number) => {
        setFollowFlow(prevState => [...prevState, id])
    }

    const deleteFromFollowUnfollowFlow = (id: number) => {
        setFollowFlow(prevState => prevState.filter(num => num !== id))
    }

    const checkFollow = (user: IUser) => {
        return authUser ? authUser.followed.some(u => u.id === user.id) : false
    }

    const elements = users.map(user => <User
        deleteFromFollowUnfollowFlow={deleteFromFollowUnfollowFlow}
        pushToFollowUnfollowFlow={pushToFollowUnfollowFlow}
        followFlow={followFlow}
        key={user.id}
        user={user}
        authUserFollowed={authUser?.followed}/>)

    return (
        <ul className={s.list}>
            {elements}
        </ul>
    )
}

export default UserList