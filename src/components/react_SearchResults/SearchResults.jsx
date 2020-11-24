import React from 'react';
import {TrackList} from "../react_TrackList/TrackList";
import './SearchResults.scss'


export function SearchResults(props){
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList
                tracks={props.searchResults}
                onClick={props.onAdd}
                isRemoval={false}
            />
        </div>
    );
}
