var express = require('express');
var app = express();
var port = 3000;

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});

app.get('/', function(request, response){
    response.send('Get request received at ' + request.url);
});