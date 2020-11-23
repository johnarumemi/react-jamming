import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchResults } from "./SearchResults";


describe('SearcResults', ()=>{

    test('renders in document', ()=>{
        // Setup
        render(<SearchResults />);

        // Exercise
        const searchResults = screen.getByTitle('search-results');

        // Verify
        expect(searchResults).toBeInTheDocument();
    })
})
