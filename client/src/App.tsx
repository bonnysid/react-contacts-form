import React, {FC, useEffect, useState} from 'react';
import './App.css';
import './nullstyle.css';
import {IDataAllUser, IUser} from "./types/types";
import {useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "./query/user";
import Header from "./components/Header/Header";

const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const {data, loading, error} = useQuery<IDataAllUser>(GET_ALL_USERS)

    useEffect(() => {
        if(!loading && data) {
            setUsers(data.getAllUsers)
        }
    }, [data])

    return (
        <>
            <Header />
            {users.map(user => (
                <div key={user.id}>
                    <div>User: {user.username}</div>
                    <div>ID: {user.id}</div>
                    <div>Status {user.status}</div>
                </div>
            ))}
        </>
    );
}

export default App;
