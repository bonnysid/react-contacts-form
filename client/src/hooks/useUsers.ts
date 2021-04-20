import {useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "../query/user";

const useUsers = () => {
    const {refetch, data, loading, error} = useQuery(GET_ALL_USERS)

    return {
        fetchUser: refetch,
        loading,
        data
    }
}