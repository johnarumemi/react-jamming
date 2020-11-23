import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { App } from "./App";

// jest.mock is hoisted to the top of the file, so you can't use anything in the first or
// second parameters of jest.mock other than string literals or closures
//note that you have to enter the path relative to the test file.
jest.mock('../react_SearchBar/SearchBar');
jest.mock("../react_SearchResults/SearchResults");
jest.mock("../react_Playlist/Playlist");

describe('App', () => {

    test('renders self in document body', ()=>{

        // Setup
        // container represents a DOM node with all implied functionality
        const { container } = render(<App />);

        // Exercise
        const app = screen.getByTestId('app');

        // Verify
        expect(app).toBeInTheDocument();
    });

    describe("renders child", ()=>{

        test("header element", ()=>{
            const { getByRole } = render(<App />);

            const element = getByRole('heading')

            expect(element).toBeInTheDocument();

            expect(element.textContent).toMatch(/Jamming/i);

        });

        test("SearchBar component", ()=>{
            const { getByTestId } = render(<App />);
            // Exercise
            const element = getByTestId('SearchBar')

            // Verify
            expect(element).toBeInTheDocument()
        });

        test("SearchResults component", ()=>{
            const { getByTestId } = render(<App />);
            // Exercise
            const element = getByTestId('SearchResults')

            // Verify
            expect(element).toBeInTheDocument()
        });

        test("Playlist component", ()=>{
            const { getByTestId } = render(<App />);
            // Exercise
            const element = getByTestId('Playlist')

            // Verify
            expect(element).toBeInTheDocument()
        });
    });


});
