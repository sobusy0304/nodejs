module.exports = function(app){

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.get('/', function(req, res){
    res.render('home');
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});
app.post('/contact', urlencodedParser, function(req, res){
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('contact_done', {data: req.body});
});

app.get('/login', function(req, res){
    res.render('login');
});

};
