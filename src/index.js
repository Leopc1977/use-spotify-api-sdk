import { useEffect, useState } from 'react'
import { SpotifyApi } from '@spotify/web-api-ts-sdk'

function useSpotifyApi(clientId, clientSecret) {
    const [sdk, setSdk] = useState(null);

    useEffect(() => {
        const sdk = SpotifyApi.withClientCredentials(clientId, clientSecret);

        setSdk(() => sdk);
    }, [clientId, clientSecret]);

    return [sdk];
}

export default useSpotifyApi;
