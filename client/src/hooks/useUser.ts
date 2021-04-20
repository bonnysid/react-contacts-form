
import {useQuery} from "@apollo/client";
import {GET_USER} from "../query/user";

const useUser = () => {
    const {data, loading, refetch} = useQuery(GET_USER, {skip: true})

    return {
        fetchUser: (id: number | string) => refetch({id}).then(res => res.data.getUser),
        loading
    }
}

export default useUser