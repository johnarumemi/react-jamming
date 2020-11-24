
const Spotify = {
    base_endpoint: "https://accounts.spotify.com/authorize",
    getAccessToken: function() {

        console.log(this.base_endpoint)
        if(process.env.REACT_APP_SPOTIFY_USERS_TOKEN){
            return process.env.REACT_APP_SPOTIFY_USERS_TOKEN
        }
    },
}



export { Spotify };
