import React from 'react';
import './TrackList.scss'
import {Track} from "../react_Track/Track";

export function TrackList(props){

    const getTracks = () => props.tracks.map( track => (
        <Track
            key={track.id}
            name={track.name}
            artist={track.artist}
            album={track.album}
            isRemoval={props.isRemoval}
        />
        ));

    return (
        <div className="TrackList">
            {getTracks()}
        </div>
    );
}

TrackList.defaultProps = {
    tracks: []
}