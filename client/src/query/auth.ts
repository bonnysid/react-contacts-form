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

export const FOLLOW = gql`
    mutation Follow($id: ID) {
        follow(id: $id)
    }
`

export const UNFOLLOW = gql`
    mutation Follow($id: ID) {
        follow(id: $id)
    }
`