const express = require('express');
const app = express();

app.get('/', function(req, res) {
    return res.json({ 
        message: 'Hello World : GET',
        success: true
    })
});

app.post('/', function(req, res) {
    return res.json({ 
        message: 'Hello World : POST',
        success: true
    })
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});


var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://i-wish-there-was-default-rtdb.firebaseio.com"
});
