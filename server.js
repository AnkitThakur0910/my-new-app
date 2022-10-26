const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/my-new-app'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/my-new-app/index.html'));});
// hum process.env.port isiliye use karte hai taaki hame jo hai vo uss parametre par run kare
app.listen(process.env.PORT || 8080);
