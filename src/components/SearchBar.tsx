import { ChangeEvent } from "react"
import { SearchBarProps } from "../types/types"
import "../styles/search-bar.css"

export default function SearchBar({ query, setQuery }: SearchBarProps) {

    function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }
    
    function handleClearQuery() {
        setQuery("");
    }

    console.log("---Search Bar Rendered---")

    return (
        <div className="search-bar-wrapper">
            <input
                className="search-bar"
                value={query}
                onChange={handleSearchInput}
                type="text"
                placeholder="Search"
            />
            {query.length > 0 && (
                <svg className="clear-input" onClick={handleClearQuery} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M9 9L15 15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 9L9 15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                </svg>
            )}
        </div>


    )
}