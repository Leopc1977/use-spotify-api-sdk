function getAccessToken(authData) {
    const token = {
        access_token: authData.access_token,
        token_type: authData.token_type,
        expires_in: authData.expires_in,
        refresh_token: authData.refresh_token,
    }

    return token;
}

export default getAccessToken;
