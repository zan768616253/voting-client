import express from 'express';
import path from 'path';

let app = express();
let port = 3000;

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/dist/');

app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req, res){
	res.render('index.ejs');
})

app.listen(port, function(){
	console.log('Express server listening on port ' + port);
});
