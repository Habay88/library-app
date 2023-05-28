export const oktaConfig ={
    clientId: '0oa9qjjobtPpwvKKL5d7',
    issuer: 'http://dev-29724778.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes : ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}