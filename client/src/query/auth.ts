import {gql} from '@apollo/client'

export const GET_AUTH_ME = gql`
    query {
        authMe {
            isAuth, id
        }
    } 
`