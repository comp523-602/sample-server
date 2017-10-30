var express = require('express');

var server = express();

server.listen(5063, "165.227.73.61", function () {
    console.log('Serving demo server on 165.227.73.61:5063...');
});

server.get('*', function (req, res) {
    res.send('hello '+req.query.name+'!');
});
