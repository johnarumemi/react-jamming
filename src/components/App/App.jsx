import React from "react";
import './App.scss';
import { SearchBar } from "../react_SearchBar/SearchBar";
import { SearchResults } from "../react_SearchResults/SearchResults";
import { Playlist } from "../react_Playlist/Playlist";

export function App(){
    return (
        <div data-testid='app'>
            <h1 aria-level="1">
                Ja<span className="highlight">mm</span>ing
            </h1>

            <div className="App">
                {/*<!-- Add a SearchBar component -->*/}
                <SearchBar />
                <div className="App-playlist">
                    {/*<!-- Add a SearchResults component -->*/}
                    <SearchResults />
                    {/*<!-- Add a Playlist component -->*/}
                    <Playlist />
                </div>
            </div>
        </div>);
}

