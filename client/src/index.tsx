import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import {BrowserRouter} from "react-router-dom";

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('app-wrapper')
);
