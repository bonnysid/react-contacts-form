import React, {FC, useEffect, useState} from "react";
import {Redirect, useHistory, useParams} from "react-router-dom";
import {AuthMe, IUser} from "../../types/types";
import Avatar from "../Avatar/Avatar";
import s from './profile.module.css'
import Preloader from "../Preloader/Preloader";
import UserList from "../UserList/UserList";
import useUser from "../../hooks/useUser";
import useFollowUnfollow from "../../hooks/useFollowUnfollow";

interface RouteParams {
    id: string
}

interface ProfileProps {
    authUser?: IUser
}

const Profile: FC<ProfileProps> = ({authUser}) => {
    const [profile, setProfile] = useState<IUser>()
    const params = useParams<RouteParams>()
    const history = useHistory()
    const {fetchUser, loading} = useUser()

    useEffect(() => {
        const id = params.id || (authUser && authUser.id)
        if(!id) history.push('/login')
        else fetchUser(id).then(user => setProfile(user))
    }, [params.id])

    if (loading) return <Preloader/>

    return (
        <>
            <div className={s.container}>
                <Avatar width={200} url={profile?.avatarUrl}/>
                <h2>{profile?.username}</h2>
                <p>{profile?.status}</p>
                {<button onClick={() => {}} className={'btn ' + s.deleteBtn}>Delete profile</button>}
            </div>
            {profile?.followed && <div className={s.container}>
                <h2 className={s.title}>Following</h2>
                <UserList authUser={authUser} users={profile.followed}/>
            </div>}
        </>

    )
}

export default Profile