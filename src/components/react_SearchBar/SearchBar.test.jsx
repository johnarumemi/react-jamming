import React from "react";
import { render, screen } from '@testing-library/react';
import { SearchBar } from "./SearchBar";


describe('SearchBar', ()=>{

   describe("renders", ()=>{
      test("User input text field", ()=>{
         // Setup
         render(<SearchBar />);

         // Exercise
         const textInput = screen.getByPlaceholderText(/Enter A Song/i);

         // Verify
         expect(textInput).toBeInTheDocument();
      });

      test('Search Button', ()=>{

         // Setup
         render(<SearchBar />);

         // Exercise
         const searchButton = screen.getByRole('button')

         // Verify
         expect(searchButton).toBeInTheDocument();
      });
   });

});
