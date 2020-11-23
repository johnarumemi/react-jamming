import React from 'react';
import {render, screen} from '@testing-library/react';
import { Playlist } from "./Playlist";

describe('Playlist', () => {
    test('renders in document', () => {
        render(<Playlist />);
        expect(screen.getByTitle('playlist')).toBeInTheDocument();
    });
});
