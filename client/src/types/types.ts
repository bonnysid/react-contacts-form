export interface IUser {
    id: number
    username: string
    followed: IUser[]
    avatarUrl: string
    status?: string
}

export interface IAuthData {
    id: number
    token: string
    tokenExpiration: number
    username: string
}

export type IDataAllUser = {
    getAllUsers: IUser[]
}
