require('dotenv').config(); 
const router = require('express').Router();
const path = require('path')
const bcrypt= require('bcrypt-node');
const request = require('request');
const Spotify = require('spotify-web-api-node')
const spotifyAPI = new Spotify({
	clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
});
let stateKey = 'spotify_auth_state';

router.post('/reverse', (req,res) => {

	let str = req.body.str;
	
	console.log("THE STR: ", str)

	request.post({url: "http://fedora-nyc1.laulabs.net:3000/reverse",str},
		function(error,response,body) {
			console.log("THE BODY IS: ",body);
			if (!error && response.statusCode === 200) {            
        	res.send(body);
      		} else {
        	res.json(error);
    	  	}
	});
});

router.get('https://accounts.spotify.com/authorize', (req, res) => {
  	const state = generateRandomString(16);
  	res.cookie(stateKey, state);
  	res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

router.get('/callback', (req, res) => {
  const { code } = req.query;
  spotifyApi.authorizationCodeGrant(code).then(data => {
    const { expires_in, access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);
    res.redirect(`/#/user/${access_token}/${refresh_token}`);
  }).catch(err => {
    res.redirect('/#/error/invalid token');
  });
});


module.exports = router;