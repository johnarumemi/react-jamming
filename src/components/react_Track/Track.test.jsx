import React from 'react';
import {render, screen} from '@testing-library/react';
import { Track} from "./Track";


describe('Track', () => {
    test('renders in document', () => {
        render(<Track />);
        expect(screen.getByTitle('track')).toBeInTheDocument();
    });
});
