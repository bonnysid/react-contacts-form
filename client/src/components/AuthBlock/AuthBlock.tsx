import React, {FC} from 'react'
import {useQuery} from "@apollo/client";
import {GET_AUTH_ME} from "../../query/auth";
import s from './authBlock.module.css'
import Preloader from "../Preloader/Preloader";
import { NavLink } from 'react-router-dom';

const AuthBlock: FC = (props) => {
    const {data, loading, error} = useQuery(GET_AUTH_ME)

    if(loading) return <Preloader />

    return (
        <NavLink to={'/profile'} className={s.container}>
            {data.isAuth ?
                <>
                    <AvatarLower />
                    <p className={s.login}>{data.username}</p>
                </>
                :
                <button className={`btn`}>Login</button>
            }
        </NavLink>
    );
}