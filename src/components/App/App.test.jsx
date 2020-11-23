import React from 'react';
import { render, screen } from '@testing-library/react'
import { App } from "./App";

describe('App', () => {

    test('renders in document body', ()=>{

        // Setup
        render(<App />);

        // Exercise
        const app = screen.getByTitle('app');

        // Verify
        expect(app).toBeInTheDocument();
    });
});
