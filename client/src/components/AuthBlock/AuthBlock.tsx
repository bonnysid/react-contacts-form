import React, {FC, useEffect, useState} from 'react'
import {useQuery} from "@apollo/client";
import {GET_AUTH_ME} from "../../query/auth";
import s from './authBlock.module.css'
import Preloader from "../Preloader/Preloader";
import {NavLink, useHistory} from 'react-router-dom';
import Avatar from "../Avatar/Avatar";

const AuthBlock: FC = (props) => {
    const [link, setLink] = useState('/login')
    const history = useHistory()
    const {data, loading, error} = useQuery(GET_AUTH_ME)

    useEffect(() => {
        if(data && data.authMe.isAuth) setLink('/profile')
        else setLink('/login')
    }, [data])

    if(loading) return <Preloader />

    return (
        <NavLink to={link} className={s.container}>
            {data.authMe.isAuth ?
                <>
                    <Avatar width={50}/>
                    <p className={s.login}>{data.authMe.username}</p>
                    <button onClick={() => {
                        localStorage.removeItem('token')
                        setLink('/login')
                        history.push('/login')
                    }
                    } className={`btn ${s.logout}`}>Logout</button>
                </>
                :
                <button className={`btn`}>Login</button>
            }
        </NavLink>
    );
}

export default AuthBlock