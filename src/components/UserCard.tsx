import { UserCardProps } from "../types/types";
import "../styles/user-card.css"
import { memo } from "react";

function UserCard({ user }: UserCardProps) {

    console.log("---User Card Rendered---")

    return (
        <div className="user-card">
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.city}</span>
        </div>
    )
}

export default memo(UserCard);