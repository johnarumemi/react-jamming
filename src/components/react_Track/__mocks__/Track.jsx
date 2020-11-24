import React from 'react';


export function Track(props){
    return (
        <div data-testid='Track'>Mock Track
            <div className="Track">
                <div className="Track-information">
                    <h3>{props.name}</h3>
                    <p>{props.artist} | {props.album}</p>
                </div>
                <button className="Track-action">+</button>
            </div>
        </div>
    );
}
