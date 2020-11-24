import React from 'react';
import {TrackList} from "../react_TrackList/TrackList";
import './Playlist.scss';



export function Playlist(props){

    const handleNameChange = (event) => {
        event.preventDefault()
        props.onNameChange(event.target.value)
    }
    return (
        <div className="Playlist">
            <input onChange={handleNameChange} value={props.playlistName} />
            {/* -- Add a TrackList component -- */}
            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onClick={props.onRemove}
            />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );

}
