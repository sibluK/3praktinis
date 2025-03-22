import { User, UserListProps } from "../types/types"
import UserCard from "./UserCard"
import "../styles/user-list.css"
import { memo } from "react"

function UserList({ users }: UserListProps) {

    console.log("---User List Rendered---")

    return (
        <div className="user-list">
          {users.length > 0 ? (
            users.map((user: User) => (
              <UserCard key={user.id} user={user} />
            ))
          ) : (
            <div>No Users Found</div>
          )}
        </div>
    )
}

export default memo(UserList);