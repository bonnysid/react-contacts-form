import React, {FC, useEffect, useState} from "react";
import { IUser } from "../../types/types";
import s from './user.module.css'
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import useFollowUnfollow from "../../hooks/useFollowUnfollow";

type UserProps = {
    user: IUser
    authUserFollowed?: IUser[]
    followFlow: number[],
    pushToFollowUnfollowFlow: (id: number) => void
    deleteFromFollowUnfollowFlow: (id: number) => void
}

const User: FC<UserProps> = ({user, authUserFollowed}) => {
    const [isFollowed, setIsFollowed] = useState(false)
    const {follow, unfollow} = useFollowUnfollow()

    useEffect(() => {
        setIsFollowed(authUserFollowed ? authUserFollowed.some(u => u.id === user.id): false)
    }, [authUserFollowed])

    const onFollow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        follow(user.id)
            .then(() => {
                setIsFollowed(true)
            })
            .catch(er => {
                console.log(er)
            })
    }

    const onUnfollow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        unfollow(user.id)
            .then(() => {
                setIsFollowed(false)
            })
            .catch(er => {
                console.log(er)
            })
    }

    return (
        <div className={s.container}>
            <Avatar width={50} url={user?.avatarUrl}/>
            <NavLink to={`/profile/${user.id}`}>
                <h2 className={s.name}>{user.username}</h2>
            </NavLink>
            <p className={s.status}>{user.status}</p>
            {isFollowed ?
                <button onClick={onUnfollow} className={`btn ${s.btn} ${s.unfollow}`}>Unfollow</button> :
                <button onClick={onFollow} className={`btn ${s.btn} ${s.follow}`}>Follow</button>
            }
        </div>
    )
}

export default User