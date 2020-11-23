import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchResults } from "./SearchResults";


describe('SearchResults', ()=>{
    describe('render child', ()=>{
        test("header element", ()=>{
            // Setup
            render(<SearchResults />);

            // Exercise
            const heading = screen.getByRole('heading');

            // Verify
            expect(heading).toBeInTheDocument();
            expect(heading).toMatchInlineSnapshot();
        });

        test("TrackList component", ()=>{
            // Setup
            render(<SearchResults />);

            // Exercise
            const trackListComponent = screen.getByTestId('track-list');

            // Verify
            expect(trackListComponent).toBeInTheDocument();
        });
    });
});
