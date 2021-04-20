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