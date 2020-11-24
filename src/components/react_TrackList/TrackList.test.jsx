import React from 'react';
import { render, screen } from '@testing-library/react';
import { TrackList } from "./TrackList";

jest.mock('../react_Track/Track')

describe('TrackList', () => {

    describe("renders", ()=>{

        test("0 Tracks", ()=>{

            const { container } = render(<TrackList />)

            expect(container).toBeInTheDocument();
        });

        test("1 Track", ()=>{

            const data = {
                    name: "Dummy Track Name",
                    artist: "Dummy Artist Name",
                    albums: "Dummy Artist Album",
                }

            const {queryAllByTestId, queryByText} = render(<TrackList tracks={[data]} />)

            const trackList = queryAllByTestId('Track')

            expect(trackList).toHaveLength(1);
            expect(queryByText(data.name).textContent).toMatch(data.name);
        });

        test("N Tracks", ()=>{

            const N = 10;

            const data = {
                    name: "Dummy Track Name",
                    artist: "Dummy Artist Name",
                    albums: "Dummy Artist Album",
            }

            const dataArray = new Array(N).fill(data);
            const {queryAllByTestId, queryAllByText} = render(<TrackList tracks={dataArray} />)

            const trackList = queryAllByTestId('Track')

            expect(trackList).toHaveLength(N);
            expect(queryAllByText(data.name)[0].textContent).toMatch(data.name);
        });
    });

});
