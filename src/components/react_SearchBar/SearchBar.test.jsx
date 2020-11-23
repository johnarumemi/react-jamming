import React from "react";
import { render, screen } from '@testing-library/react';
import { SearchBar } from "./SearchBar";


describe('SearchBar', ()=>{
   test('renders in document body', ()=>{

      // Setup
      render(<SearchBar />);

      // Exercise
      const searchBar = screen.getByTitle('search-bar');

      // Verify
      expect(searchBar).toBeInTheDocument();
   });
});
