import React, {FC, useEffect} from "react";
import useInput from "../../hooks/useInput";
import {useQuery} from "@apollo/client";
import {LOGIN} from "../../query/auth";
import {AuthMe, IAuthData, IUser} from "../../types/types";
import s from './loginForm.module.css'
import { useHistory } from "react-router-dom";

type LoginFormProps = {
    setLoggedUser: (user: AuthMe) => void
}

const LoginForm: FC<LoginFormProps> = ({setLoggedUser}) => {
    const usernameInput = useInput()
    const passwordInput = useInput()
    const history = useHistory()
    const {refetch} = useQuery<{login: IAuthData}>(LOGIN, {
        skip: true,
        variables: {
            username: usernameInput.value,
            password: passwordInput.value
        }
    })

    const login = () => {
        refetch({
            username: usernameInput.value,
            password: passwordInput.value
        }).then(res => {
            localStorage.setItem("token", res.data.login.token)
            setLoggedUser({
                id: res.data.login.id,
                isAuth: true
            })
            history.push(`/profile/${res.data.login.id}`)
        })
            .catch(e => console.log(JSON.stringify(e.networkError.result.errors[0].message)))
    }

    return (
        <div className={s.block}>
            <input {...usernameInput} type="text"/>
            <input {...passwordInput} type="password"/>
            <button className={'btn'} onClick={login}>Login</button>
        </div>

    )
}

export default LoginForm