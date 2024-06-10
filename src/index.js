import { useEffect, useState } from 'react'
import { SpotifyApi } from '@spotify/web-api-ts-sdk'
import getAccessToken from './utils/getAccessToken';

function useSpotifyApi(authData) {
    const { access_token, client_id, client_secret } = authData;

    const [sdk, setSdk] = useState(null);

    useEffect(() => {
        let sdk = null

        if (access_token && client_id)
            sdk = SpotifyApi.withAccessToken(client_id,  getAccessToken(authData));
        else if (client_id && client_secret)
            sdk = SpotifyApi.withClientCredentials(client_id, client_secret);
        else 
            console.error('No credentials provided to useSpotifyApi');
        setSdk(() => sdk);

    }, [client_id, client_secret]);

    return [sdk];
}

export default useSpotifyApi;
