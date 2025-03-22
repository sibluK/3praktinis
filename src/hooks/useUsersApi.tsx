import { useEffect, useState } from "react";
import { User } from "../types/types"
import axios from "axios"

export default function useUsersApi() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const USERS_URL = "http://localhost:3000/users"

    useEffect(() => {
        axios.get(USERS_URL)
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, [])

    return { users, loading, error }
}