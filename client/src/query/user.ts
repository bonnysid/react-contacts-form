import {gql} from '@apollo/client'

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id, username, status
        }
    }
`

export const GET_USER = gql`
    query getUser($id: ID) {
        getUser(id: $id) {
            id,
            username,
            status,
            followed {
                id, username, status, avatarUrl
            },
            avatarUrl
        }
    }
`
export const FOLLOW = gql`
    mutation Follow($id: ID) {
        follow(id: $id)
    }
`
export const UNFOLLOW = gql`
    mutation Unfollow($id: ID) {
        unfollow(id: $id)
    }
`