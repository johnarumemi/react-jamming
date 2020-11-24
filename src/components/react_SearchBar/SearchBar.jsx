import React, { useState} from "react";
import './SearchBar.scss'


export function SearchBar(props){
    const [searchTerm, setSearchTerm] = useState('')

    const handleTermChange = ({target}) => {

        console.log(target.value)

        setSearchTerm(target.value)
    }

    const handleSearch = () => {
        props.onSearch(searchTerm)
    }
    return (
        <div className="SearchBar">
            <input type='text'
                   placeholder="Enter A Song, Album, or Artist"
                   onChange={handleTermChange}
                   value={searchTerm}
            />
            <button
                className="SearchButton"
                onClick={handleSearch}
            >
                SEARCH
            </button>
        </div>
    );
}
