import { User, UserListProps } from "../types/types"
import UserCard from "./UserCard"
import "../styles/user-list.css"

export default function UserList({ users, fakeLoading }: UserListProps) {

    console.log("---User List Rendered---")

    return (
        <div className="user-list">
            {fakeLoading ? (
                <div>Searching...</div>
            ) : users.length > 0 ? (
                users.map((user: User) => (
                    <UserCard key={user.id} user={user} />
                ))
            ) : (
                <div>No Users Found</div>
            )}
        </div>
    )
}