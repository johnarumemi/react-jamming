/* ##### MOCK ##### */
import React from "react";

/*
When mocking a component, ensure its signature exactly matches that of its
implementations
 */
export function SearchBar(){

    return (<div data-testid='SearchBar'>Mocked Search Bar</div>);
}
