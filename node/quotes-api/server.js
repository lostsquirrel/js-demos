var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('quotes.db');
var app = express();
var port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, function () {
    console.log('Express app listening on port ' + port);
});

app.get('/', function (request, response) {
    response.send('Get request received at ' + request.url);
});


app.get('/quotes', function(req, res){
    if(req.query.year){
        db.all('SELECT * FROM quotes WHERE year = ?', [req.query.year], function(err, rows){
            if(err){
                res.send(err.message);
            }
            else{
                console.log("Return a list of quotes from the year: " + req.query.year);
                res.json(rows);
            }
        });
    }
    else{
        db.all('SELECT * FROM quotes', function processRows(err, rows){
            if(err){
                res.send(err.message);
            }
            else{
                for( var i = 0; i < rows.length; i++){
                    console.log(rows[i].quote);
                }
                res.json(rows);
            }
        });
    }
});

app.get('/quotes/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    db.get('SELECT * FROM quotes WHERE rowid = ?', [req.params.id], function(err, row){
        if(err){
            console.log(err.message);
        }
        else{
            res.json(row);
        }
    });
});

app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    db.run('INSERT INTO quotes VALUES (?, ?, ?)', [req.body.quote, req.body.author, req.body.year], function(err){
        if(err){
            console.log(err.message);
        }
        else{
            res.send('Inserted quote with id: ' + this.lastID);
        }
    });
});