import moment from "moment";
const Spotify = {
    authorization_endpoint: process.env.REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT,
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
        this.expires_at = data['expires_at']

        const expires_in = data['expires_in']

        // Clear access token after a given amount of time
        setTimeout( () => {
            this.hash_params = '';
            this.access_token = '';
            this.expires_at = '';
        }, Number(expires_in)*1000 )
    },

    get isHashParamsAvailable(){
        const hash_params = this.parseHash()
        if (hash_params && hash_params.access_token && hash_params.expires_in){
            this.hash_params = hash_params
            return true
        }

        return false
    },
    getAccessToken: function() {

        if (this.access_token){
            // token available
            return this.access_token;
        }

        // token not available check URL for hash
        if (this.isHashParamsAvailable){

            // Hash in Url and extracted
            this.update_token_data(this.hash_params);

            // wipe access token and URL parameters
            window.history.pushState("Access Token", null, '/');

            return this.access_token;

        } else {
            // redirect user to get access token
            window.location.assign(this.getRequestUrl());

            console.log("redirecting user to get access token");

            setTimeout(() => {
                window.history.replaceState("", null, '/')
            }, 1000)
        }
    },

    async search(searchTerm){
        // GET requests endpoint
        const base_url = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`

        const accessToken = this.getAccessToken();
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }

        try {

            const response = await fetch(base_url, options)

            if (response.ok){

                const jsonResponse = await response.json();

                console.debug(jsonResponse)

                const data = jsonResponse.tracks.items.map( (item) => {

                    return {
                        id: item.id,
                        name: item.name.replace(/\(.*\)/, '').trim(),
                        artist: item.artists[0].name,  //.map(artist => artist.name).join(', '),
                        album: item.album.name,
                        uri: item.uri
                    };
                });

                console.debug(data)

                return data;
            }

            throw new Error('failed to retrieve Spotify search data');

        } catch (e) {
            console.error(e)
        }
    }

}


export { Spotify };
