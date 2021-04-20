import {useQuery} from "@apollo/client";
import {GET_AUTH_ME} from "../query/auth";

const useAuth = () => {
    const {refetch} = useQuery(GET_AUTH_ME, {skip: true})

    return {
        fetchAuth: () => refetch().then(res => res.data.authMe)
    }
}

export default useAuth