import React from 'react';


export function Track({name, artist, album}){
    return (
        <div data-testid='Track'>Mock Track
            <div className="Track">
                <div className="Track-information">
                    <h3>{name}</h3>
                    <p>{artist || album}</p>
                </div>
                <button className="Track-action">+</button>
            </div>
        </div>
    );
}
