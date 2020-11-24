import React, { useState } from "react";
import { SearchBar } from "../react_SearchBar/SearchBar";
import { SearchResults } from "../react_SearchResults/SearchResults";
import { Playlist } from "../react_Playlist/Playlist";

import './App.scss';

const fakeTrackList = [
    {
        name: "Tiny Dancer",
        artist: "Elton John",
        album: "Madman Across The Water"
    },
    {
        name: "Tiny Dancer",
        artist: "Tim McGraw",
        album: "Love Story"
    }
]

export function App(){
    const [searchResults, setSearchResults] = useState(fakeTrackList);
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const [playlistTracks, setPlaylistTracks] = useState(fakeTrackList);

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
                    <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
                </div>
            </div>
        </div>);
}

