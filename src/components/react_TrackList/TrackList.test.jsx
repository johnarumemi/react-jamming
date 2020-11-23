import React from 'react';
import {render, screen} from '@testing-library/react';
import { TrackList } from "./TrackList";

jest.mock('../react_Track/Track')

describe('TrackList', () => {
    describe('renders child', () => {

        test("input element", ()=>{
        });
        render(<TrackList />);
        expect(screen.getByTitle('track-list')).toBeInTheDocument();
    });
});
