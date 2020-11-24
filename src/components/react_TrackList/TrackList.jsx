import React from 'react';
import './TrackList.scss'
import {Track} from "../react_Track/Track";

export function TrackList({tracks = []}){

    const getTracks = () => tracks.map((trackProps, i) => (
        <Track key={`track-${i}`} {...trackProps}/>
        ));

    return (
        <div className="TrackList">
            {getTracks()}
        </div>
    );
}
