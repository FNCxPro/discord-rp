# discord-rp
DiscordApp rich presence updaters in NodeJS  
Broadcast all of your doings on the computer to everyone on Discord!
## Installation
1. Run `git clone https://github.com/FNCxPro/discord-rp.git`
2. Run `cd discord-rp`
3. Run `npm install`
4. Copy `config/default.json` to `config/production.json`
5. Create an app at https://discordapp.com/developers/applications/me
6. Name it "Rich Presence"
7. Add https://i.imgur.com/V6VDpTu.png as an asset to the app and name it "netflix". Make sure it is a **Large** asset!!
8. Add https://i.imgur.com/ACJO88s.png as an asset to the app and name it "play". Make sure it is a **Small** asset!!
9. Add https://i.imgur.com/mfappIj.png as an asset to the app and name it "pause". Make sure it is a **Small** asset!!
10. Edit `config/production.json` and change clientId to the client ID of the Discord dev app you just made
11. Run `npm start`