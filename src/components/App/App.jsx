import React, { useState, useEffect } from "react";
import { SearchBar } from "../react_SearchBar/SearchBar";
import { SearchResults } from "../react_SearchResults/SearchResults";
import { Playlist } from "../react_Playlist/Playlist";

import './App.scss';
import {Spotify} from "../../api/Spotify/Spotify";
//
// const fakeSearchResults = [
//     {
//         id: 1,
//         name: "Tiny Dancer",
//         artist: "Elton John",
//         album: "Madman Across The Water"
//     },
//     {
//         id: 2,
//         name: "Tiny Dancer",
//         artist: "Tim McGraw",
//         album: "Love Story"
//     }
// ]

const fakePlaylist = [
    {
        id: 3,
        name: "Tiny Dancer",
        artist: "Elton John",
        album: "Madman Across The Water"
    },
    {
        id: 4,
        name: "Tiny Dancer",
        artist: "Tim McGraw",
        album: "Love Story"
    }
]

export function App(){
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const addTrack = (track) => {

        const add = playlistTracks.every(playlistTrack => playlistTrack.id !== track.id)
        if (add){
            setPlaylistTracks(prev => [...prev, track]);
        };
    };

    const removeTrack = (track) => {
        const newPlaylist = playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
        setPlaylistTracks(newPlaylist)
    };

    const updatePlaylistName = name => setPlaylistName(name)

    const savePlaylist = () => {
        const trackURIs = playlistTracks.map(track => track.uri)
        Spotify.savePlaylist(playlistName, trackURIs)
            .then(()=>{
                setPlaylistName('New Playlist');
                setPlaylistTracks([]);
            });
    }

    useEffect(()=>{
        const loadAccessToken = ()=> {Spotify.getAccessToken()}
        window.addEventListener('load', loadAccessToken)

        return () => {
            window.removeEventListener('load', loadAccessToken)
        }
    }, [])

    const search = (searchTerm) => {
        //Spotify.clearAccessToken();
        Spotify.search(searchTerm).then( data =>{
            setSearchResults(data)
        });
    }

    return (
        <div data-testid='app'>
            <h1 aria-level="1">
                Ja<span className="highlight">mm</span>ing
            </h1>

            <div className="App">
                {/*<!-- SearchBar component -->*/}
                <SearchBar onSearch={search}/>
                <div className="App-playlist">
                    {/*<!-- SearchResults component -->*/}
                    <SearchResults
                        searchResults={searchResults}
                        onAdd={addTrack}
                    />
                    {/*<!-- Playlist component -->*/}
                    <Playlist
                        playlistName={playlistName}
                        onNameChange={updatePlaylistName}
                        playlistTracks={playlistTracks}
                        onRemove={removeTrack}
                        onSave={savePlaylist}
                    />
                </div>
            </div>

        </div>);
}
