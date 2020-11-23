import React from 'react';
import {render, screen} from '@testing-library/react';
import { TrackList } from "./TrackList";

describe('TrackList', () => {
    test('renders in document', () => {
        render(<TrackList />);
        expect(screen.getByTitle('track-list')).toBeInTheDocument();
    });
});
