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

            const {getAllByTestId, getByText} = render(<TrackList tracks={[data]} />)

            const trackList = getAllByTestId('Track')

            expect(trackList).toHaveLength(1);
            expect(getByText(data.name).textContent).toMatch(data.name);
        });

        test("N Tracks", ()=>{

            const N = 10;

            const data = {
                    name: "Dummy Track Name",
                    artist: "Dummy Artist Name",
                    albums: "Dummy Artist Album",
            }

            const dataArray = new Array(N).fill(data);
            const {getAllByTestId, getAllByText} = render(<TrackList tracks={dataArray} />)

            const trackList = getAllByTestId('Track')

            expect(trackList).toHaveLength(N);
            expect(getAllByText(data.name)[0].textContent).toMatch(data.name);
        });
    });

});
