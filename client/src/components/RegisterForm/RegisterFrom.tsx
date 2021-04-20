import React, {FC} from "react";
import useInput from "../../hooks/useInput";
import {useMutation} from "@apollo/client";
import {CREATE_USER} from "../../query/auth";
import {AuthMe, IUser} from "../../types/types";
import s from './loginForm.module.css'
import { useHistory } from "react-router-dom";

type LoginFormProps = {
    loggedUser?: AuthMe
    setLoggedUser: (user: AuthMe) => void
}

const LoginForm: FC<LoginFormProps> = ({setLoggedUser, loggedUser}) => {
    const usernameInput = useInput()
    const passwordInput = useInput()
    const history = useHistory()
    const [newUser] = useMutation<{createUser: IUser}>(CREATE_USER)

    if(loggedUser) history.push('/profile')

    const register = () => {
        newUser({
            variables: {
                input: {
                    username: usernameInput.value,
                    password: passwordInput.value
                }
            }
        }).then(res => {
            localStorage.removeItem("token")
            history.push(`/login`)
        })
            .catch(e => console.log(JSON.stringify(e.networkError.result.errors[0].message)))
    }

    return (
        <div className={s.block}>
            <h1>Registration</h1>
            <input {...usernameInput} className='input' type="text"/>
            <input {...passwordInput} className='input' type="password"/>
            <button className={'btn'} onClick={register}>Register</button>
        </div>

    )
}

export default LoginForm