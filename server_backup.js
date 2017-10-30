var express = require('express');

var server = express();

server.listen(5067, "165.227.73.61", function () {
    console.log('Serving demo server on 165.227.73.61:5067...');
});

server.get('*', function (req, res) {
    res.send('yo whats good '+req.params.name);
});
