# Jamming
Website that allows users to search Spotify library, create custom playlist, then save it to their Spotify account.

## Table Of Contents
+ [Introduction](#introduction)
+ [Technologies](#technologies)
+ [Features](#features)
+ [Environment Variables](#environment-variables)
+ [Status](#status)
+ [Notes For Myself](#notes)


## Introduction
This is an initial project as creating an App that interacts with the Spotify API
to search for tracks, add them to a customer playlist and save the playlist to the
users account. Future projects will build on this to stream music directly from Spotify
and other sources.

<http://johnarumemi.github.io/react-jamming>

## Technologies
+ React
+ AJAX via `fetch()`;
+ SCSS
+ Jest + React Testing Library

## Features

__To Do:__

## Environment Variables

__.env__
```.dotenv
REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT=https://accounts.spotify.com/authorize
REACT_APP_SPOTIFY_SCOPE='playlist-modify-public'
```

__.env.production__

```.dotenv
REACT_APP_SPOTIFY_REDIRECT_URL=http://johnarumemi.github.io/react-jamming
REACT_APP_PUSHSTATE_URL=/react-jamming
```

__.env.development__
```.dotenv
PORT=3005
REACT_APP_SPOTIFY_REDIRECT_URL=http://localhost:$PORT/
REACT_APP_PUSHSTATE_URL=/
```

## Status
Progress: __WIP__

# Notes
1) Module Mocking

When mocking a component, ensure its signature exactly matches that of its
implementations. If the implementation is a named export, mock must also be
a named export. You can try using `...rest` to simply accept anything passed
 in and just ignore it in main body of the mocked implementation.
 
2) Jest Hoisting

 jest.mock is hoisted to the top of the file, so you can't use anything in the first or
 second parameters of jest.mock other than string literals or closures
 note that you have to enter the path relative to the test file.

3) Using data-testid

This is actually great to use in mocks
```jsx
// src/components/react_SearchBar/__mocks__/SearchBar.jsx
export function SearchBar(){

    return (<div data-testid='SearchBar'>Mocked Search Bar</div>);
}
```
Just remember to set the value of the __data-testid__ to be the component name and when testing use
`.getByTestId('SearchBar')` to retrieve it. Also best to simply use a `<div>` for this.


Creating a Playlist
1) use below endpoint to create a playlist, note that it will be empty until we add tracks to it in another requests.

```
https://developer.spotify.com/documentation/web-api/reference/playlists/create-playlist/
```