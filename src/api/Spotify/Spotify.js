import moment from "moment";
const Spotify = {
    base_endpoint: process.env.REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT,
    redirect_url: process.env.REACT_APP_SPOTIFY_REDIRECT_URL,
    scope: process.env.REACT_APP_SPOTIFY_SCOPE,
    _users_access_token: '',
    hash_params: {},
    expires_at: '',

    clearAccessToken(){
      this.access_token = '';
      this.expires_at = '';
      this.hash_params = {};
    },
    getRequestUrl(){
        return `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&scope=${this.scope}&redirect_uri=${this.redirect_url}`
            .replace(/[\s\n]/, '');
    },
    get access_token(){ return this._users_access_token; },
    set access_token(value){ this._users_access_token = value; },

    get clientId() { return process.env.REACT_APP_SPOTIFY_CLIENT_ID; },

    getHashFragment: function(){
        // this can be mocked
        return window.location.hash
    },

    parseHash: function(){

        // use regex to extract query params and query values from hash fragment in windows URL
        const pattern = new RegExp(/(?<=[#&])(?<key>[^=&\s]*)=(?<value>[^=&\s]*)[&\s]?/g)

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

            Object.defineProperty(obj, match.groups.key, {
                value: match.groups.value,
                writable: false,
                enumerable: true,
                configurable: true
            })

            if (match.groups.key === 'expires_in'){
                // format
                const format = moment.HTML5_FMT.DATETIME_LOCAL_SECONDS;
                const expires_in = Number(match.groups.value);
                const expires_at = moment().add(expires_in, 'seconds').format(format);

                Object.defineProperty(obj, 'expires_at', {
                    value: expires_at,
                    writable: false,
                    enumerable: true,
                    configurable: true
                })

            }
            return obj;
        }

        return matchArray.reduce(reducer, {});

    },

    update_token_data(data){
        this.hash_params = data;
        this.access_token = data["access_token"];
        this.expires_at = data

        const expires_in = data['expires_in']

        // Clear access token after a given amount of time
        setTimeout( () => {
            this.access_token = '';
            this.expires_at = '';
        }, Number(expires_in)*1000 )
    },

    getAccessToken: function() {

        if (this.access_token){
            // token available
            console.log("token available")
            return this.access_token;
        } else {
            // token not available, parse hashFragment and return access_token
            const hash_params = this.parseHash()

            if (hash_params && hash_params.hasOwnProperty('access_token')){
                // access_token and expire time available within URL

                console.log("hash params found")
                this.update_token_data(hash_params)

                // wipe access token and URL parameters
                window.history.pushState("Access Token", null, '/');

                return this.access_token
            } else {
                // redirect user to get access token
                window.location.replace(this.getRequestUrl());

                console.log("redirecting user to get access token")

            }
        }
    },

}


export { Spotify };
