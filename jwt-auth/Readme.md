Refresh token:
These are saved in some place while the jwts have an expiration.Valid refresh tokens can be used to re-generate jwts.
We will manually handle expiration of refresh tokens.

There needs to be request made to server which has a refresh token.Server validates the refresh token,and then returns a new idToken.The refresh token is received by client on initial login, which it sends in the token call.

The server has a list of valid refresh tokens for each logged in user that are stored in some db or in some radis cache.

We have kept authorization and other servers separate.


Learning:
403 forbidden error is returned by server when a user does have a token but it is not valid

401 unauthorized is returned by server when a user does not have auth token