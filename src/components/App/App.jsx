import React, { useState } from "react";
import { SearchBar } from "../react_SearchBar/SearchBar";
import { SearchResults } from "../react_SearchResults/SearchResults";
import { Playlist } from "../react_Playlist/Playlist";

import './App.scss';

export function App(){
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div data-testid='app'>
            <h1 aria-level="1">
                Ja<span className="highlight">mm</span>ing
            </h1>

            <div className="App">
                {/*<!-- SearchBar component -->*/}
                <SearchBar />
                <div className="App-playlist">
                    {/*<!-- SearchResults component -->*/}
                    <SearchResults searchResults={searchResults} />
                    {/*<!-- Playlist component -->*/}
                    <Playlist />
                </div>
            </div>
        </div>);
}

