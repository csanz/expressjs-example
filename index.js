
require.paths = require.paths.unshift(__dirname + '/../node_modules');
require('./lib/exceptions')

var app = require('./lib/app.js')();


var port = process.env.PORT || 3000;
console.log("Listening on " + port);

app.listen(port);
