import React from 'react';
import {TrackList} from "../react_TrackList/TrackList";
import './Playlist.scss';



export function Playlist(){

    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} />
            {/* -- Add a TrackList component -- */}
            <TrackList />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );

}
