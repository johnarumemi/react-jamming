const Spotify = {
    base_endpoint: process.env.REACT_APP_SPOTIFY_ENDPOINT,
    redirect_url: process.env.REACT_APP_SPOTIFY_REDIRECT_URL,
    scope: '',
    _users_access_token: '',

    get access_token(){ return this._users_access_token; },
    set access_token(value){ this._users_access_token = value; },

    get clientId() { return process.env.REACT_APP_SPOTIFY_CLIENT_ID; },

    getHashFragment: function(){
        // this can be mocked
        return window.location.hash
    },

    parseHash: function(){

        // use regex to extract query params and query values from hash fragment in windows URL
        const pattern = new RegExp(/(?<=[#&])(?<key>[\w]*)=(?<value>[\w.]*)[&\s]?/g)

        const hashFragment = this.getHashFragment();

        if (!hashFragment){
            console.debug(`
            hash fragment is empty
            ------
            ${hashFragment}
            -----
            Could not parse harsh fragment
            `)
            return null;
        }

        const matchArray = Array.from(hashFragment.matchAll(pattern))

        // reduce array of objects with query params and query values into a single Object
        const reducer = (obj, match) => {
            obj[match.groups.key] = match.groups.value;
            return obj;
        }

        return matchArray.reduce(reducer, {});

    },

    getAccessToken: function() {

        if (this.access_token){
            // token available
            return this.access_token;
        } else {
            // token not available, parse hashFragment and return access_token
            const hash_params = this.parseHash()

            this.access_token = hash_params["access_token"];

            return this.access_token
        }
    },

}


export { Spotify };
