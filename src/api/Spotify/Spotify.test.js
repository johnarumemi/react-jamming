import { Spotify } from "./Spotify";

const hashCreatorReducer = (str, item, idx, arr) => {
    const base = str + item.join("=");
    if (idx === arr.length-1){
        return base;
    } else {
        return base + '&';
    }
}

describe("Spotify", ()=>{

    test("returns client_id", ()=>{

        process.env.REACT_APP_SPOTIFY_CLIENT_ID = "DUMMY_CLIENT_ID"

        expect(Spotify.clientId).toMatch("DUMMY_CLIENT_ID")
    })

    describe("hash fragment", () => {

        let data = {};
        let hash = '';
        let spy;

        beforeEach(() => {
            // Setup
            data = {
                access_token: "dummy_token",
                key2: "value2",
                key3: "value3"
            }

            // hash Fragment
            hash = Object.entries(data).reduce(hashCreatorReducer, '#');

            // spyOn returns a mock function, hence you can chain other calls after this
            spy = jest.spyOn(Spotify, 'getHashFragment').mockReturnValue(hash);

        })

        afterEach( () => {
            // Teardown
            spy.mockRestore();
        })

        test("is returned by .getHashFragment()", ()=>{
            // Exercise
            Spotify.getHashFragment();

            // Verify
            expect(spy).toHaveBeenCalled()
            expect(spy).toHaveReturnedWith(hash)
        })

        test("is parsed by .parseHash()", ()=>{
            // Exercise: parse Hash
            const matches = Spotify.parseHash()

            // Verify
            expect(matches).toEqual(data)
        })


    })

    describe.skip("access_token", ()=>{

        test("not in hash fragment gives 'error' key", ()=>{

            // Setup
            const data = {
                error: "access_denied",
                state:"123",
            }

            // hash Fragment
            const hash = Object.entries(data).reduce(hashCreatorReducer, '#');

            // spyOn returns a mock function, hence you can chain other calls after this
            const spy = jest.spyOn(Spotify, 'getHashFragment').mockReturnValue(hash);

            // Exercise
            const access_token = Spotify.getAccessToken();

            // Verify
            expect(access_token).toBeUndefined();
        })

        test("returned from hash fragment", ()=>{

            // Setup
            const data = {
                access_token: "dummy_token",
                token_type: "Bearer",
                expires_in: "3600",
                state:"123",
            }

            // hash Fragment
            const hash = Object.entries(data).reduce(hashCreatorReducer, '#');

            // spyOn returns a mock function, hence you can chain other calls after this
            const spy = jest.spyOn(Spotify, 'getHashFragment').mockReturnValue(hash);

            // Exercise
            const access_token = Spotify.getAccessToken();

            // Verify
            expect(access_token).toMatch(data.access_token);

            spy.mockRestore();

        })
    });

    describe('request', ()=>{

    });
})