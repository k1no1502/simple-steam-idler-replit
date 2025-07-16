const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');

const client = new SteamUser();

const logOnOptions = {
  accountName: process.env.ACCOUNT_USERNAME,
  password: process.env.ACCOUNT_PASSWORD,
  twoFactorCode: SteamTotp.generateAuthCode(process.env.SHARED_SECRET)
};

client.logOn(logOnOptions);


var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [730, 1238840, 1238810, 1517290, 1238860, 1238820, 1238880, 307780, 976310, 1110910, 1293830, 230410, 2669320];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


// var username2 = process.env.username2;
// var password2 = process.env.password2;
// var shared_secret2 = process.env.shared2;

// var games2 = [730, 440, 570, 304930];  // Enter here AppIDs of the needed games
// var status2 = 1;  // 1 - online, 7 - invisible


// user2 = new steamUser();
// user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
// user2.on('loggedOn', () => {
// 	if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
// 	user2.setPersona(status2);               
// 	user2.gamesPlayed(games2);
// });
