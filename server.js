const fs = require("fs");
var path = require('path')
var https = require('https');
var httpserver = require('http')
var express = require('express')

var app = express()
app.use(express.json({}))
app.use(express.static('./client'))
app.get('*', function(req, res){
    res.sendFile('index.html',{root: path.join(__dirname, 'client')});
});

// http.get('*', function(req, res) {  
//     res.redirect('https://' + req.headers.host + req.url);
// })
app.listen(80);
// var options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/poke-dex.com/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/poke-dex.com/fullchain.pem')
// };
// https.createServer(options, app).listen(443);
console.log('listening')

