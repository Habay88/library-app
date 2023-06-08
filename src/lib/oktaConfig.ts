export const oktaConfig ={
    clientId: `0oa9vx2r0jROVhpo25d7`,
    issuer: `https://dev-13033890.okta.com/oauth2/default`,
    redirectUri: 'http://localhost:3000/login/callback',
    scopes : ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}
