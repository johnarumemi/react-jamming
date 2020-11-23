import React from 'react';
import {render, screen} from '@testing-library/react';
import { Playlist } from "./Playlist";

jest.mock("../react_TrackList/TrackList")

describe('Playlist', () => {
    describe('renders child', () => {

        test('input element', ()=>{
            const { container } = render(<Playlist />);
            const input = container.querySelector('input');
            expect(input).toBeInTheDocument();
        });

        test('TrackList component', ()=>{
           const { getByTestId } = render(<Playlist />);
           const trackListComponent = getByTestId('TrackList');
           expect(trackListComponent).toBeInTheDocument();
           expect(trackListComponent.textContent).toMatch(/Mock\s?TrackList/i);
        });
    });
});
