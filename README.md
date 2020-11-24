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
two to three lines explaining what this does, motivation etc

## Technologies
+ React
+ SCSS

## Features

__To Do:__

## Environment Variables

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
