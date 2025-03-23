import { ChangeEvent, memo, useCallback, useRef } from "react"
import { SearchBarProps } from "../types/types"
import "../styles/search-bar.css"

function SearchBar({ setQuery }: SearchBarProps) {

    const inputRef = useRef<HTMLInputElement | null>(null);

    // useCallback nesumažina perkrovimų
    const handleSearchInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }, [setQuery]);

    const handleClearQuery = useCallback(() => {
        setQuery("");
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }, [setQuery]);

    console.log("---Search Bar Rendered---")

    return (
        <div className="search-bar-wrapper">
            <input
                className="search-bar"
                onChange={handleSearchInput}
                ref={inputRef}
                type="text"
                placeholder="Search"
            />
            {inputRef.current && inputRef.current.value.length > 0 && (
                <svg className="clear-input" onClick={handleClearQuery} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M9 9L15 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M15 9L9 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                </svg>
            )}
        </div>
    )
}

export default memo(SearchBar);