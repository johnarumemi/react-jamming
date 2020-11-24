import React, { useState } from 'react';
import './Track.scss'

export function Track(props){

    const addTrack = props.onAdd

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.name}</h3>
                <p>{props.artist} | {props.album }</p>
            </div>
            <button
                className="Track-action"
                onClick={addTrack}
            >
                {props.isRemoval? '-' : '+'}
            </button>
        </div>
    );
}
