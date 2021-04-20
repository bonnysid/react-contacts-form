import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../query/user";
import {IUser} from "../../types/types";
import Avatar from "../Avatar/Avatar";
import s from './profile.module.css'
import Preloader from "../Preloader/Preloader";
import UserList from "../UserList/UserList";

interface RouteParams {
    id: string
}

const Profile: FC = (props) => {
    const [user, setUser] = useState<IUser>()
    const params = useParams<RouteParams>()
    const {data, loading, error} = useQuery(GET_USER, {
        variables: {
            id: params.id
        }
    })

    useEffect(() => {
        if (!loading && data) {
            setUser(data.getUser)
        }
    }, [data, params.id])

    if (loading) return <Preloader/>

    return (
        <>
            <div className={s.container}>
                <Avatar width={200} url={user?.avatarUrl}/>
                <h2>{user?.username}</h2>
                <p>{user?.status}</p>
            </div>
            {user?.followed && <div className={s.container}>
                <h2 className={s.title}>Following</h2>
                <UserList users={user.followed}/>
            </div>}
        </>

    )
}

export default Profile