import React, {FC, useEffect, useState} from 'react';
import './App.css';
import './nullstyle.css';
import {AuthMe, IAuthData, IDataAllUser, IUser} from "./types/types";
import {useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "./query/user";
import Header from "./components/Header/Header";
import { Route } from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import UserList from "./components/UserList/UserList";
import LoginForm from './components/LoginForm/LoginForm';
import {GET_AUTH_ME} from "./query/auth";
import Preloader from "./components/Preloader/Preloader";
import useUser from "./hooks/useUser";
import useAuth from "./hooks/useAuth";

const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const {fetchAuth} = useAuth()
    const [loggedUser, setLoggedUser] = useState<AuthMe>()
    const {data, loading} = useQuery<IDataAllUser>(GET_ALL_USERS)

    useEffect(() => {
        fetchAuth().then(data => setLoggedUser(data))
    }, [])

    useEffect(() => {
        if(!loading && data) setUsers(data.getAllUsers)
    }, [data])

    if(loading) return <Preloader />

    return (
        <>
            <Header />
            <main className='container'>
                <Route path={'/profile/:id?'} render={() => <Profile authData={loggedUser ? loggedUser : null} />}/>
                <Route path={'/users'} render={() => <UserList users={users}/>} />
                <Route path={'/login'} render={() => <LoginForm setLoggedUser={setLoggedUser} />}/>
            </main>
        </>
    );
}

export default App;
