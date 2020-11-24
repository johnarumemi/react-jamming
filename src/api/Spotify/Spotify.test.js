

describe("Spotify", ()=>{

    describe("request has", ()=>{

        test("client_id", ()=>{

            const pattern = new RegExp(
                /\?client_id=[a-zA-Z0-9]*&redirect_url/
            )

            expect(Spotify.getClientId()).toMatch(pattern)
        })

    })

})