import {gql} from '@apollo/client'

export const GET_AUTH_ME = gql`
    query {
        authMe {
            isAuth, id
        }
    } 
`

export const LOGIN = gql`
    query login($username: String!, $password: String!){
        login(username: $username, password: $password) {
            id, username, token, tokenExpiration
        }
    }
`

export const CREATE_USER = gql`
    mutation CreteUser($input: UserInput){
        createUser(input: $input) {
            id, username, token, tokenExpiration
        }
    }
`