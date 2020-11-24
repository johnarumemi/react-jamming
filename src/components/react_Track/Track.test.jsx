import React from 'react';
import {render, screen} from '@testing-library/react';
import { Track} from "./Track";

const dataRemoval = {
    name: "Dummy Track Name",
    artist: "Dummy Artist Name",
    albums: "Dummy Artist Album",
    isRemoval: true
}

const dataAdd = Object.assign({}, dataRemoval, {isRemoval: false});

describe("Track", ()=>{

    describe("renders", ()=>{

        test("its track name", ()=>{
            const {getByRole} = render(<Track {...dataRemoval} />);
            const heading = getByRole('heading');
            expect(heading.textContent).toMatch(dataRemoval.name)
        })

        test("its artist | album name", ()=>{
            const {container} = render(<Track {...dataRemoval} />);
            const paragraph = container.querySelector('p');
            expect(paragraph.textContent).toMatch(dataRemoval.artist)
        })

        test("its button with removal sign", ()=>{

            const {getByRole} = render(<Track {...dataRemoval} />);
            const button = getByRole('button');
            expect(button.textContent).toMatch('-');
            expect(button.textContent).not.toMatch('+');
        })

        test("its button with addition sign", ()=>{

            const {getByRole} = render(<Track {...dataAdd} />);
            const button = getByRole('button');
            expect(button.textContent).toMatch('+');
            expect(button.textContent).not.toMatch('-');
        })


    })
})